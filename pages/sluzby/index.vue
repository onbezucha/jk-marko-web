<template>
  <div class="default-layout">
      <CenikSluzeb />
      <SekceFAQ />
  </div>
</template>

<script setup>
  import CenikSluzeb       from '~/components/sections/pricing/index.vue';
  import SekceFAQ          from '~/components/sections/faq/pricing.vue';
  
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