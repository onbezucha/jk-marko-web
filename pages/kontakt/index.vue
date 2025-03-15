<template>
  <div class="default-layout">
      <KontaktniFormular />
  </div>
</template>

<script setup>
  import KontaktniFormular       from '~/components/form/contact.vue';
  
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