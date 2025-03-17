<template>
    <div class="default-layout">
        <SekceHero />
        <SekceInformace />
        <SekceAreal />
        <SekceSluzby />
        <SekceJezdeckyKlub />
        <SekceFAQ />
    </div>
</template>

<script setup>
import SekceHero from "~/components/sections/hero/homepage.vue";
import SekceInformace from "~/components/sections/intro/homepage.vue";
import SekceAreal from "~/components/sections/informations/areal.vue";
import SekceSluzby from "~/components/sections/services/homepage.vue";
import SekceJezdeckyKlub from "~/components/sections/informations/club.vue";
import SekceFAQ from "~/components/sections/faq/homepage.vue";

// Metadata pro SEO
useSeoMeta({
    title: "JK Marko - Jezdecký areál",
    ogTitle: "JK Marko - Jezdecký areál",
    description:
        "Jezdecký areál JK Marko nabízí výcvik jezdců, ustájení koní, jezdeckou školu a další služby v příjemném prostředí",
    ogDescription: "Jezdecký areál",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});
</script>
