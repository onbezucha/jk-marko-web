<!-- pages/horses.vue -->
<template>
    <div class="min-h-screen bg-white">
        <!-- Hero sekce -->
        <div class="relative h-[50vh] overflow-hidden">
            <img
                src="https://picsum.photos/seed/horse/1920/1080"
                alt="Koně v JK Marko"
                class="w-full h-full object-cover"
            />
            <div
                class="absolute inset-0 bg-black/50 flex items-center justify-center"
            >
                <div class="text-center px-4">
                    <h1
                        class="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
                    >
                        Naši koně
                    </h1>
                    <p class="text-xl text-white/90 max-w-2xl mx-auto">
                        Poznejte naše výjimečné koně, kteří jsou součástí našeho
                        jezdeckého areálu
                    </p>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <!-- Odstraněno vyhledávání a filtrování podle požadavku -->

            <!-- Hlavní obsah -->
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
                <!-- Postranní navigace (na mobilu je nahoře) -->
                <div class="lg:col-span-1 order-2 lg:order-1">
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24"
                    >
                        <div class="bg-[#009FE1] text-white py-4 px-6">
                            <h3 class="text-xl font-semibold">Naši koně</h3>
                        </div>
                        <nav class="p-4">
                            <ul class="space-y-1">
                                <li v-for="horse in horses" :key="horse.id">
                                    <button
                                        @click="selectHorse(horse.id)"
                                        class="w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3"
                                        :class="[
                                            selectedHorseId === horse.id
                                                ? 'bg-[#009FE1]/10 text-[#009FE1] font-medium'
                                                : 'hover:bg-gray-100',
                                        ]"
                                    >
                                        <img
                                            :src="horse.image"
                                            :alt="horse.name"
                                            class="w-10 h-10 rounded-full object-cover border-2"
                                            :class="
                                                selectedHorseId === horse.id
                                                    ? 'border-[#009FE1]'
                                                    : 'border-transparent'
                                            "
                                        />
                                        <span>{{ horse.name }}</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!-- Statistiky odstraněny podle požadavku -->
                </div>

                <!-- Obsah koní -->
                <div class="lg:col-span-3 order-1 lg:order-2">
                    <!-- Mobilní výběr koně -->
                    <div class="lg:hidden mb-6">
                        <label
                            for="mobile-horse-select"
                            class="block text-sm font-medium text-gray-700 mb-2"
                            >Vyberte koně:</label
                        >
                        <select
                            id="mobile-horse-select"
                            v-model="selectedHorseId"
                            class="block w-full rounded-lg border-0 py-3 px-4 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#009FE1]"
                        >
                            <option
                                v-for="horse in filteredHorses"
                                :key="horse.id"
                                :value="horse.id"
                            >
                                {{ horse.name }}
                            </option>
                        </select>
                    </div>

                    <!-- Oznámení při nenalezení koní -->
                    <div
                        v-if="filteredHorses.length === 0"
                        class="bg-white rounded-xl shadow-lg p-6 text-center"
                    >
                        <Icon
                            name="uil:search"
                            class="text-gray-400 mx-auto mb-4"
                            size="48"
                        />
                        <h3 class="text-xl font-semibold mb-2">
                            Žádný kůň nebyl nalezen
                        </h3>
                        <p class="text-gray-600 mb-4">
                            Zkuste upravit vyhledávací kritéria nebo filtry.
                        </p>
                        <button
                            @click="resetFilters"
                            class="py-2 px-4 bg-[#009FE1] text-white rounded-lg hover:bg-[#009FE1]/90 transition"
                        >
                            Resetovat filtry
                        </button>
                    </div>

                    <!-- Detailní zobrazení koně -->
                    <div
                        v-else-if="selectedHorse"
                        class="bg-white rounded-xl shadow-xl overflow-hidden"
                    >
                        <div class="aspect-[16/9] overflow-hidden relative">
                            <img
                                :src="selectedHorse.image"
                                :alt="selectedHorse.name"
                                class="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                            />
                            <div
                                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                            >
                                <h2
                                    class="text-3xl md:text-4xl font-bold text-white"
                                >
                                    {{ selectedHorse.name }}
                                </h2>
                                <div class="flex items-center mt-2 gap-4">
                                    <span
                                        class="bg-white/20 text-white rounded-full px-3 py-1 text-sm backdrop-blur-sm"
                                    >
                                        {{ selectedHorse.breed }}
                                    </span>
                                    <span
                                        class="bg-white/20 text-white rounded-full px-3 py-1 text-sm backdrop-blur-sm"
                                    >
                                        {{ selectedHorse.gender }}
                                    </span>
                                    <span
                                        class="bg-white/20 text-white rounded-full px-3 py-1 text-sm backdrop-blur-sm"
                                    >
                                        {{ selectedHorse.age }} let
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="p-6 md:p-8">
                            <div class="flex flex-wrap mb-8 gap-6">
                                <div class="flex-1 min-w-[120px]">
                                    <h3 class="text-gray-500 text-sm mb-1">
                                        Výška
                                    </h3>
                                    <p class="text-lg font-semibold">
                                        {{ selectedHorse.height }} cm
                                    </p>
                                </div>
                                <div class="flex-1 min-w-[120px]">
                                    <h3 class="text-gray-500 text-sm mb-1">
                                        Barva
                                    </h3>
                                    <p class="text-lg font-semibold">
                                        {{ selectedHorse.color }}
                                    </p>
                                </div>
                                <div class="flex-1 min-w-[120px]">
                                    <h3 class="text-gray-500 text-sm mb-1">
                                        Disciplína
                                    </h3>
                                    <p class="text-lg font-semibold">
                                        {{ selectedHorse.discipline }}
                                    </p>
                                </div>
                                <div class="flex-1 min-w-[120px]">
                                    <h3 class="text-gray-500 text-sm mb-1">
                                        S námi od
                                    </h3>
                                    <p class="text-lg font-semibold">
                                        {{ selectedHorse.joinedYear }}
                                    </p>
                                </div>
                            </div>

                            <div class="prose max-w-none">
                                <h3 class="text-2xl font-semibold mb-4">
                                    O {{ selectedHorse.name }}
                                </h3>
                                <p>{{ selectedHorse.description }}</p>

                                <h4 class="text-xl font-semibold mt-6 mb-3">
                                    Úspěchy
                                </h4>
                                <ul>
                                    <li
                                        v-for="(
                                            achievement, index
                                        ) in selectedHorse.achievements"
                                        :key="index"
                                    >
                                        {{ achievement }}
                                    </li>
                                </ul>

                                <h4 class="text-xl font-semibold mt-6 mb-3">
                                    Charakter
                                </h4>
                                <p>{{ selectedHorse.character }}</p>
                            </div>

                            <!-- Galerie -->
                            <h3 class="text-2xl font-semibold mt-10 mb-6">
                                Galerie
                            </h3>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <div
                                    v-for="(
                                        image, index
                                    ) in selectedHorse.gallery"
                                    :key="index"
                                    class="aspect-square overflow-hidden rounded-lg cursor-pointer"
                                    @click="openGallery(index)"
                                >
                                    <img
                                        :src="image"
                                        :alt="`${selectedHorse.name} - fotka ${index + 1}`"
                                        class="w-full h-full object-cover hover:scale-110 transition duration-500"
                                    />
                                </div>
                            </div>

                            <!-- CTA sekce odstraněna podle požadavku -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sekce prodaných koní -->
        <div class="container mx-auto px-4 py-12 bg-gray-50">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold mb-3">Prodaní koně</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Koně, kteří prošli naším jezdeckým areálem a našli nové
                    domovy
                </p>
            </div>

            <div
                class="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
            >
                <div class="divide-y divide-gray-200">
                    <!-- Kůň 1 -->
                    <div class="flex items-center p-6">
                        <img
                            src="https://picsum.photos/seed/sold-horse1/120/120"
                            alt="Prodaný kůň - Merlin"
                            class="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                        />
                        <div class="flex-grow">
                            <h3 class="text-xl font-semibold text-gray-900">
                                Merlin
                            </h3>
                            <p class="text-gray-600 mt-1">
                                Plemenný hřebec Welsh Part Bred, nar. 23.4.2008,
                                vhodný jako plemeník pro malé klisny, se kterými
                                může mít krásná hříbata.
                            </p>
                        </div>
                        <span
                            class="bg-red-600 text-white text-xs px-2 py-1 rounded-md ml-4 h-fit flex-shrink-0"
                            >Prodáno</span
                        >
                    </div>

                    <!-- Kůň 2 -->
                    <div class="flex items-center p-6">
                        <img
                            src="https://picsum.photos/seed/sold-horse2/120/120"
                            alt="Prodaný kůň - Cartouche"
                            class="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                        />
                        <div class="flex-grow">
                            <h3 class="text-xl font-semibold text-gray-900">
                                Cartouche
                            </h3>
                            <p class="text-gray-600 mt-1">
                                Klisna, nar. 2002, KVH 170 cm. Velmi hodná,
                                spolehlivá a vyrovnaná v terénu. Je vhodná pro
                                začínající jezdce i děti.
                            </p>
                        </div>
                        <span
                            class="bg-red-600 text-white text-xs px-2 py-1 rounded-md ml-4 h-fit flex-shrink-0"
                            >Prodáno</span
                        >
                    </div>

                    <!-- Kůň 3 -->
                    <div class="flex items-center p-6">
                        <img
                            src="https://picsum.photos/seed/sold-horse3/120/120"
                            alt="Prodaný kůň - Démon"
                            class="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                        />
                        <div class="flex-grow">
                            <h3 class="text-xl font-semibold text-gray-900">
                                Démon
                            </h3>
                            <p class="text-gray-600 mt-1">
                                Valach, nar. 2014, KVH 165 cm. Vhodný především
                                do terénu, ale zvládá i drezurní prvky. Má
                                vynikající charakter pro rekreační ježdění.
                            </p>
                        </div>
                        <span
                            class="bg-red-600 text-white text-xs px-2 py-1 rounded-md ml-4 h-fit flex-shrink-0"
                            >Prodáno</span
                        >
                    </div>

                    <!-- Kůň 4 -->
                    <div class="flex items-center p-6">
                        <img
                            src="https://picsum.photos/seed/sold-horse4/120/120"
                            alt="Prodaný kůň - Bon Ami"
                            class="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                        />
                        <div class="flex-grow">
                            <h3 class="text-xl font-semibold text-gray-900">
                                Bon Ami
                            </h3>
                            <p class="text-gray-600 mt-1">
                                Valach, nar. 2006, KVH 168 cm. Vynikající ve
                                všestrannosti, skoku i drezuře. Má za sebou
                                úspěšnou sportovní kariéru a nyní je ideální pro
                                zkušenější jezdce.
                            </p>
                        </div>
                        <span
                            class="bg-red-600 text-white text-xs px-2 py-1 rounded-md ml-4 h-fit flex-shrink-0"
                            >Prodáno</span
                        >
                    </div>

                    <!-- Kůň 5 -->
                    <div class="flex items-center p-6">
                        <img
                            src="https://picsum.photos/seed/sold-horse5/120/120"
                            alt="Prodaný kůň - For Fun"
                            class="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                        />
                        <div class="flex-grow">
                            <h3 class="text-xl font-semibold text-gray-900">
                                For Fun
                            </h3>
                            <p class="text-gray-600 mt-1">
                                Sportovní pony, nar. 2011, KVH 148 cm. Skvělý
                                pro děti a juniory na parkurové soutěže.
                                Spolehlivý a bezpečný pro mladé jezdce.
                            </p>
                        </div>
                        <span
                            class="bg-red-600 text-white text-xs px-2 py-1 rounded-md ml-4 h-fit flex-shrink-0"
                            >Prodáno</span
                        >
                    </div>

                    <!-- Kůň 6 -->
                    <div class="flex items-center p-6">
                        <img
                            src="https://picsum.photos/seed/sold-horse6/120/120"
                            alt="Prodaný kůň - Gin"
                            class="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                        />
                        <div class="flex-grow">
                            <h3 class="text-xl font-semibold text-gray-900">
                                Gin
                            </h3>
                            <p class="text-gray-600 mt-1">
                                Valach, nar. 2012, KVH 162 cm. Univerzální kůň
                                pro hobby ježdění, velmi dobře se ovládá, vhodný
                                i pro méně zkušené jezdce.
                            </p>
                        </div>
                        <span
                            class="bg-red-600 text-white text-xs px-2 py-1 rounded-md ml-4 h-fit flex-shrink-0"
                            >Prodáno</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";

