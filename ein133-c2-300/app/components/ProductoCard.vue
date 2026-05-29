<script setup lang="ts">
import type { Producto } from '~/types/producto';

const props = defineProps<{ producto: Producto }>()
</script>

<template>
    <div
        class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between gap-2">
            <span class="text-xs text-muted font-semibold uppercase tracking-wide">{{ props.producto.tipo }}</span>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap"
                :class="props.producto.stock <= 5 ? 'bg-warning-soft text-warning' : 'bg-success-soft text-success'">
                {{ props.producto.stock }} en stock</span>
        </div>
        <div>
            <p class="text-xs font-medium text-muted">{{ props.producto.marca }}</p>
            <h3 class="font-semibold text-gray-900 text-base leading-snug mt-0.5">
                {{ props.producto.modelo }}
            </h3>
        </div>
        <div class="mt-auto pt-4 border-t border-gray-100">
            <p class="text-2xl font-extrabold text-brand">${{ props.producto.precio.toLocaleString('es-CL') }}</p>
        </div>
    </div>
</template>