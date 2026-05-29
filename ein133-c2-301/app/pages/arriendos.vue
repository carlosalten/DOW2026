<script setup lang="ts">

import type { TableColumn } from '@nuxt/ui';
import { table } from 'node:console';
import type { Arriendo } from '~/types/arriendo'
const { data: arriendos, pending, error, refresh } = await useFetch<Arriendo[]>('/api/arriendos')

const columns: TableColumn<Arriendo>[] = [
    { accessorKey: 'marca', header: 'Marca' },
    { accessorKey: 'modelo', header: 'Modelo' },
    { accessorKey: 'patente', header: 'Patente' },
    { accessorKey: 'inicio', header: 'Fecha Inicio', cell: ({ row }) => formatFecha(row.original.inicio) },
    { accessorKey: 'termino', header: 'Fecha Termino', cell: ({ row }) => formatFecha(row.original.inicio) },
    { accessorKey: 'monto', header: 'Monto (CLP)' },
]

const guardandoArriendo = ref(false)
const errorFormulario = ref('')

const formArriendo = reactive({
    marca: '',
    modelo: '',
    patente: '',
    monto: 0,
    inicio: '',
    termino: '',
})

async function guardarArriendo() {
    guardandoArriendo.value = true
    errorFormulario.value = ''
    console.log(formArriendo.inicio)
    console.log(formArriendo.termino)
    try {
        await $fetch('/api/arriendos', {
            method: 'POST',
            body: {
                marca: formArriendo.marca,
                modelo: formArriendo.modelo,
                patente: formArriendo.patente,
                monto: formArriendo.monto,
                inicio: formArriendo.inicio,
                termino: formArriendo.termino,
            }
        })

        await refresh()

    } catch (err: any) {
        console.log(errorFormulario.value.toString())
        errorFormulario.value = getApiErrorMessage(err, 'No se pudo guardar')
    }
    finally {
        guardandoArriendo.value = false
    }
}
</script>
<template>
    <div class="max-w-7xl mx-auto px-6 py-10">
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-heading">Gestión de Arriendos</h1>
            <p class="text-muted mt-1">Consulta el registro de arriendos e ingresa nuevos contratos.</p>
        </div>

        <div class="flex gap-6 items-start">
            <!-- Tabla de arriendos -->
            <section class="flex-1 min-w-0 bg-white rounded-2xl border border-divider shadow-sm">
                <div class="px-6 py-4 border-b border-divider flex items-center justify-between">
                    <h2 class="text-lg font-semibold text-heading">Arriendos Registrados</h2>
                </div>
                <div class="overflow-x-auto">
                    <UTable :data="arriendos" :columns="columns" :ui="tableUi" />
                </div>
            </section>

            <!-- Formulario -->
            <section class="w-96 shrink-0 bg-white rounded-2xl border border-divider shadow-sm">
                <div class="px-6 py-4 border-b border-divider">
                    <h2 class="text-lg font-semibold text-heading">Registrar Nuevo Arriendo</h2>
                    <p class="text-muted text-sm mt-0.5">
                        Completa todos los campos para ingresar un contrato de arriendo.
                    </p>
                </div>
                <form class="p-6" @submit.prevent="guardarArriendo">
                    <div class="grid grid-cols-1 gap-4">
                        <!-- marca -->
                        <UFormField label="Marca" name="marca" :ui="formFieldUi">
                            <UInput v-model="formArriendo.marca" color="neutral" variant="outline" :ui="formInputUi"
                                class="w-full" />
                        </UFormField>

                        <!-- modelo -->
                        <UFormField label="Modelo" name="modelo" :ui="formFieldUi">
                            <UInput v-model="formArriendo.modelo" color="neutral" variant="outline" :ui="formInputUi"
                                class="w-full" />
                        </UFormField>

                        <!-- patente -->
                        <UFormField label="Patente" name="patente" :ui="formFieldUi">
                            <UInput v-model="formArriendo.patente" color="neutral" variant="outline" :ui="formInputUi"
                                class="w-full" />
                        </UFormField>

                        <!-- monto -->
                        <UFormField label="Monto" name="monto" :ui="formFieldUi">
                            <UInput v-model="formArriendo.monto" color="neutral" variant="outline" :ui="formInputUi"
                                class="w-full" />
                        </UFormField>

                        <!-- inicio -->
                        <UFormField label="Inicio" name="inicio" :ui="formFieldUi">
                            <UInput type="date" v-model="formArriendo.inicio" color="neutral" variant="outline"
                                :ui="formInputUi" class="w-full" />
                        </UFormField>

                        <!-- termino -->
                        <UFormField label="Termino" name="termino" :ui="formFieldUi">
                            <UInput type="date" v-model="formArriendo.termino" color="neutral" variant="outline"
                                :ui="formInputUi" class="w-full" />
                        </UFormField>
                    </div>

                    <div class="mt-6 flex gap-3 justify-end border-t border-divider pt-6">
                        <UButton type="reset" color="neutral" variant="outline" :ui="formButtonResetUi">Limpiar
                        </UButton>
                        <UButton type="submit" color="neutral" variant="solid" :ui="formButtonSubmitUi">Registrar
                            Arriendo</UButton>
                    </div>
                </form>
            </section>
        </div>
    </div>
</template>