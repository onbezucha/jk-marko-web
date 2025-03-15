<!-- layouts/default.vue -->
<template>
    <div class="default-layout">
      <HlavickaWebu />
      <main class="main-content">
        <slot />
      </main>
      <PatickaWebu />
    </div>
</template>

<script setup>
  import HlavickaWebu    from '~/components/navigation/header.vue';
  import PatickaWebu     from '~/components/navigation/footer.vue';

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