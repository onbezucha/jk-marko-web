<template>
  <div class="default-layout">
      <HeroSection />
      <SekceHistorie />
      <SekceTeam />
  </div>
</template>

<script setup>
  import HeroSection             from '~/components/sections/hero/onas.vue';
  import SekceHistorie           from '~/components/sections/informations/history.vue';
  import SekceTeam               from '~/components/sections/informations/team.vue';
  
  
// Metadata pro SEO
  useSeoMeta({
      title: 'JK Marko - Jezdecký areál',
      ogTitle: 'JK Marko - Jezdecký areál',
      description: 'Jezdecký areál JK Marko nabízí výcvik jezdců, ustájení koní, jezdeckou školu a další služby v příjemném prostředí',
      ogDescription: 'Jezdecký areál',
      ogImage: 'https://example.com/image.png',
      twitterCard: 'summary_large_image',
  })  
</script>