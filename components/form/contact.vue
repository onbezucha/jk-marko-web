<template>
  <section id="kontakt" class="relative py-16 md:py-24 overflow-hidden bg-white">
    <!-- Background dekorace -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
      <div class="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-100 opacity-30"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Hlavička sekce -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
          Kontaktujte nás
          <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#009FE1]"></span>
        </h2>
        <p class="text-gray-600 max-w-xl mx-auto mt-6">Máte dotaz nebo si chcete rezervovat jízdu na koni? Neváhejte nás kontaktovat prostřednictvím tohoto formuláře nebo použijte přímé kontaktní údaje níže.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Kontaktní údaje a mapa -->
        <div class="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm transform transition-all duration-300 hover:shadow-md">
          <h3 class="text-xl font-semibold mb-6 text-gray-800">Kontaktní údaje</h3>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="text-[#009FE1] mr-4 mt-1">
                <span class="inline-block w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon name="mdi:map-marker" class="w-5 h-5" />
                </span>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">Adresa</h4>
                <p class="text-gray-600 mt-1">Jezdecký Areál, Hlavní 123, 696 11 Mutěnice</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-[#009FE1] mr-4 mt-1">
                <span class="inline-block w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon name="mdi:phone" class="w-5 h-5" />
                </span>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">Telefon</h4>
                <p class="text-gray-600 mt-1">+420 777 888 999</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-[#009FE1] mr-4 mt-1">
                <span class="inline-block w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon name="mdi:email-outline" class="w-5 h-5" />
                </span>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">Email</h4>
                <p class="text-gray-600 mt-1">info@jezdeckyareal.cz</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-[#009FE1] mr-4 mt-1">
                <span class="inline-block w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon name="mdi:clock-outline" class="w-5 h-5" />
                </span>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">Otevírací doba</h4>
                <p class="text-gray-600 mt-1">Po-Pá: 9:00 - 18:00<br>So-Ne: 10:00 - 16:00</p>
              </div>
            </div>
          </div>

          <!-- Sociální sítě -->
          <div class="mt-8">
            <h4 class="font-medium text-gray-800 mb-3">Najdete nás také na:</h4>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 rounded-full bg-[#009FE1] text-white flex items-center justify-center transition-transform hover:scale-110">
                <Icon name="mdi:facebook" class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-[#009FE1] text-white flex items-center justify-center transition-transform hover:scale-110">
                <Icon name="mdi:instagram" class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-[#009FE1] text-white flex items-center justify-center transition-transform hover:scale-110">
                <Icon name="mdi:youtube" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Mapa -->
          <div class="mt-8 rounded-lg overflow-hidden h-48 md:h-64 relative">
            <img src="https://picsum.photos/600/300" alt="Mapa" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <a href="https://maps.google.com" target="_blank" class="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-800 flex items-center hover:bg-gray-100 transition-colors">
                <Icon name="mdi:map" class="w-4 h-4 mr-2 text-[#009FE1]" />
                Otevřít mapu
              </a>
            </div>
          </div>
        </div>

        <!-- Kontaktní formulář -->
        <div class="bg-white rounded-xl p-6 md:p-8 shadow-sm transform transition-all duration-300 hover:shadow-md border border-gray-100">
          <h3 class="text-xl font-semibold mb-6 text-gray-800">Napište nám</h3>
          
          <form @submit.prevent="submitForm" class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-1">
                <label for="name" class="text-sm font-medium text-gray-700">Jméno a příjmení *</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Icon name="mdi:account" class="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    class="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009FE1] focus:border-transparent transition-all bg-gray-50"
                    placeholder="Vaše jméno"
                    required
                  >
                </div>
              </div>
              
              <div class="space-y-1">
                <label for="email" class="text-sm font-medium text-gray-700">Email *</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Icon name="mdi:email-outline" class="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    class="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009FE1] focus:border-transparent transition-all bg-gray-50"
                    placeholder="vas@email.cz"
                    required
                  >
                </div>
              </div>
            </div>

            <div class="space-y-1">
              <label for="phone" class="text-sm font-medium text-gray-700">Telefon</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Icon name="mdi:phone" class="w-5 h-5" />
                </div>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  class="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009FE1] focus:border-transparent transition-all bg-gray-50"
                  placeholder="+420 123 456 789"
                >
              </div>
            </div>

            <div class="space-y-1">
              <label for="subject" class="text-sm font-medium text-gray-700">Předmět *</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Icon name="mdi:text-box-outline" class="w-5 h-5" />
                </div>
                <select 
                  id="subject" 
                  v-model="form.subject" 
                  class="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009FE1] focus:border-transparent transition-all bg-gray-50 appearance-none"
                  required
                >
                  <option value="" disabled selected>Vyberte předmět</option>
                  <option value="rezervace">Rezervace jízdy</option>
                  <option value="ubytovani">Ubytování koní</option>
                  <option value="vycvik">Výcvik jezdců</option>
                  <option value="akce">Pořádání akcí</option>
                  <option value="ostatni">Ostatní dotazy</option>
                </select>
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <Icon name="mdi:chevron-down" class="w-5 h-5" />
                </div>
              </div>
            </div>

            <div class="space-y-1">
              <label for="message" class="text-sm font-medium text-gray-700">Zpráva *</label>
              <div class="relative">
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009FE1] focus:border-transparent transition-all bg-gray-50 min-h-48 md:min-h-64"
                  placeholder="Vaše zpráva..."
                  required
                ></textarea>
              </div>
            </div>

            <div class="space-y-4 pt-2">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input 
                    id="newsletter" 
                    type="checkbox" 
                    v-model="form.newsletter"
                    class="w-4 h-4 border-gray-300 rounded text-[#009FE1] focus:ring-[#009FE1]"
                  >
                </div>
                <label for="newsletter" class="ml-3 text-sm text-gray-600">
                  Chci dostávat informace o novinkách a akcích
                </label>
              </div>
              
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input 
                    id="terms" 
                    type="checkbox" 
                    v-model="form.terms"
                    class="w-4 h-4 border-gray-300 rounded text-[#009FE1] focus:ring-[#009FE1]"
                    required
                  >
                </div>
                <label for="terms" class="ml-3 text-sm text-gray-600">
                  Souhlasím se zpracováním osobních údajů v souladu s <a href="#" class="text-[#009FE1] hover:underline">ochranou osobních údajů</a>.
                </label>
              </div>
            </div>

            <div class="pt-4 md:pt-6">
              <button 
                type="submit" 
                class="w-full md:w-auto px-6 py-3 bg-[#009FE1] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center group"
              >
                Odeslat zprávu
                <Icon name="mdi:send" class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
          
          <!-- Status zprávy -->
          <div v-if="formStatus.show" :class="`mt-6 p-4 rounded-lg ${formStatus.error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`">
            <div class="flex items-start">
              <Icon :name="formStatus.error ? 'mdi:alert-circle' : 'mdi:check-circle'" class="w-5 h-5 mr-2 mt-0.5" />
              <p>{{ formStatus.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  newsletter: false,
  terms: false
});

const formStatus = ref({
  show: false,
  error: false,
  message: ''
});

const submitForm = () => {
  // Zde by byl kód pro odeslání formuláře na server
  
  // Simulace úspěšného odeslání
  formStatus.value = {
    show: true,
    error: false,
    message: 'Vaše zpráva byla úspěšně odeslána. Budeme vás kontaktovat co nejdříve.'
  };

  // Reset formuláře po odeslání
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      newsletter: false,
      terms: false
    };
    
    // Skrytí status zprávy po 5 sekundách
    setTimeout(() => {
      formStatus.value.show = false;
    }, 5000);
  }, 100);
};
</script>