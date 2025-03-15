<template>
    <form @submit.prevent="submitForm" class="bg-white rounded-lg shadow-md p-6">
      <div class="space-y-6">
        <!-- Jméno -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Jméno a příjmení *</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#009FE1] focus:border-[#009FE1] outline-none transition-colors"
            :class="{ 'border-red-500': errors.name }"
            required
          >
          <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
        </div>
        
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#009FE1] focus:border-[#009FE1] outline-none transition-colors"
            :class="{ 'border-red-500': errors.email }"
            required
          >
          <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
        </div>
        
        <!-- Telefon -->
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
          <input 
            type="tel" 
            id="phone" 
            v-model="formData.phone" 
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#009FE1] focus:border-[#009FE1] outline-none transition-colors"
            :class="{ 'border-red-500': errors.phone }"
          >
          <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
        </div>
        
        <!-- Předmět -->
        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Předmět *</label>
          <input 
            type="text" 
            id="subject" 
            v-model="formData.subject" 
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#009FE1] focus:border-[#009FE1] outline-none transition-colors"
            :class="{ 'border-red-500': errors.subject }"
            required
          >
          <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
        </div>
        
        <!-- Zpráva -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Zpráva *</label>
          <textarea 
            id="message" 
            v-model="formData.message" 
            rows="5" 
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#009FE1] focus:border-[#009FE1] outline-none transition-colors"
            :class="{ 'border-red-500': errors.message }"
            required
          ></textarea>
          <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
        </div>
        
        <!-- GDPR Souhlas -->
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input 
              id="gdpr" 
              type="checkbox" 
              v-model="formData.gdpr" 
              class="h-4 w-4 text-[#009FE1] border-gray-300 rounded focus:ring-[#009FE1]"
              :class="{ 'border-red-500': errors.gdpr }"
              required
            >
          </div>
          <div class="ml-3 text-sm">
            <label for="gdpr" class="font-medium text-gray-700">Souhlasím se zpracováním osobních údajů *</label>
            <p class="text-gray-500">Vaše osobní údaje budou použity pouze pro vyřízení vašeho požadavku.</p>
            <p v-if="errors.gdpr" class="mt-1 text-sm text-red-600">{{ errors.gdpr }}</p>
          </div>
        </div>
        
        <!-- Tlačítko pro odeslání -->
        <div>
          <button 
            type="submit" 
            class="w-full bg-[#009FE1] hover:bg-[#0082b8] text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#009FE1] focus:ring-offset-2"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Odesílání...</span>
            <span v-else>Odeslat zprávu</span>
          </button>
        </div>
        
        <!-- Úspěšné odeslání zprávy -->
        <div v-if="formSubmitted" class="mt-4 bg-green-50 border border-green-400 rounded-md p-4">
          <div class="flex">
            <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <div>
              <p class="text-sm font-medium text-green-800">Vaše zpráva byla úspěšně odeslána!</p>
              <p class="text-sm text-green-700 mt-1">Děkujeme za vaši zprávu. Budeme vás kontaktovat co nejdříve.</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          gdpr: false
        },
        errors: {},
        isSubmitting: false,
        formSubmitted: false
      }
    },
    methods: {
      validateForm() {
        this.errors = {}
        let valid = true
        
        if (!this.formData.name.trim()) {
          this.errors.name = 'Jméno je povinné'
          valid = false
        }
        
        if (!this.formData.email.trim()) {
          this.errors.email = 'Email je povinný'
          valid = false
        } else if (!this.validateEmail(this.formData.email)) {
          this.errors.email = 'Zadejte platný email'
          valid = false
        }
        
        if (this.formData.phone && !this.validatePhone(this.formData.phone)) {
          this.errors.phone = 'Zadejte platné telefonní číslo'
          valid = false
        }
        
        if (!this.formData.subject.trim()) {
          this.errors.subject = 'Předmět je povinný'
          valid = false
        }
        
        if (!this.formData.message.trim()) {
          this.errors.message = 'Zpráva je povinná'
          valid = false
        }
        
        if (!this.formData.gdpr) {
          this.errors.gdpr = 'Musíte souhlasit se zpracováním osobních údajů'
          valid = false
        }
        
        return valid
      },
      
      validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
      },
      
      validatePhone(phone) {
        const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
        return re.test(String(phone))
      },
      
      async submitForm() {
        if (!this.validateForm()) {
          return
        }
        
        this.isSubmitting = true
        
        try {
          // Simulace odeslání formuláře
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // Reset formuláře po úspěšném odeslání
          this.formData = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            gdpr: false
          }
          
          this.formSubmitted = true
          
          // Skrytí potvrzení po 5 sekundách
          setTimeout(() => {
            this.formSubmitted = false
          }, 5000)
        } catch (error) {
          console.error('Chyba při odesílání formuláře:', error)
          // Zde můžete implementovat zobrazení chybové zprávy
        } finally {
          this.isSubmitting = false
        }
      }
    }
  }
  </script>