// Data koní
const horses = ref([
    {
        id: 1,
        name: "Furioso XL Moric",
        breed: "Český teplokrevník",
        gender: "klisna",
        age: 8,
        height: 168,
        color: "Hnědá",
        discipline: "Parkur",
        joinedYear: 2018,
        description:
            "Destiny je elegantní klisna s výjimečným charakterem a skvělými předpoklady pro parkurové skákání. Je velmi učenlivá a ochotná spolupracovat s jezdcem. Její klidná povaha ji dělá ideálním koněm pro pokročilé i mírně pokročilé jezdce.",
        character:
            "Destiny je velmi přátelská a zvídavá klisna. Má trpělivou povahu, což z ní dělá skvělého koně pro jezdecký výcvik. Je však také energická a temperamentní, když je potřeba.",
        achievements: [
            "Vítězka regionálního parkurového šampionátu 2022",
            "3. místo na národním poháru v kategorii L 2021",
            "Úspěšná účast na mnoha národních soutěžích",
        ],
        image: "https://picsum.photos/seed/horse1/800/600",
        gallery: [
            "https://picsum.photos/seed/horse1-1/400/400",
            "https://picsum.photos/seed/horse1-2/400/400",
            "https://picsum.photos/seed/horse1-3/400/400",
            "https://picsum.photos/seed/horse1-4/400/400",
        ],
    },
    {
        id: 2,
        name: "Ibalius",
        breed: "Hannoverský kůň",
        gender: "valach",
        age: 10,
        height: 175,
        color: "Vraník",
        discipline: "Drezura",
        joinedYear: 2017,
        description:
            "Aramis je impozantní vraník s výjimečným pohybem a talentem pro drezuru. Jeho přirozená schopnost shromáždění a elegantní pohyb z něj dělají ideálního koně pro drezurní ježdění na všech úrovních. Je to kůň s velkou osobností a charismem.",
        character:
            "Aramis je sebevědomý kůň s vlastním názorem, který vyžaduje zkušeného jezdce. Když si však získáte jeho důvěru, stane se vaším oddaným partnerem. Je velmi inteligentní a rád se učí nové věci.",
        achievements: [
            "Kvalifikace na národní drezurní šampionát 2023",
            "2. místo v Grand Prix Special na mezinárodních závodech",
            "Úspěšné vystoupení na mnoha drezurních klinikách",
        ],
        image: "https://picsum.photos/seed/horse2/800/600",
        gallery: [
            "https://picsum.photos/seed/horse2-1/400/400",
            "https://picsum.photos/seed/horse2-2/400/400",
            "https://picsum.photos/seed/horse2-3/400/400",
            "https://picsum.photos/seed/horse2-4/400/400",
        ],
    },
    {
        id: 3,
        name: "Just Gino",
        breed: "Arabský plnokrevník",
        gender: "klisna",
        age: 6,
        height: 155,
        color: "Šedobílá",
        discipline: "Vytrvalost",
        joinedYear: 2020,
        description:
            "Bella je krásná arabská klisna s typickou hrdou hlavou a elegantním postojem. Vyniká ve vytrvalostním ježdění díky své nezdolné energii a vytrvalosti. Je to ideální kůň pro dlouhé terénní vyjížďky i pro začínající vytrvalostní jezdce.",
        character:
            "Bella je energická a čilá klisna s typickým arabským temperamentem. Je velmi inteligentní a rychle se učí. K lidem je přátelská a zvědavá, ráda se zapojuje do různých aktivit.",
        achievements: [
            "Účast na mezinárodním vytrvalostním závodě 2022",
            "Dokončení několika 40km vytrvalostních tratí",
            "Oblíbený kůň pro rekreační jízdy v terénu",
        ],
        image: "https://picsum.photos/seed/horse3/800/600",
        gallery: [
            "https://picsum.photos/seed/horse3-1/400/400",
            "https://picsum.photos/seed/horse3-2/400/400",
            "https://picsum.photos/seed/horse3-3/400/400",
            "https://picsum.photos/seed/horse3-4/400/400",
        ],
    },
    {
        id: 4,
        name: "Toshiko",
        breed: "Anglický plnokrevník",
        gender: "hřebec",
        age: 7,
        height: 172,
        color: "Ryzák",
        discipline: "Parkur",
        joinedYear: 2019,
        description:
            "Thunder je energický a temperamentní hřebec s mimořádným skokovým potenciálem. Jeho atletické schopnosti a rychlost z něj dělají skvělého parkurového koně. Je to kůň pro zkušené jezdce, kteří dokáží správně usměrnit jeho energii a temperament.",
        character:
            "Thunder je dominantní a sebevědomý hřebec, který potřebuje pevné a důsledné vedení. Je velmi inteligentní a rychle se učí. Jeho energická povaha vyžaduje pravidelný trénink a dostatek pohybu.",
        achievements: [
            "Vítěz několika parkurových soutěží kategorie S",
            "2. místo v celostátním šampionátu mladých koní 2022",
            "Kvalifikace na mezinárodní závody CSI2*",
        ],
        image: "https://picsum.photos/seed/horse4/800/600",
        gallery: [
            "https://picsum.photos/seed/horse4-1/400/400",
            "https://picsum.photos/seed/horse4-2/400/400",
            "https://picsum.photos/seed/horse4-3/400/400",
            "https://picsum.photos/seed/horse4-4/400/400",
        ],
    },
    {
        id: 5,
        name: "Harry",
        breed: "Fríský kůň",
        gender: "klisna",
        age: 9,
        height: 165,
        color: "Vraník",
        discipline: "Drezura a show",
        joinedYear: 2019,
        description:
            "Luna je majestátní fríská klisna s impozantním vzhledem a charakteristickým vysokým krokem. Její dlouhá hříva a ohon spolu s elegantním pohybem z ní dělají skutečnou hvězdu každé show. Její klidná a vyrovnaná povaha ji předurčuje k drezurnímu ježdění a reprezentativním vystoupením.",
        character:
            "Luna je klidná a důstojná klisna, která si zachovává elegantní vystupování za všech okolností. Je velmi inteligentní a má silnou vazbu na své jezdce. Miluje pozornost a péči, kterou jí věnujeme, a ráda se předvádí při veřejných vystoupeních.",
        achievements: [
            "Vítězka v kategorii barokních koní na národní výstavě 2023",
            "Účast na mezinárodní drezurní soutěži v kategorii St. Georg",
            "Pravidelná účinkující při slavnostních přehlídkách a speciálních akcích",
        ],
        image: "https://picsum.photos/seed/horse5/800/600",
        gallery: [
            "https://picsum.photos/seed/horse5-1/400/400",
            "https://picsum.photos/seed/horse5-2/400/400",
            "https://picsum.photos/seed/horse5-3/400/400",
            "https://picsum.photos/seed/horse5-4/400/400",
        ],
    },
]);

