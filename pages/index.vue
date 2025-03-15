<template>
    <div>
      <!-- Header navigace -->
      <NavbarHeader />

      <!-- Hero sekce -->
      <SectionsHerohomepage />
      
      <!-- Představení areálu -->
      <IntroHomepage />

      <!-- Patička navigace -->
      <SectionsPricing />
      
      <!-- Aktuality a novinky -->
      <News />

      <!-- Patička navigace -->
      <NavbarFooter />
    </div>
  </template>
  
  <script setup>
  // Metadate pro SEO
  useHead({
    title: 'JK Marko - Jezdecký areál',
    meta: [
      {
        name: 'description',
        content: 'Jezdecký areál JK Marko nabízí výcvik jezdců, ustájení koní, jezdeckou školu a další služby v příjemném prostředí.'
      }
    ]
  })
  </script>