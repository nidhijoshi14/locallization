<template>
   <div class="lang-dropdown">
      <p>{{ $t('menu.select') }}</p>
      <v-select
         @change="selectlang($i18n.locale)"
         item-text="name"
         item-value="code"
         v-model="$i18n.locale"
         :items="item"
         dense
         solo
         ></v-select>
   </div>
</template>
<script>
   export default {
     data() {
           return {
                 item:this.$i18n.locales
                 }
               },
     methods: {
       selectlang(lang) {
         if(this.$i18n.locale=='en'){
           this.$router.push('en-en')  
         }else if(this.$i18n.locale=='fr'){
           this.$router.push('fr-fr')  
         }
       }
     }
   }
</script>