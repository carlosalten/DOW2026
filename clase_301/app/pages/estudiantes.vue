<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import type { Curso } from '~/types/curso';
import type { Estudiante } from '~/types/estudiante'

const { data: estudiantes, pending, error, refresh } = await useFetch<Estudiante[]>('/api/estudiantes')
const { data: cursos, pending: pendingCursos } = await useFetch<Curso[]>('/api/cursos')

//formatea cursos para mostrarlos en USelectMenu
const cursosOptions = computed(() => (
    (cursos.value ?? []).map(curso => ({
        id: curso.id,
        label: curso.nombre,
        description: `Nivel ${curso.nivel} - Año ${curso.anio}`
    }))
))

const columns: TableColumn<Estudiante>[] = [
    { accessorKey: 'run', header: 'RUN', meta: defaultColumnMeta },
    { accessorKey: 'apellidos', header: 'Apellidos', meta: defaultColumnMeta },
    { accessorKey: 'nombres', header: 'Nombres', meta: defaultColumnMeta },
    { accessorKey: 'email', header: 'Correo Electrónico', meta: defaultColumnMeta, cell: ({ row }) => row.original.email ?? '-' },
    { accessorKey: 'fechaNac', header: 'Fecha de Nacimiento', meta: defaultColumnMeta, cell: ({ row }) => formatFecha(row.original.fechaNac) },
    { accessorKey: 'curso.nombre', header: 'Curso', meta: defaultColumnMeta }
]

const tableMeta = createTableMeta<Estudiante>()

const mostrarFormulario = ref(false)
const guardandoEstudiante = ref(false)
const errorFormulario = ref('')

const formEstudiante = reactive({
    run: '',
    nombres: '',
    apellidos: '',
    email: '',
    fechaNac: '',
    cursoId: undefined as number | undefined
})

function limpiarFormulario() {
    formEstudiante.run = ''
    formEstudiante.nombres = ''
    formEstudiante.apellidos = ''
    formEstudiante.email = ''
    formEstudiante.fechaNac = ''
    formEstudiante.cursoId = undefined
    errorFormulario.value = ''
}

function cerrarFormulario() {
    mostrarFormulario.value = false
    limpiarFormulario()
}

async function guardarEstudiante() {
    errorFormulario.value = ''
    guardandoEstudiante.value = true

    try {
        await $fetch('/api/estudiantes', {
            method: 'POST',
            body: {
                run: formEstudiante.run,
                nombres: formEstudiante.nombres,
                apellidos: formEstudiante.apellidos,
                email: formEstudiante.email || null,
                fechaNac: formEstudiante.fechaNac || null,
                cursoId: formEstudiante.cursoId
            }
        })
        cerrarFormulario()
        await refresh()
    } catch (err: any) {
        errorFormulario.value = getApiErrorMessage(err, 'No se pudo guardar el estudiante.')
    }
    finally {
        guardandoEstudiante.value = false
    }
}
</script>

<template>
    <div class="mx-auto max-w-7xl space-y-4">
        <!-- Panel Título -->
        <div class="rounded-xl border border-course-line-accent bg-course-surface p-6 shadow-lg backdrop-blur sm:p-6">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div class="space-y-2">
                    <p class="text-sm font-semibold uppercase tracking-widest text-course-accent">
                        Panel Académico
                    </p>
                    <h1 class="text-2xl font-bold tracking-tight text-course-text sm:text-3xl">Estudiantes</h1>
                    <p class="max-w-2xl text-sm leading-6 text-course-text-soft">
                        Consulta el listado actualizado de estudiantes en una vista clara y fácil de revisar.
                    </p>
                </div>
                <!-- Botón para abrir formulario -->
                <UButton icon="i-heroicons-plus" variant="soft" @click="mostrarFormulario = true"
                    class="selft-start rounded-full px-5 text-course-accent-strong shadow-sm">Agregar Estudiante
                </UButton>

            </div>
        </div>

        <!-- Listado de Estudiantes -->
        <div class="rounded-xl border border-course-line bg-course-surface p-4 shadow-lg backdrop-blur sm:p-6">
            <div class="mb-4 flex items-center justify-between border-b border-course-line-soft pb-4">
                <div>
                    <h2 class="text-lg font-semibold text-course-text">Listado de Estudiantes</h2>
                    <p class="text-sm text-course-text-muted">Se muestran los estudiantes del año 2026.</p>
                </div>
            </div>

            <!-- Tabla de estudiantes -->
            <UTable :data="estudiantes" :columns="columns" :meta="tableMeta"
                class="overflow-hidden rounded-lg border border-course-line bg-course-surface" />
        </div>
    </div>

    <!-- Modal Agregar Estudiante -->
    <BaseFormModal v-model:open="mostrarFormulario" title="Agregar Estudiante"
        description="Completa los datos para registrar un nuevo estudiante.">
        <form class="space-y-4" @submit.prevent="guardarEstudiante">
            <!-- run -->
            <UFormField label="RUN" name="run" :ui="modalFormFieldUi">
                <UInput v-model="formEstudiante.run" color="neutral" variant="outline" :ui="modalInputUi" class="w-full"
                    placeholder="Ej: 12345678-9" />
            </UFormField>

            <!-- nombres -->
            <UFormField label="Nombres" name="nombres" :ui="modalFormFieldUi">
                <UInput v-model="formEstudiante.nombres" color="neutral" variant="outline" :ui="modalInputUi"
                    class="w-full" placeholder="Ej: Federico" />
            </UFormField>

            <!-- apellidos -->
            <UFormField label="Apellidos" name="apellidos" :ui="modalFormFieldUi">
                <UInput v-model="formEstudiante.apellidos" color="neutral" variant="outline" :ui="modalInputUi"
                    class="w-full" placeholder="Ej: Santa María" />
            </UFormField>

            <!-- email -->
            <UFormField label="Email" name="email" :ui="modalFormFieldUi">
                <UInput v-model="formEstudiante.email" color="neutral" variant="outline" :ui="modalInputUi"
                    class="w-full" placeholder="Ej: usuario@gmail.com" />
            </UFormField>

            <!-- fecha nacimiento -->
            <UFormField label="Año" name="anio" :ui="modalFormFieldUi">
                <UInput v-model="formEstudiante.fechaNac" color="neutral" variant="outline" type="date"
                    :ui="modalInputUi" class="w-full" />
            </UFormField>

            <!-- cursos -->
            <UFormField label="Curso" name="cursoId" :ui="modalFormFieldUi">
                <USelectMenu v-model="formEstudiante.cursoId" :items="cursosOptions" value-key="id" label-key="label"
                    description-key="description" placeholder="Selecciona un curso" color="neutral" variant="outline"
                    :loading="pendingCursos" class="w-full" :ui="modalSelectUi"
                    :search-input="{ placeholder: 'Buscar curso...', icon: 'i-lucide-search' }">
                </USelectMenu>
            </UFormField>

            <!-- mensajes de error de formulario -->
            <UAlert v-if="errorFormulario" color="error" variant="soft" icon="i-heroicons-exclamation-circle"
                :title="errorFormulario" />

            <!-- botones -->
            <div class="flex justify-end gap-3 pt-2">
                <!-- botón cancelar -->
                <UButton type="button" color="neutral" variant="subtle" @click="cerrarFormulario">
                    Cancelar
                </UButton>

                <!-- botón para guardar -->
                <UButton type="submit" color="primary" icon="i-heroicons-check" :loading="guardandoEstudiante">
                    Guardar Estudiante
                </UButton>
            </div>
        </form>
    </BaseFormModal>
</template>