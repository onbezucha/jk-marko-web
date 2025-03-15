<template>
  <section class="relative w-full h-[90vh] overflow-hidden">
    <!-- Parallax pozadí s gradientem -->
    <div class="absolute inset-0 z-0">
      <div class="relative h-full w-full">
        <!-- Hlavní obrázek s parallax efektem - koňský motiv -->
        <img 
          src="https://picsum.photos/id/15/1920/1080" 
          alt="Jezdecký areál JK Marko" 
          class="w-full h-full object-cover scale-[1.02] transform-gpu motion-safe:animate-subtle-zoom"
        />
        
        <!-- Gradientní překrytí -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
        
        <!-- Jemná textura -->
        <div class="absolute inset-0 bg-[url('/img/texture.png')] opacity-10 mix-blend-overlay"></div>
      </div>
    </div>
    
    <!-- Hlavní obsah -->
    <div class="relative z-10 h-full container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      
      <!-- Nadpis s animací -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl text-center leading-tight tracking-tight motion-safe:animate-fade-in-up">
        <span class="inline-block">Vítejte v jezdeckém</span>
        <span class="inline-block text-[#009FE1]"> areálu JK Marko</span>
      </h1>
      
      <!-- Podnadpis s jinou animací -->
      <p class="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-2xl text-center leading-relaxed motion-safe:animate-fade-in-up motion-safe:animation-delay-300">
        Profesionální zázemí pro jezdce i koně v krásném prostředí Říčanských pastvin
      </p>
      
      <!-- CTA tlačítka s moderním designem -->
      <div class="flex flex-col sm:flex-row gap-5 motion-safe:animate-fade-in-up motion-safe:animation-delay-500">
        <NuxtLink 
          to="/sluzby" 
          class="group relative bg-[#009FE1] hover:bg-[#009FE1]/90 text-white py-4 px-8 rounded-lg font-medium transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[#009FE1]/30 hover:-translate-y-1"
        >
          <span class="relative z-10 flex items-center justify-center gap-2">
            Naše služby
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
          <span class="absolute inset-0 bg-gradient-to-r from-[#009FE1] to-[#0089c8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </NuxtLink>
        
        <NuxtLink 
          to="/kontakt" 
          class="group relative bg-transparent border-2 border-white text-white py-4 px-8 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 backdrop-blur-sm"
        >
          <span class="relative z-10 flex items-center justify-center gap-2">
            Kontaktujte nás
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </span>
        </NuxtLink>
      </div>
      
      <!-- Uznání nebo statistiky -->
      <div class="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 motion-safe:animate-fade-in-up motion-safe:animation-delay-700">
        <div class="flex flex-col items-center text-white/80 group hover:text-white transition-all duration-300">
          <span class="text-3xl font-bold text-[#009FE1]">15+</span>
          <span class="text-sm uppercase tracking-wider">Let zkušeností</span>
        </div>
        <div class="flex flex-col items-center text-white/80 group hover:text-white transition-all duration-300">
          <span class="text-3xl font-bold text-[#009FE1]">50+</span>
          <span class="text-sm uppercase tracking-wider">Ustájených koní</span>
        </div>
        <div class="flex flex-col items-center text-white/80 group hover:text-white transition-all duration-300">
          <span class="text-3xl font-bold text-[#009FE1]">100+</span>
          <span class="text-sm uppercase tracking-wider">Spokojených klientů</span>
        </div>
      </div>
    </div>
    
    <!-- Moderní scroll indikátor -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 motion-safe:animate-bounce-slow">
      <button @click="scrollDown" class="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110">
        <span class="text-xs uppercase tracking-widest text-white/70 group-hover:text-white">Objevte více</span>
        <div class="w-8 h-12 border border-white/30 group-hover:border-white rounded-full flex justify-center relative overflow-hidden">
          <div class="w-1.5 h-3 bg-white rounded-full absolute top-2 animate-scroll-down"></div>
        </div>
      </button>
    </div>
    
    <!-- Dekorativní elementy pro moderní vzhled -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-[#009FE1]/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-48 h-48 bg-[#009FE1]/10 rounded-full blur-3xl"></div>
  </section>
</template>

<script setup>
// Funkce pro scrollování přesně na následující intro sekci
const scrollDown = () => {
  // Konkrétně cílíme na intro sekci místo obecného selectoru
  const introSection = document.querySelector('.intro-section');
  
  if (introSection) {
    // Scrollujeme přesně na začátek intro sekce
    introSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Záložní řešení - hledáme druhou sekci
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Pokud nic nenajdeme, scrollujeme jen o výšku viewportu
      const viewportHeight = window.innerHeight;
      const scrollTarget = window.scrollY + viewportHeight;
      
      window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style>
@keyframes subtle-zoom {
  0% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1.05);
  }
}

@keyframes scroll-down {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  75% {
    opacity: 0;
    transform: translateY(10px);
  }
  76% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-subtle-zoom {
  animation: subtle-zoom 15s infinite alternate ease-in-out;
}

.animate-scroll-down {
  animation: scroll-down 2s infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-700 {
  animation-delay: 700ms;
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}
</style>