<template>
    <div>
        <!-- Hero -->
        <section class="bg-brand-soft">
            <div class="max-w-6xl mx-auto px-6 py-28 flex flex-col items-center text-center gap-6">
                <span class="text-xs font-bold text-accent uppercase tracking-[0.2em]">Componentes para PC</span>
                <h1 class="text-5xl font-extrabold text-brand leading-tight max-w-2xl">
                    Arma la computadora de tus sueños
                </h1>
                <p class="text-base text-muted max-w-lg leading-relaxed">
                    Los mejores procesadores, placas de video, memorias y almacenamiento, con stock real y
                    precios actualizados todos los días.
                </p>
                <div class="flex items-center gap-3 mt-2">
                    <a href="productos.html"
                        class="bg-brand text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-brand-deep transition-colors shadow-sm">
                        Ver productos
                    </a>
                    <a href="#categorias"
                        class="bg-white text-brand text-sm font-semibold px-6 py-3 rounded-lg border border-brand hover:bg-brand-soft transition-colors">
                        Explorar categorías
                    </a>
                </div>
            </div>
        </section>

        <!-- Stats -->
        <section class="bg-white border-b border-gray-100">
            <div class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 divide-x divide-gray-100">
                <div class="text-center px-8">
                    <p class="text-4xl font-extrabold text-brand">+500</p>
                    <p class="text-sm text-muted mt-1">Productos disponibles</p>
                </div>
                <div class="text-center px-8">
                    <p class="text-4xl font-extrabold text-brand">+30</p>
                    <p class="text-sm text-muted mt-1">Marcas reconocidas</p>
                </div>
                <div class="text-center px-8">
                    <p class="text-4xl font-extrabold text-brand">24 h</p>
                    <p class="text-sm text-muted mt-1">Despacho express</p>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="max-w-6xl mx-auto px-6 py-20">
            <h2 class="text-2xl font-bold text-gray-900 text-center mb-2">¿Por qué elegirnos?</h2>
            <p class="text-muted text-center text-sm mb-12">
                Todo lo que necesitás para armar tu PC en un solo lugar.
            </p>
            <div class="grid grid-cols-3 gap-6">
                <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                    <div class="w-11 h-11 bg-accent-soft rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                        </svg>
                    </div>
                    <h3 class="font-semibold text-gray-900">Amplio catálogo</h3>
                    <p class="text-sm text-muted leading-relaxed">
                        Procesadores, placas de video, memorias, almacenamiento, gabinetes y mucho más. Todo
                        en un solo lugar.
                    </p>
                </div>

                <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                    <div class="w-11 h-11 bg-accent-soft rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                    </div>
                    <h3 class="font-semibold text-gray-900">Marcas originales</h3>
                    <p class="text-sm text-muted leading-relaxed">
                        Trabajamos únicamente con distribuidores oficiales. Todos los productos incluyen
                        garantía del fabricante.
                    </p>
                </div>

                <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                    <div class="w-11 h-11 bg-accent-soft rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                    </div>
                    <h3 class="font-semibold text-gray-900">Envío rápido</h3>
                    <p class="text-sm text-muted leading-relaxed">
                        Despacho express en 24 horas a todo el país. Retiro en local disponible sin costo
                        adicional.
                    </p>
                </div>
            </div>
        </section>

        <!-- Categories -->
        <section id="categorias" class="bg-white py-20">
            <div class="max-w-6xl mx-auto px-6">
                <h2 class="text-2xl font-bold text-gray-900 text-center mb-2">Categorías</h2>
                <p class="text-muted text-center text-sm mb-12">Explorá por tipo de componente.</p>
                <div class="grid grid-cols-4 gap-4">
                    <a href="productos.html"
                        class="group bg-surface border border-transparent rounded-xl p-6 flex flex-col items-center gap-3 hover:border-brand hover:bg-brand-soft transition-colors">
                        <div
                            class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand font-bold text-xs group-hover:shadow-none transition-shadow">
                            CPU
                        </div>
                        <span
                            class="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors text-center">Procesadores</span>
                    </a>

                    <a href="productos.html"
                        class="group bg-surface border border-transparent rounded-xl p-6 flex flex-col items-center gap-3 hover:border-brand hover:bg-brand-soft transition-colors">
                        <div
                            class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand font-bold text-xs group-hover:shadow-none transition-shadow">
                            GPU
                        </div>
                        <span
                            class="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors text-center">Tarjetas
                            de Video</span>
                    </a>

                    <a href="productos.html"
                        class="group bg-surface border border-transparent rounded-xl p-6 flex flex-col items-center gap-3 hover:border-brand hover:bg-brand-soft transition-colors">
                        <div
                            class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand font-bold text-xs group-hover:shadow-none transition-shadow">
                            RAM
                        </div>
                        <span
                            class="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors text-center">Memorias
                            RAM</span>
                    </a>

                    <a href="productos.html"
                        class="group bg-surface border border-transparent rounded-xl p-6 flex flex-col items-center gap-3 hover:border-brand hover:bg-brand-soft transition-colors">
                        <div
                            class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand font-bold text-xs group-hover:shadow-none transition-shadow">
                            SSD
                        </div>
                        <span
                            class="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors text-center">Almacenamiento</span>
                    </a>

                    <a href="productos.html"
                        class="group bg-surface border border-transparent rounded-xl p-6 flex flex-col items-center gap-3 hover:border-brand hover:bg-brand-soft transition-colors">
                        <div
                            class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand font-bold text-xs group-hover:shadow-none transition-shadow">
                            MB
                        </div>
                        <span
                            class="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors text-center">Placas
                            Madre</span>
                    </a>

                    <a href="productos.html"
                        class="group bg-surface border border-transparent rounded-xl p-6 flex flex-col items-center gap-3 hover:border-brand hover:bg-brand-soft transition-colors">
                        <div
                            class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand font-bold text-xs group-hover:shadow-none transition-shadow">
                            PSU
                        </div>
                        <span
                            class="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors text-center">Fuentes
                            de Poder</span>
                    </a>

                    <a href="productos.html"
                        class="group bg-surface border border-transparent rounded-xl p-6 flex flex-col items-center gap-3 hover:border-brand hover:bg-brand-soft transition-colors">
                        <div
                            class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand font-bold text-xs group-hover:shadow-none transition-shadow">
                            FAN
                        </div>
                        <span
                            class="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors text-center">Refrigeración</span>
                    </a>

                    <a href="productos.html"
                        class="group bg-surface border border-transparent rounded-xl p-6 flex flex-col items-center gap-3 hover:border-brand hover:bg-brand-soft transition-colors">
                        <div
                            class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand font-bold text-xs group-hover:shadow-none transition-shadow">
                            GAB
                        </div>
                        <span
                            class="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors text-center">Gabinetes</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- CTA Banner -->
        <section class="bg-brand">
            <div class="max-w-6xl mx-auto px-6 py-16 text-center flex flex-col items-center gap-5">
                <h2 class="text-3xl font-bold text-white">¿Listo para armar tu PC?</h2>
                <p class="text-blue-200 text-sm max-w-md">
                    Explorá nuestro catálogo completo con stock actualizado y los mejores precios del
                    mercado.
                </p>
                <a href="productos.html"
                    class="bg-white text-brand font-semibold text-sm px-8 py-3 rounded-lg hover:bg-brand-soft transition-colors mt-1">
                    Ver catálogo completo
                </a>
            </div>
        </section>
    </div>
</template>