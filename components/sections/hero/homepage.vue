<template>
  <section class="relative h-screen max-h-[800px] overflow-hidden pt-20">
    <!-- Pozadí s překrytím -->
    <div class="absolute inset-0 z-0 top-0">
      <img 
        src="https://dummyimage.com/1920x1080/4B692F/ffffff&text=JK+Marko+Jezdecký+Areál" 
        alt="Jezdecký areál JK Marko" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
    
    <!-- Obsah -->
    <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
        Vítejte v jezdeckém areálu JK Marko
      </h1>
      <p class="text-xl md:text-2xl text-white mb-10 max-w-2xl">
        Profesionální zázemí pro jezdce i koně v krásném prostředí
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <NuxtLink 
          to="/sluzby" 
          class="bg-[#009FE1] hover:bg-[#0089c8] text-white py-3 px-8 rounded-md font-medium transition duration-200"
        >
          Naše služby
        </NuxtLink>
        <NuxtLink 
          to="/kontakt" 
          class="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white py-3 px-8 rounded-md font-medium transition duration-200"
        >
          Kontaktovat nás
        </NuxtLink>
      </div>
    </div>
    
    <!-- Scroll down indikátor -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div class="w-8 h-12 border-2 border-white rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero sekce nepotřebuje další logiku
</script>