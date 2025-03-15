<template>
    <div>
      <!-- Moderní hero sekce -->
      <section class="relative bg-gradient-to-r from-black to-gray-800 py-24 sm:py-32">
        <div class="absolute inset-0 z-0 overflow-hidden">
          <div class="absolute inset-0 bg-black opacity-60"></div>
          <img
            src="https://dummyimage.com/1920x800/333/ffffff&text=JK+Marko"
            alt="Jezdecký areál JK Marko"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Kontaktujte nás
            </h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
              Jsme zde, abychom zodpověděli vaše dotazy a pomohli vám s jakýmkoliv požadavkem
            </p>
          </div>
          
          <!-- Kontaktní karty s ikonami v hero sekci -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl">
            <!-- Telefon -->
            <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="w-12 h-12 bg-[#009FE1] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Zavolejte nám</h3>
              <a href="tel:+420774551119" class="text-[#009FE1] hover:text-white transition-colors">
                +420 774 551 119
              </a>
            </div>
            
            <!-- Email -->
            <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="w-12 h-12 bg-[#009FE1] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Napište nám</h3>
              <a href="mailto:jkmarko@seznam.cz" class="text-[#009FE1] hover:text-white transition-colors">
                jkmarko@seznam.cz
              </a>
            </div>
            
            <!-- Adresa -->
            <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="w-12 h-12 bg-[#009FE1] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Kde nás najdete</h3>
              <p class="text-gray-300">
                Markova Lhota u Nové Paky 7<br>
                Czech Republic
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Integrovaná sekce s formulářem a informacemi -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <!-- Informace -->
              <div class="bg-gradient-to-b from-gray-900 to-black p-8 lg:p-10">
                <div class="flex flex-col h-full justify-between">
                  <div>
                    <h2 class="text-2xl font-bold text-white mb-6">
                      Kontaktní informace
                    </h2>
                    
                    <div class="space-y-8 text-gray-200">
                      <div class="flex items-start">
                        <div class="bg-[#009FE1] w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 class="text-lg font-semibold text-white mb-1">Adresa</h3>
                          <p class="text-gray-300">
                            Jezdecký areál JK Marko<br>
                            Markova Lhota u Nové Paky 7<br>
                            Czech Republic
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start">
                        <div class="bg-[#009FE1] w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 class="text-lg font-semibold text-white mb-1">Telefon</h3>
                          <p class="text-gray-300">
                            <a href="tel:+420774551119" class="hover:text-[#009FE1] transition-colors">+420 774 551 119</a>
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start">
                        <div class="bg-[#009FE1] w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 class="text-lg font-semibold text-white mb-1">Email</h3>
                          <p class="text-gray-300">
                            <a href="mailto:jkmarko@seznam.cz" class="hover:text-[#009FE1] transition-colors">jkmarko@seznam.cz</a>
                          </p>
                        </div>
                      </div>
                      
                      <div class="flex items-start">
                        <div class="bg-[#009FE1] w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 class="text-lg font-semibold text-white mb-1">Provozní doba</h3>
                          <p class="text-gray-300">
                            Pondělí - Neděle: 8:00 - 20:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Sociální sítě -->
                  <div class="mt-10">
                    <h3 class="text-lg font-semibold text-white mb-4">Sledujte nás</h3>
                    <div class="flex space-x-4">
                      <a href="#" class="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#009FE1] transition-colors">
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="#" class="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#009FE1] transition-colors">
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Formulář -->
              <div class="p-8 lg:p-10 lg:col-span-2">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                  Napište nám
                </h2>
                
                <ModernContactForm />
              </div>
            </div>
            
            <!-- Mapa pod formulářem a informacemi -->
            <div class="w-full h-80 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.0466014693697!2d15.579467315956195!3d50.488339294918895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ea58a98a1edd9%3A0x8cde8d604e6e3c2!2zTm92w6EgUGFrYSA1MDkgMDE!5e0!3m2!1scs!2scz!4v1585308519349!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style="border:0; display: block;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
              ></iframe>
              
              <!-- Plovoucí navigační tlačítko -->
              <div class="absolute bottom-6 right-6 z-10">
                <a
                  href="https://goo.gl/maps/yourspecificlink"
                  target="_blank"
                  class="flex items-center justify-center bg-[#009FE1] hover:bg-black text-white px-6 py-3 rounded-lg shadow-lg transition-colors"
                >
                  <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Navigovat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA sekce -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Přijďte nás navštívit
          </h2>
          <p class="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Rádi vás přivítáme v našem areálu a ukážeme vám naše stáje, jízdárny a představíme naše služby. 
            Neváhejte se na nás obrátit s jakýmkoliv dotazem.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+420774551119" class="bg-[#009FE1] hover:bg-black text-white py-3 px-8 rounded-full font-medium transition-colors">
              Zavolejte nám
            </a>
            <a href="mailto:jkmarko@seznam.cz" class="bg-black hover:bg-[#009FE1] text-white py-3 px-8 rounded-full font-medium transition-colors">
              Napište nám
            </a>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import ModernContactForm from '~/components/form/contact.vue';
  
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