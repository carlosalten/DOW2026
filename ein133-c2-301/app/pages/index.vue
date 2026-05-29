<template>
    <!-- Hero -->
    <section class="bg-brand-light py-24 px-6">
        <div class="max-w-5xl mx-auto text-center">
            <span
                class="inline-block bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
                Más de 200 vehículos disponibles
            </span>
            <h1 class="text-5xl font-extrabold text-heading leading-tight mb-5">
                Muévete sin límites.<br />
                <span class="text-brand">Arrienda hoy mismo.</span>
            </h1>
            <p class="text-lg text-muted mb-8 max-w-2xl mx-auto">
                La forma más simple de arrendar un vehículo en Chile. Precios transparentes, flota moderna
                y atención disponible las 24 horas.
            </p>
            <div class="flex gap-4 justify-center flex-wrap">
                <a href="arriendos.html"
                    class="bg-brand text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-sm">
                    Ver Arriendos
                </a>
                <a href="#flota"
                    class="border border-brand text-brand bg-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-light transition-colors">
                    Conoce Nuestra Flota
                </a>
            </div>
        </div>
    </section>

    <!-- Stats -->
    <section class="border-b border-divider bg-white py-10 px-6">
        <div class="max-w-5xl mx-auto grid grid-cols-3 gap-6 text-center">
            <div>
                <p class="text-3xl font-extrabold text-brand">+200</p>
                <p class="text-sm text-muted mt-1">Vehículos disponibles</p>
            </div>
            <div>
                <p class="text-3xl font-extrabold text-brand">+5.000</p>
                <p class="text-sm text-muted mt-1">Clientes satisfechos</p>
            </div>
            <div>
                <p class="text-3xl font-extrabold text-brand">24/7</p>
                <p class="text-sm text-muted mt-1">Atención al cliente</p>
            </div>
        </div>
    </section>

    <!-- Por qué elegirnos -->
    <section class="py-20 px-6">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-heading mb-3">¿Por qué elegir DriveEasy?</h2>
            <p class="text-center text-muted mb-12">
                Diseñamos cada detalle para que tu experiencia sea simple y sin estrés
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                    class="bg-surface rounded-2xl p-7 border border-divider text-center hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <svg class="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-heading text-lg mb-2">Sin complicaciones</h3>
                    <p class="text-muted text-sm leading-relaxed">
                        Reserva en línea en menos de 5 minutos. Elige tu vehículo, confirma y recíbelo
                        directamente en tu puerta o en nuestras sucursales.
                    </p>
                </div>

                <div
                    class="bg-surface rounded-2xl p-7 border border-divider text-center hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <svg class="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-heading text-lg mb-2">Precios transparentes</h3>
                    <p class="text-muted text-sm leading-relaxed">
                        Tarifas diarias desde $40.000 CLP. Sin cargos ocultos, sin sorpresas. El precio que
                        ves es el precio que pagas.
                    </p>
                </div>

                <div
                    class="bg-surface rounded-2xl p-7 border border-divider text-center hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <svg class="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-heading text-lg mb-2">Seguros incluidos</h3>
                    <p class="text-muted text-sm leading-relaxed">
                        Todos nuestros arriendos incluyen seguro básico contra accidentes. Opcional: cobertura
                        total sin deducible para mayor tranquilidad.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Flota -->
    <section id="flota" class="bg-surface py-20 px-6 border-t border-divider">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-heading mb-3">Nuestra Flota</h2>
            <p class="text-muted text-center mb-12">
                Vehículos para cada necesidad, ocasión y presupuesto
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Sedán -->
                <div
                    class="bg-white rounded-2xl border border-divider overflow-hidden hover:shadow-md transition-shadow group">
                    <div
                        class="bg-brand-light h-44 flex flex-col items-center justify-center gap-2 group-hover:bg-brand/10 transition-colors">
                        <svg class="w-20 h-20 text-brand/40" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                        </svg>
                        <span class="text-xs font-semibold text-brand/60 uppercase tracking-wider">Categoría
                            Económica</span>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-heading text-xl mb-1">Sedán / Hatchback</h3>
                        <p class="text-muted text-sm mb-4 leading-relaxed">
                            Ideal para uso en ciudad. Bajo consumo, fácil de estacionar y perfecto para viajes
                            cortos y medianos.
                        </p>
                        <ul class="text-xs text-muted space-y-1 mb-5">
                            <li class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-brand rounded-full"></span> Hasta 5 pasajeros
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-brand rounded-full"></span> Transmisión automática o
                                manual
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-brand rounded-full"></span> Aire acondicionado
                                incluido
                            </li>
                        </ul>
                        <div class="flex items-center justify-between border-t border-divider pt-4">
                            <div>
                                <span class="text-brand font-extrabold text-xl">$40.000</span>
                                <span class="text-muted text-xs">/día</span>
                            </div>
                            <a href="arriendos.html"
                                class="bg-brand text-white text-sm px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors font-medium">
                                Arrendar
                            </a>
                        </div>
                    </div>
                </div>

                <!-- SUV -->
                <div
                    class="bg-white rounded-2xl border border-divider overflow-hidden hover:shadow-md transition-shadow group">
                    <div
                        class="bg-brand-light h-44 flex flex-col items-center justify-center gap-2 group-hover:bg-brand/10 transition-colors">
                        <svg class="w-20 h-20 text-brand/40" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                        </svg>
                        <span class="text-xs font-semibold text-brand/60 uppercase tracking-wider">Categoría
                            Confort</span>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-heading text-xl mb-1">SUV / Todoterreno</h3>
                        <p class="text-muted text-sm mb-4 leading-relaxed">
                            Potencia y espacio para toda la familia. Ideal para viajes largos, terrenos
                            difíciles y aventuras en el sur.
                        </p>
                        <ul class="text-xs text-muted space-y-1 mb-5">
                            <li class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-brand rounded-full"></span> Hasta 7 pasajeros
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-brand rounded-full"></span> Tracción 4x4 disponible
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-brand rounded-full"></span> Maletero amplio
                            </li>
                        </ul>
                        <div class="flex items-center justify-between border-t border-divider pt-4">
                            <div>
                                <span class="text-brand font-extrabold text-xl">$65.000</span>
                                <span class="text-muted text-xs">/día</span>
                            </div>
                            <a href="arriendos.html"
                                class="bg-brand text-white text-sm px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors font-medium">
                                Arrendar
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Furgón -->
                <div
                    class="bg-white rounded-2xl border border-divider overflow-hidden hover:shadow-md transition-shadow group">
                    <div
                        class="bg-brand-light h-44 flex flex-col items-center justify-center gap-2 group-hover:bg-brand/10 transition-colors">
                        <svg class="w-20 h-20 text-brand/40" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.35-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                        </svg>
                        <span class="text-xs font-semibold text-brand/60 uppercase tracking-wider">Categoría
                            Carga</span>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-heading text-xl mb-1">Furgón / Camioneta</h3>
                        <p class="text-muted text-sm mb-4 leading-relaxed">
                            La solución perfecta para mudanzas, cargas o grupos grandes. Gran volumen de carga y
                            fácil acceso.
                        </p>
                        <ul class="text-xs text-muted space-y-1 mb-5">
                            <li class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-brand rounded-full"></span> Hasta 1.200 kg de carga
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-brand rounded-full"></span> Puerta trasera de amplio
                                acceso
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-brand rounded-full"></span> GPS incluido
                            </li>
                        </ul>
                        <div class="flex items-center justify-between border-t border-divider pt-4">
                            <div>
                                <span class="text-brand font-extrabold text-xl">$75.000</span>
                                <span class="text-muted text-xs">/día</span>
                            </div>
                            <a href="arriendos.html"
                                class="bg-brand text-white text-sm px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors font-medium">
                                Arrendar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Banner -->
    <section class="bg-brand py-16 px-6 text-center">
        <h2 class="text-3xl font-bold text-white mb-3">¿Listo para partir?</h2>
        <p class="text-white/70 mb-8 text-lg">Reserva en línea en menos de 5 minutos</p>
        <a href="arriendos.html"
            class="bg-accent text-white font-bold px-8 py-3.5 rounded-xl hover:bg-accent-dark transition-colors inline-block shadow-sm text-lg">
            Reservar Ahora
        </a>
    </section>
</template>