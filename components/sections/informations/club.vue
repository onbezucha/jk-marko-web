<template>
    <section class="relative overflow-hidden">
        <!-- Moderní diagonální rozdělení sekce -->
        <div
            class="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent z-0"
        ></div>

        <!-- Hlavní obsah -->
        <div
            class="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10"
        >
            <!-- Hlavička sekce s moderním podtržením -->
            <div class="mb-12 md:mb-16 lg:mb-20">
                <h2
                    class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black"
                >
                    Jezdecký Klub
                    <span class="block h-1 w-16 bg-[#009FE1] mt-2"></span>
                </h2>
                <p class="text-lg md:text-xl text-black/70 max-w-3xl">
                    Vítejte v našem jezdeckém areálu, kde rozvíjíme jezdecké
                    dovednosti v klidném prostředí obklopeném přírodou.
                </p>
            </div>

            <!-- Hlavní grid sekce -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <!-- Levá část s textem -->
                <div class="md:col-span-5 lg:col-span-5 order-2 md:order-1">
                    <div class="space-y-6">
                        <!-- Feature box 1 -->
                        <div
                            class="p-6 rounded-xl bg-white shadow-lg border-l-4 border-[#009FE1] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div class="flex items-start">
                                <div class="mr-4 text-[#009FE1]">
                                    <Icon
                                        name="heroicons:home"
                                        class="w-7 h-7"
                                    />
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg mb-2">
                                        Klidné prostředí
                                    </h3>
                                    <p class="text-black/70">
                                        Náš areál je umístěn kousek od Říčan v
                                        okrese Praha-východ, na klidném místě
                                        obklopeném lesy, ideálním pro výcvik a
                                        relaxaci.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Feature box 2 -->
                        <div
                            class="p-6 rounded-xl bg-white shadow-lg border-l-4 border-[#009FE1] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div class="flex items-start">
                                <div class="mr-4 text-[#009FE1]">
                                    <Icon
                                        name="heroicons:academic-cap"
                                        class="w-7 h-7"
                                    />
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg mb-2">
                                        Kompletní jezdecký výcvik
                                    </h3>
                                    <p class="text-black/70">
                                        Nabízíme výcvik jezdců všech úrovní - od
                                        nejmladších přes rekreační jezdce až po
                                        vedení ve sportu, pod dohledem zkušených
                                        trenérů a cvičitelů.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Feature box 3 -->
                        <div
                            class="p-6 rounded-xl bg-white shadow-lg border-l-4 border-[#009FE1] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div class="flex items-start">
                                <div class="mr-4 text-[#009FE1]">
                                    <Icon
                                        name="heroicons:trophy"
                                        class="w-7 h-7"
                                    />
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg mb-2">
                                        Výcvik koní
                                    </h3>
                                    <p class="text-black/70">
                                        Nabízíme také výcvik koní od remontního
                                        výcviku až po korekturu pokažených nebo
                                        špatně ježděných koní, včetně "návodu k
                                        použití".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <NuxtLink
                            to="/kontakt"
                            class="inline-flex items-center px-6 py-3 bg-[#009FE1] text-white rounded-lg font-medium hover:bg-[#0084b8] transition-colors duration-300 shadow-md hover:shadow-lg group"
                        >
                            Kontaktujte nás
                            <Icon
                                name="heroicons:arrow-right"
                                class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Pravá část s obrázky - moderní skládaná galerie -->
                <div
                    class="md:col-span-7 lg:col-span-7 order-1 md:order-2 relative"
                >
                    <div class="grid grid-cols-6 grid-rows-6 gap-4 h-[500px]">
                        <!-- Hlavní obrázek -->
                        <div
                            class="col-span-4 row-span-4 relative rounded-xl overflow-hidden shadow-xl"
                        >
                            <img
                                src="https://picsum.photos/id/1074/800/600"
                                alt="Jezdecký klub"
                                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                            ></div>
                        </div>

                        <!-- Menší obrázek 1 -->
                        <div
                            class="col-span-2 row-span-3 col-start-5 row-start-1 rounded-xl overflow-hidden shadow-lg transform translate-y-6"
                        >
                            <img
                                src="https://picsum.photos/id/790/400/600"
                                alt="Kůň"
                                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        <!-- Menší obrázek 2 -->
                        <div
                            class="col-span-3 row-span-2 col-start-1 row-start-5 rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src="https://picsum.photos/id/1084/600/300"
                                alt="Jízda na koni"
                                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        <!-- Menší obrázek 3 -->
                        <div
                            class="col-span-3 row-span-2 col-start-4 row-start-5 rounded-xl overflow-hidden shadow-lg transform translate-y-4"
                        >
                            <img
                                src="https://picsum.photos/id/1066/600/300"
                                alt="Stáje"
                                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        <!-- Dekorativní prvek -->
                        <div
                            class="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#009FE1] opacity-10 z-0"
                        ></div>
                        <div
                            class="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#009FE1] opacity-10 z-0"
                        ></div>
                    </div>

                    <!-- Badge s počtem let zkušeností -->
                    <div
                        class="absolute top-4 right-4 z-20 bg-[#009FE1] text-white rounded-full px-4 py-2 flex items-center shadow-lg"
                    >
                        <span class="text-2xl font-bold mr-1">15</span>
                        <span class="text-sm leading-tight"
                            >let<br />zkušeností</span
                        >
                    </div>
                </div>
            </div>

            <!-- Statistické údaje - moderní styl s animací při najetí -->
            <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div
                    class="p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#009FE1]/30 transition-all duration-300 text-center group"
                >
                    <div
                        class="text-3xl md:text-4xl font-bold mb-2 text-[#009FE1] group-hover:scale-110 transition-transform duration-300"
                    >
                        30+
                    </div>
                    <p class="text-black/70">Koní v areálu</p>
                </div>

                <div
                    class="p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#009FE1]/30 transition-all duration-300 text-center group"
                >
                    <div
                        class="text-3xl md:text-4xl font-bold mb-2 text-[#009FE1] group-hover:scale-110 transition-transform duration-300"
                    >
                        500+
                    </div>
                    <p class="text-black/70">Spokojených jezdců</p>
                </div>

                <div
                    class="p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#009FE1]/30 transition-all duration-300 text-center group"
                >
                    <div
                        class="text-3xl md:text-4xl font-bold mb-2 text-[#009FE1] group-hover:scale-110 transition-transform duration-300"
                    >
                        5
                    </div>
                    <p class="text-black/70">Kvalifikovaných trenérů</p>
                </div>

                <div
                    class="p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#009FE1]/30 transition-all duration-300 text-center group"
                >
                    <div
                        class="text-3xl md:text-4xl font-bold mb-2 text-[#009FE1] group-hover:scale-110 transition-transform duration-300"
                    >
                        20+
                    </div>
                    <p class="text-black/70">Akcí ročně</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Zde by byly případné skripty pro Nuxt 3
</script>
