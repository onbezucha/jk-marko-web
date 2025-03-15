<template>
    <div class="default-layout">
        <HeroSection />
        <SekceInformace />
        <SekceSluzby />
        <SekceCenik />
        <SekceBlog />
    </div>
  </template>
  
  <script setup>
    import HeroSection     from '~/components/sections/herohomepage.vue';
    import SekceInformace  from '~/components/intro/homepage.vue';
    import SekceSluzby     from '~/components/sections/services.vue';
    import SekceCenik      from '~/components/sections/pricing.vue';
    import SekceBlog       from '~/components/news/index.vue';
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


