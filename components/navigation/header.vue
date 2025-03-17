<template>
    <header
        class="bg-black border-b border-gray-800 fixed top-0 left-0 w-full z-50"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Desktop & Tablet Navigation -->
            <div class="flex justify-between items-center h-20">
                <!-- Logo and Brand -->
                <div class="flex items-center">
                    <NuxtLink
                        to="/"
                        class="group flex items-center transition-all duration-300 relative"
                    >
                        <div
                            class="relative overflow-hidden rounded-full w-14 h-14 transform transition-transform duration-300 group-hover:scale-105 border-2 border-white flex items-center justify-center"
                        >
                            <!-- Přímý vložený obrázek bez dalších komplikací -->
                            <img
                                src="https://as2.ftcdn.net/v2/jpg/02/77/09/51/1000_F_277095121_x3qqGdX0ZufEN90I5RgjIieSTqFNJbm6.jpg"
                                alt="JK Marko Logo - Kůň"
                                class="min-w-full min-h-full object-cover"
                            />
                        </div>
                        <div class="ml-3 flex flex-col">
                            <span
                                class="text-2xl font-bold text-white tracking-tight group-hover:text-[#009FE1] transition-colors duration-300"
                                >JK Marko</span
                            >
                            <span
                                class="text-xs text-gray-400 md:opacity-0 md:group-hover:opacity-100 opacity-100 md:transform md:-translate-y-1 md:group-hover:translate-y-0 transition-all duration-300"
                                >Jezdecký Areál</span
                            >
                        </div>
                    </NuxtLink>
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center">
                    <div class="flex space-x-2 lg:space-x-3">
                        <NuxtLink
                            v-for="(item, index) in navItems"
                            :key="index"
                            :to="item.path"
                            custom
                            v-slot="{ href, navigate, isExactActive }"
                        >
                            <a
                                :href="href"
                                @click="navigate"
                                class="relative px-4 py-2 font-medium transition-all duration-300 text-white hover:text-[#009FE1] group"
                            >
                                <span class="relative">
                                    {{ item.name }}
                                    <span
                                        class="absolute left-0 bottom-[-6px] h-0.5 bg-[#009FE1] transition-all duration-300"
                                        :class="
                                            isExactActive
                                                ? 'w-full'
                                                : 'w-0 group-hover:w-full'
                                        "
                                    ></span>
                                </span>
                            </a>
                        </NuxtLink>
                    </div>
                </nav>

                <!-- Contact button on desktop -->
                <div class="hidden md:flex items-center">
                    <NuxtLink to="/kontakt" class="ml-6">
                        <button
                            class="bg-[#009FE1] hover:bg-[#007db3] text-white font-medium px-5 py-2 rounded-md transition-all duration-300 flex items-center space-x-2 transform hover:translate-y-[-2px] border border-[#009FE1]"
                        >
                            <span>Kontaktovat</span>
                        </button>
                    </NuxtLink>
                </div>

                <!-- Mobile menu button - na obrázku lépe zarovnaný -->
                <div class="md:hidden flex items-center justify-end">
                    <button
                        @click="toggleMobileMenu"
                        class="p-2 text-gray-300 hover:text-white transition-colors duration-300"
                        aria-label="Hlavní menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile dropdown menu - jen potřebná část obrazovky bez překrytí -->
        <div
            v-if="mobileMenuOpen"
            class="md:hidden fixed top-20 left-0 w-full z-50 bg-black shadow-md"
        >
            <div class="flex flex-col">
                <!-- Mobile Navigation Links -->
                <nav>
                    <div>
                        <NuxtLink
                            v-for="(item, index) in navItems"
                            :key="index"
                            :to="item.path"
                            class="block py-3 px-4 text-base font-medium text-white hover:text-[#009FE1] transition-colors duration-200 border-b border-gray-800"
                            :class="{ 'text-[#009FE1]': isActive(item.path) }"
                            @click="closeMobileMenu"
                        >
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                </nav>

                <!-- Mobile Contact Button - stylově upraveno podle obrázku -->
                <div class="p-4">
                    <NuxtLink to="/kontakt" @click="closeMobileMenu">
                        <button
                            class="w-full bg-[#009FE1] text-white font-medium py-3 px-4 rounded flex items-center justify-center"
                        >
                            <span>Kontaktovat</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const mobileMenuOpen = ref(false);

// Seznam položek navigace
const navItems = [
    { name: "O nás", path: "/onas" },
    { name: "Služby", path: "/sluzby" },
    { name: "Naše koně", path: "/nase-kone" },
    { name: "Jezdecký klub", path: "/jezdecky-klub" },
    { name: "Pro klienty", path: "/pro-klienty" },
];

// Funkce pro kontrolu aktivní položky
const isActive = (path) => {
    if (path === "/") {
        return route.path === "/";
    }
    return route.path.startsWith(path);
};

// Toggle mobile menu
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;

    // Nebráníme scrollování stránky, když je menu otevřené
    // protože chceme, aby zbytek stránky byl viditelný
};

// Close mobile menu
const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
};

// Close menu on escape key
const handleEscKey = (e) => {
    if (e.key === "Escape" && mobileMenuOpen.value) {
        closeMobileMenu();
    }
};

// Close menu on resize to desktop
const handleResize = () => {
    if (window.innerWidth >= 768 && mobileMenuOpen.value) {
        closeMobileMenu();
    }
};

// Event listeners
onMounted(() => {
    window.addEventListener("keydown", handleEscKey);
    window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleEscKey);
    window.removeEventListener("resize", handleResize);
    // Ensure body scroll is enabled when component is unmounted
    document.body.style.overflow = "";
});
</script>

<style scoped>
/* Optional: smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Prevent content jumping when scrollbar appears/disappears */
html {
    scrollbar-width: thin;
}

/* Add padding to body to prevent content from being hidden under the fixed header */
body {
    padding-top: 5rem; /* Adjust this value based on your header height */
}
</style>
