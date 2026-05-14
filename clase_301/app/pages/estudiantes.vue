<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import type { Estudiante } from '~/types/estudiante'

const { data: estudiantes, pending, error, refresh } = await useFetch<Estudiante[]>('/api/estudiantes')

// console.log(estudiantes.value)

const columns: TableColumn<Estudiante>[] = [
    { accessorKey: 'run', header: 'RUN', meta: defaultColumnMeta },
    { accessorKey: 'apellidos', header: 'Apellidos', meta: defaultColumnMeta },
    { accessorKey: 'nombres', header: 'Nombres', meta: defaultColumnMeta },
    { accessorKey: 'email', header: 'Correo Electrónico', meta: defaultColumnMeta, cell: ({ row }) => row.original.email ?? '-' },
    { accessorKey: 'fechaNac', header: 'Fecha de Nacimiento', meta: defaultColumnMeta, cell: ({ row }) => formatFecha(row.original.fechaNac) },
    { accessorKey: 'curso.nombre', header: 'Curso', meta: defaultColumnMeta }
]

const tableMeta = createTableMeta<Estudiante>()

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

                <!-- Botón Actualizar -->
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

</template>