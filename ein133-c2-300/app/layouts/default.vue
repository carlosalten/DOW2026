<script setup lang="ts">
const route = useRoute()
const isActive = (to: String) => route.path === to
const navLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Productos', to: '/productos' },
]
</script>

<template>
    <div class="bg-surface text-gray-900 antialiased">
        <!-- Nav -->
        <header class="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
            <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="index.html" class="text-brand font-bold text-xl tracking-tight">TechParts</a>
                <nav class="flex items-center gap-1">
                    <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="px-4 py-2 rounded-lg text-sm"
                        :class="isActive(link.to) ? 'font-semibold text-brand bg-brand-soft transition-colors hover:bg-brand-soft' : 'font-medium text-muted transition-colors hover:text-brand hover:bg-brand-soft'">
                        {{ link.label }}
                    </NuxtLink>

                </nav>
            </div>
        </header>

        <slot />

        <!-- Footer -->
        <footer class="bg-gray-900">
            <div class="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
                <span class="font-bold text-white text-lg">TechParts</span>
                <span class="text-gray-400 text-sm">© 2026 TechParts. Todos los derechos reservados.</span>
            </div>
        </footer>
    </div>
</template>