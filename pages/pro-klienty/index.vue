<template>
    <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
        <!-- Hlavní kontejner -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <!-- Záhlaví sekce -->
            <div class="mb-10">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Klientská zóna
                </h1>
                <p class="text-gray-600 max-w-2xl">
                    Všechny důležité dokumenty a informace na jednom místě pro
                    naše klienty.
                </p>
            </div>

            <!-- SEKCE 1: Důležitá oznámení a historické informace -->
            <section class="mb-12">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-xl font-semibold text-gray-900">
                        Důležitá oznámení
                    </h2>
                    <button
                        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#009FE1] hover:bg-[#0080B8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009FE1] transition duration-200"
                    >
                        <Icon name="uil:bell" class="w-5 h-5 mr-2" />
                        <span>Přihlásit k odběru</span>
                    </button>
                </div>

                <!-- Nejnovější důležité oznámení -->
                <div
                    class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6"
                >
                    <div class="p-6">
                        <div class="flex items-center space-x-3 mb-3">
                            <div class="flex-shrink-0">
                                <img
                                    src="https://picsum.photos/seed/horse1/48/48"
                                    alt="Avatar"
                                    class="h-10 w-10 rounded-full"
                                />
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-900">
                                    Markéta Nováková
                                </p>
                                <p class="text-xs text-gray-500">
                                    Vedoucí jízdárny • 13. března 2024
                                </p>
                            </div>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            Jarní úprava povrchu v kryté jízdárně
                        </h3>
                        <p class="text-gray-600 mb-4">
                            Rádi bychom vás informovali, že od 18. do 20. března
                            2024 bude probíhat údržba povrchu v kryté jízdárně.
                            V tomto období bude jízdárna uzavřena. Všechny
                            tréninky budou přesunuty na venkovní kolbiště.
                        </p>
                        <div class="rounded-lg overflow-hidden mb-4">
                            <img
                                src="https://picsum.photos/seed/arena/800/400"
                                alt="Krytá jízdárna"
                                class="w-full object-cover h-48"
                            />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-4">
                                <button
                                    class="inline-flex items-center text-gray-500 hover:text-[#009FE1]"
                                >
                                    <Icon
                                        name="uil:thumbs-up"
                                        class="w-5 h-5 mr-1"
                                    />
                                    <span class="text-xs">12</span>
                                </button>
                                <button
                                    class="inline-flex items-center text-gray-500 hover:text-[#009FE1]"
                                >
                                    <Icon
                                        name="uil:comment"
                                        class="w-5 h-5 mr-1"
                                    />
                                    <span class="text-xs">4 komentáře</span>
                                </button>
                            </div>
                            <NuxtLink
                                to="/novinky/jarni-uprava-povrchu"
                                class="inline-flex items-center text-sm font-medium text-[#009FE1] hover:text-[#0080B8]"
                            >
                                Více informací
                                <Icon
                                    name="uil:arrow-right"
                                    class="w-4 h-4 ml-1"
                                />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Historická oznámení -->
                <div class="space-y-4">
                    <h3 class="text-md font-medium text-gray-900 mb-2">
                        Archiv oznámení
                    </h3>

                    <!-- Oznámení 1 -->
                    <div
                        class="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-sm transition-shadow duration-200"
                    >
                        <div class="flex items-center justify-between">
                            <div class="flex items-start space-x-3">
                                <div
                                    class="flex-shrink-0 p-2 bg-purple-50 rounded-lg mt-1"
                                >
                                    <Icon
                                        name="uil:megaphone"
                                        class="w-5 h-5 text-purple-500"
                                    />
                                </div>
                                <div>
                                    <h4
                                        class="text-base font-medium text-gray-900"
                                    >
                                        Změna rozvrhu parkurových tréninků
                                    </h4>
                                    <p
                                        class="text-sm text-gray-600 line-clamp-2 mt-1"
                                    >
                                        Upozorňujeme všechny jezdce, že od 1.
                                        dubna 2024 dochází ke změně v rozvrhu
                                        pravidelných parkurových tréninků. Nově
                                        budou tréninky probíhat...
                                    </p>
                                    <div class="flex items-center mt-2">
                                        <span class="text-xs text-gray-500"
                                            >5. března 2024</span
                                        >
                                        <span class="mx-2 text-gray-300"
                                            >•</span
                                        >
                                        <NuxtLink
                                            to="/novinky/zmena-rozvrhu"
                                            class="text-xs text-[#009FE1] hover:text-[#0080B8]"
                                        >
                                            Přečíst více
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Oznámení 2 -->
                    <div
                        class="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-sm transition-shadow duration-200"
                    >
                        <div class="flex items-center justify-between">
                            <div class="flex items-start space-x-3">
                                <div
                                    class="flex-shrink-0 p-2 bg-green-50 rounded-lg mt-1"
                                >
                                    <Icon
                                        name="uil:award"
                                        class="w-5 h-5 text-green-500"
                                    />
                                </div>
                                <div>
                                    <h4
                                        class="text-base font-medium text-gray-900"
                                    >
                                        Úspěch našich jezdců na regionálním
                                        závodu
                                    </h4>
                                    <p
                                        class="text-sm text-gray-600 line-clamp-2 mt-1"
                                    >
                                        S radostí oznamujeme, že naši jezdci se
                                        umístili na předních příčkách v
                                        regionálním závodu dne 15. února.
                                        Gratulujeme Lucii Novákové za 1.
                                        místo...
                                    </p>
                                    <div class="flex items-center mt-2">
                                        <span class="text-xs text-gray-500"
                                            >20. února 2024</span
                                        >
                                        <span class="mx-2 text-gray-300"
                                            >•</span
                                        >
                                        <NuxtLink
                                            to="/novinky/uspech-jezdcu"
                                            class="text-xs text-[#009FE1] hover:text-[#0080B8]"
                                        >
                                            Přečíst více
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Oznámení 3 -->
                    <div
                        class="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-sm transition-shadow duration-200"
                    >
                        <div class="flex items-center justify-between">
                            <div class="flex items-start space-x-3">
                                <div
                                    class="flex-shrink-0 p-2 bg-amber-50 rounded-lg mt-1"
                                >
                                    <Icon
                                        name="uil:calendar-alt"
                                        class="w-5 h-5 text-amber-500"
                                    />
                                </div>
                                <div>
                                    <h4
                                        class="text-base font-medium text-gray-900"
                                    >
                                        Termíny letních příměstských táborů 2024
                                    </h4>
                                    <p
                                        class="text-sm text-gray-600 line-clamp-2 mt-1"
                                    >
                                        Zveřejňujeme termíny letních
                                        příměstských táborů pro rok 2024. První
                                        turnus začíná 8. července. Přihlašování
                                        bude spuštěno od 1. března 2024...
                                    </p>
                                    <div class="flex items-center mt-2">
                                        <span class="text-xs text-gray-500"
                                            >12. února 2024</span
                                        >
                                        <span class="mx-2 text-gray-300"
                                            >•</span
                                        >
                                        <NuxtLink
                                            to="/novinky/letni-tabory"
                                            class="text-xs text-[#009FE1] hover:text-[#0080B8]"
                                        >
                                            Přečíst více
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tlačítko pro zobrazení více oznámení -->
                <div class="mt-4 text-center">
                    <NuxtLink
                        to="/novinky"
                        class="px-4 py-2 text-sm text-[#009FE1] hover:text-[#0080B8] border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 inline-block"
                    >
                        Zobrazit všechna oznámení
                        <Icon
                            name="uil:angle-down"
                            class="w-4 h-4 ml-1 inline-block"
                        />
                    </NuxtLink>
                </div>
            </section>

            <!-- SEKCE 2: Seznam souborů "Nedávno přidáno" -->
            <section>
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-xl font-semibold text-gray-900">
                        Nedávno přidané soubory
                    </h2>
                    <button
                        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#009FE1] hover:bg-[#0080B8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009FE1] transition duration-200"
                    >
                        <Icon name="uil:cloud-download" class="w-5 h-5 mr-2" />
                        <span>Stáhnout vše</span>
                    </button>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6"
                >
                    <!-- Karta dokumentu - Nový -->
                    <div
                        class="group relative bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-5 transition duration-200 ease-in-out overflow-hidden"
                    >
                        <div class="absolute top-0 right-0">
                            <span
                                class="bg-[#009FE1] text-white text-xs font-semibold py-1 px-2 rounded-bl-lg"
                                >Nový</span
                            >
                        </div>
                        <div class="flex items-start space-x-4">
                            <div
                                class="flex-shrink-0 p-3 bg-blue-50 rounded-lg"
                            >
                                <Icon
                                    name="uil:file-contract"
                                    class="w-8 h-8 text-[#009FE1]"
                                />
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3
                                    class="text-base font-semibold text-gray-900 truncate group-hover:text-[#009FE1] transition duration-200"
                                >
                                    Aktualizovaný ceník jízdárny 2024
                                </h3>
                                <div class="mt-1 flex items-center">
                                    <span class="text-xs text-gray-500"
                                        >PDF • 2.4 MB</span
                                    >
                                    <span
                                        class="mx-2 inline-block h-1 w-1 rounded-full bg-gray-300"
                                    ></span>
                                    <span class="text-xs text-gray-500"
                                        >Přidáno dnes</span
                                    >
                                </div>
                                <div class="mt-3 flex items-center space-x-2">
                                    <button
                                        class="text-xs text-[#009FE1] hover:text-[#0080B8] transition duration-200 flex items-center"
                                    >
                                        <Icon
                                            name="uil:eye"
                                            class="w-4 h-4 mr-1"
                                        />
                                        Náhled
                                    </button>
                                    <a
                                        href="/documents/cenik_2024.pdf"
                                        download
                                        class="text-xs text-[#009FE1] hover:text-[#0080B8] transition duration-200 flex items-center"
                                    >
                                        <Icon
                                            name="uil:download-alt"
                                            class="w-4 h-4 mr-1"
                                        />
                                        Stáhnout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Karta dokumentu -->
                    <div
                        class="group relative bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-5 transition duration-200 ease-in-out"
                    >
                        <div class="flex items-start space-x-4">
                            <div
                                class="flex-shrink-0 p-3 bg-green-50 rounded-lg"
                            >
                                <Icon
                                    name="uil:file-shield-alt"
                                    class="w-8 h-8 text-green-500"
                                />
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3
                                    class="text-base font-semibold text-gray-900 truncate group-hover:text-[#009FE1] transition duration-200"
                                >
                                    Bezpečnostní pokyny pro jezdce
                                </h3>
                                <div class="mt-1 flex items-center">
                                    <span class="text-xs text-gray-500"
                                        >DOCX • 1.8 MB</span
                                    >
                                    <span
                                        class="mx-2 inline-block h-1 w-1 rounded-full bg-gray-300"
                                    ></span>
                                    <span class="text-xs text-gray-500"
                                        >Před 2 dny</span
                                    >
                                </div>
                                <div class="mt-3 flex items-center space-x-2">
                                    <button
                                        class="text-xs text-[#009FE1] hover:text-[#0080B8] transition duration-200 flex items-center"
                                    >
                                        <Icon
                                            name="uil:eye"
                                            class="w-4 h-4 mr-1"
                                        />
                                        Náhled
                                    </button>
                                    <a
                                        href="/documents/bezpecnostni_pokyny.docx"
                                        download
                                        class="text-xs text-[#009FE1] hover:text-[#0080B8] transition duration-200 flex items-center"
                                    >
                                        <Icon
                                            name="uil:download-alt"
                                            class="w-4 h-4 mr-1"
                                        />
                                        Stáhnout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Karta dokumentu -->
                    <div
                        class="group relative bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-5 transition duration-200 ease-in-out"
                    >
                        <div class="flex items-start space-x-4">
                            <div
                                class="flex-shrink-0 p-3 bg-amber-50 rounded-lg"
                            >
                                <Icon
                                    name="uil:calendar-alt"
                                    class="w-8 h-8 text-amber-500"
                                />
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3
                                    class="text-base font-semibold text-gray-900 truncate group-hover:text-[#009FE1] transition duration-200"
                                >
                                    Rozvrh lekcí - Jaro 2024
                                </h3>
                                <div class="mt-1 flex items-center">
                                    <span class="text-xs text-gray-500"
                                        >XLS • 3.2 MB</span
                                    >
                                    <span
                                        class="mx-2 inline-block h-1 w-1 rounded-full bg-gray-300"
                                    ></span>
                                    <span class="text-xs text-gray-500"
                                        >Před týdnem</span
                                    >
                                </div>
                                <div class="mt-3 flex items-center space-x-2">
                                    <button
                                        class="text-xs text-[#009FE1] hover:text-[#0080B8] transition duration-200 flex items-center"
                                    >
                                        <Icon
                                            name="uil:eye"
                                            class="w-4 h-4 mr-1"
                                        />
                                        Náhled
                                    </button>
                                    <a
                                        href="/documents/rozvrh_jaro_2024.xlsx"
                                        download
                                        class="text-xs text-[#009FE1] hover:text-[#0080B8] transition duration-200 flex items-center"
                                    >
                                        <Icon
                                            name="uil:download-alt"
                                            class="w-4 h-4 mr-1"
                                        />
                                        Stáhnout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Ostatní dokumenty v seznamu -->
                <div
                    class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Dokument
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Typ
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Datum
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Velikost
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Akce
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <!-- Řádek dokumentu -->
                                <tr
                                    class="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div
                                                class="flex-shrink-0 p-1.5 bg-red-50 rounded"
                                            >
                                                <Icon
                                                    name="uil:file-alt"
                                                    class="w-5 h-5 text-red-500"
                                                />
                                            </div>
                                            <div class="ml-3">
                                                <div
                                                    class="text-sm font-medium text-gray-900"
                                                >
                                                    Provozní řád jízdárny
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">
                                            PDF
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">
                                            10. ledna 2024
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">
                                            1.2 MB
                                        </div>
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-right"
                                    >
                                        <div
                                            class="flex items-center justify-end space-x-2"
                                        >
                                            <button
                                                class="text-[#009FE1] hover:text-[#0080B8] p-1 rounded-full hover:bg-blue-50 transition-colors duration-200"
                                            >
                                                <Icon
                                                    name="uil:eye"
                                                    class="w-4 h-4"
                                                />
                                            </button>
                                            <a
                                                href="/documents/provozni_rad.pdf"
                                                download
                                                class="text-[#009FE1] hover:text-[#0080B8] p-1 rounded-full hover:bg-blue-50 transition-colors duration-200"
                                            >
                                                <Icon
                                                    name="uil:download-alt"
                                                    class="w-4 h-4"
                                                />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Řádek dokumentu -->
                                <tr
                                    class="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div
                                                class="flex-shrink-0 p-1.5 bg-indigo-50 rounded"
                                            >
                                                <Icon
                                                    name="uil:file-contract"
                                                    class="w-5 h-5 text-indigo-500"
                                                />
                                            </div>
                                            <div class="ml-3">
                                                <div
                                                    class="text-sm font-medium text-gray-900"
                                                >
                                                    Vzor smlouvy o ustájení
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">
                                            DOCX
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">
                                            5. ledna 2024
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">
                                            352 KB
                                        </div>
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-right"
                                    >
                                        <div
                                            class="flex items-center justify-end space-x-2"
                                        >
                                            <button
                                                class="text-[#009FE1] hover:text-[#0080B8] p-1 rounded-full hover:bg-blue-50 transition-colors duration-200"
                                            >
                                                <Icon
                                                    name="uil:eye"
                                                    class="w-4 h-4"
                                                />
                                            </button>
                                            <a
                                                href="/documents/vzor_smlouvy.docx"
                                                download
                                                class="text-[#009FE1] hover:text-[#0080B8] p-1 rounded-full hover:bg-blue-50 transition-colors duration-200"
                                            >
                                                <Icon
                                                    name="uil:download-alt"
                                                    class="w-4 h-4"
                                                />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Řádek dokumentu -->
                                <tr
                                    class="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div
                                                class="flex-shrink-0 p-1.5 bg-pink-50 rounded"
                                            >
                                                <Icon
                                                    name="uil:file-medical"
                                                    class="w-5 h-5 text-pink-500"
                                                />
                                            </div>
                                            <div class="ml-3">
                                                <div
                                                    class="text-sm font-medium text-gray-900"
                                                >
                                                    Formulář zdravotní
                                                    způsobilosti
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">
                                            PDF
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">
                                            22. prosince 2023
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">
                                            485 KB
                                        </div>
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-right"
                                    >
                                        <div
                                            class="flex items-center justify-end space-x-2"
                                        >
                                            <button
                                                class="text-[#009FE1] hover:text-[#0080B8] p-1 rounded-full hover:bg-blue-50 transition-colors duration-200"
                                            >
                                                <Icon
                                                    name="uil:eye"
                                                    class="w-4 h-4"
                                                />
                                            </button>
                                            <a
                                                href="/documents/formular_zdravotni.pdf"
                                                download
                                                class="text-[#009FE1] hover:text-[#0080B8] p-1 rounded-full hover:bg-blue-50 transition-colors duration-200"
                                            >
                                                <Icon
                                                    name="uil:download-alt"
                                                    class="w-4 h-4"
                                                />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Načíst více -->
                    <div class="bg-gray-50 px-6 py-3 flex justify-center">
                        <NuxtLink
                            to="/dokumenty"
                            class="text-sm text-[#009FE1] hover:text-[#0080B8] font-medium flex items-center"
                        >
                            Zobrazit všechny soubory
                            <Icon name="uil:arrow-right" class="w-4 h-4 ml-1" />
                        </NuxtLink>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
// Jednoduchý setup bez modálu a komplexních funkcí
</script>