// State managment
const selectedHorseId = ref(1);
const searchQuery = ref("");
const selectedBreed = ref("");
const selectedGender = ref("");

// Výpočet unikátních plemen pro filtrování
const uniqueBreeds = computed(() => {
    const breeds = new Set(horses.value.map((horse) => horse.breed));
    return Array.from(breeds);
});

// Filtrované koně
const filteredHorses = computed(() => {
    return horses.value.filter((horse) => {
        const matchesSearch =
            searchQuery.value === "" ||
            horse.name
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase()) ||
            horse.breed
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase()) ||
            horse.age.toString().includes(searchQuery.value) ||
            horse.description
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase());

        const matchesBreed =
            selectedBreed.value === "" || horse.breed === selectedBreed.value;
        const matchesGender =
            selectedGender.value === "" ||
            horse.gender === selectedGender.value;

        return matchesSearch && matchesBreed && matchesGender;
    });
});

// Aktuálně vybraný kůň
const selectedHorse = computed(() => {
    // Pokud neexistuje žádný kůň splňující filtry, vrátíme null
    if (filteredHorses.value.length === 0) {
        return null;
    }

    // Pokud vybraný kůň není ve filtrovaném seznamu, vybereme první
    const exists = filteredHorses.value.some(
        (horse) => horse.id === selectedHorseId.value,
    );
    if (!exists && filteredHorses.value.length > 0) {
        selectedHorseId.value = filteredHorses.value[0].id;
    }

    return horses.value.find((horse) => horse.id === selectedHorseId.value);
});

// Metody
function selectHorse(id) {
    selectedHorseId.value = id;
}

function resetFilters() {
    searchQuery.value = "";
    selectedBreed.value = "";
    selectedGender.value = "";

    // Pokud existuje nějaký kůň, vybereme první
    if (horses.value.length > 0) {
        selectedHorseId.value = horses.value[0].id;
    }
}

function openGallery(index) {
    // Zde by mohla být implementace lightbox galerie
    console.log("Otevírá se galerie s indexem:", index);
    // V produkční verzi by zde byl kód pro otevření lightbox galerie
}

// Pokud by nikdy nebyl vybrán kůň, vybereme první
onMounted(() => {
    if (horses.value.length > 0 && !selectedHorseId.value) {
        selectedHorseId.value = horses.value[0].id;
    }
});

// Sledujeme změny ve filtrech a upravujeme výběr koně, pokud je to potřeba
watch([searchQuery, selectedBreed, selectedGender], () => {
    if (
        filteredHorses.value.length > 0 &&
        !filteredHorses.value.some((h) => h.id === selectedHorseId.value)
    ) {
        selectedHorseId.value = filteredHorses.value[0].id;
    }
});
</script>
