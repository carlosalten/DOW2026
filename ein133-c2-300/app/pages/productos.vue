<script setup lang="ts">
import type { Producto } from '~/types/producto';
const { data: productos, pending, error, refresh } = await useFetch<Producto[]>('/api/productos')

const guardandoProducto = ref(false)
const errorFormulario = ref('')
const formProducto = reactive({
    tipo: '',
    marca: '',
    modelo: '',
    stock: '',
    precio: '',
})
function limpiarFormulario() {
    formProducto.tipo = ''
    formProducto.marca = ''
    formProducto.modelo = ''
    formProducto.stock = ''
    formProducto.precio = ''
    errorFormulario.value = ''
}
async function guardarProducto() {
    guardandoProducto.value = true
    errorFormulario.value = ''

    try {
        await $fetch('/api/productos', {
            method: 'POST',
            body: {
                tipo: formProducto.tipo,
                marca: formProducto.marca,
                modelo: formProducto.modelo,
                stock: formProducto.stock,
                precio: formProducto.precio
            }
        })
        await refresh()
        limpiarFormulario()
    } catch (err: any) {
        errorFormulario.value = getApiErrorMessage(err, 'No se pudo guardar.')
    } finally {
        guardandoProducto.value = false
    }
}
</script>

<template>
    <div>
        <!-- Page header -->
        <div class="bg-white border-b border-gray-100">
            <div class="max-w-6xl mx-auto px-6 py-10">
                <h1 class="text-3xl font-extrabold text-gray-900">Productos</h1>
                <p class="text-muted text-sm mt-1">
                    Listado de roductos disponibles con stock actualizado.
                </p>
            </div>
        </div>

        <!-- Product grid -->
        <main class="max-w-6xl mx-auto px-6 pt-6 pb-12">
            <section class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-4">
                <div class="flex flex-col gap-2 mb-6">
                    <p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                        Nuevo producto
                    </p>
                    <h2 class="text-2xl font-bold text-gray-900">Agregar producto al catálogo</h2>
                    <p class="text-sm text-muted">
                        Completa los datos principales antes de publicarlo en la grilla.
                    </p>
                </div>

                <form class="space-y-5" @submit.prevent="guardarProducto">

                    <div class="grid grid-cols-1 gap-5">
                        <UFormField label="Tipo" nombre="tipo" :ui="fieldUi">
                            <UInput v-model="formProducto.tipo" color="neutral" variant="none" class="w-full"
                                :ui="inputUi" placeholder="Procesador" />
                        </UFormField>
                    </div>

                    <div class="grid grid-cols-2 gap-5">
                        <UFormField label="Marca" nombre="marca" :ui="fieldUi">
                            <UInput v-model="formProducto.marca" color="neutral" variant="none" class="w-full"
                                :ui="inputUi" placeholder="Ej. ASUS" />
                        </UFormField>

                        <UFormField label="Modelo" nombre="modelo" :ui="fieldUi">
                            <UInput v-model="formProducto.modelo" color="neutral" variant="none" class="w-full"
                                :ui="inputUi" placeholder="Ej. Dual RTX 4070" />
                        </UFormField>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] gap-5 items-end">
                        <UFormField label="Stock" nombre="stock" :ui="fieldUi">
                            <UInput type="number" v-model="formProducto.stock" color="neutral" variant="none"
                                class="w-full" :ui="inputUi" />
                        </UFormField>

                        <UFormField label="Precio (CLP)" nombre="precio" :ui="fieldUi">
                            <UInput type="number" v-model="formProducto.precio" color="neutral" variant="none"
                                class="w-full" :ui="inputUi" />
                        </UFormField>

                        <UButton type="submit" :ui="submitButtonUi">Guardar Producto</UButton>
                    </div>
                </form>
            </section>

            <div class="grid grid-cols-3 gap-6">
                <!-- Productos -->
                <ProductoCard v-for="producto in productos" :key="producto.id" :producto="producto" />
            </div>
        </main>
    </div>
</template>