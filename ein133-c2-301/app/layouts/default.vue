<script setup lang="ts">
const route = useRoute()

const isActive = (to: String) => route.path === to

const navLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Arriendos', to: '/arriendos' },
]
</script>

<template>
    <div class="bg-surface text-heading min-h-screen">
        <!-- Navegación -->
        <nav class="bg-white border-b border-divider shadow-sm sticky top-0 z-10">
            <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div class="text-xl font-extrabold tracking-tight">
                    <span class="text-brand">Drive</span><span class="text-accent">Easy</span>
                </div>
                <div class="flex gap-2 text-sm font-medium">
                    <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="px-4 py-2 rounded-lg"
                        :class="isActive(link.to) ? 'bg-brand text-white' : 'text-muted hover:text-brand hover:bg-brand-light transition-colors'">
                        {{ link.label }}
                    </NuxtLink>

                </div>
            </div>
        </nav>

        <slot />

        <!-- Footer -->
        <footer class="border-t border-divider py-6 px-6 text-center mt-10">
            <p class="text-muted text-sm">
                © 2026 <span class="text-brand font-bold">Drive</span><span class="text-accent font-bold">Easy</span>
                Chile · contacto@driveeasy.cl
            </p>
        </footer>
    </div>
</template>