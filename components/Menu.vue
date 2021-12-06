<template>
   <div>
      <LanguageInput/>
      <v-navigation-drawer
         v-bind:width="350"
         v-model="drawer"
         :clipped="clipped"
         fixed
         app
         >
         <v-list>
            <v-list-group no-action  v-for="(menu, index) in getMenuList.data" :key="index">
               <v-list-item slot='activator'>
                  <v-list-item-title>{{ lang=='en' ? menu.name_en : menu.name_fr}}</v-list-item-title>
               </v-list-item>
               <v-list-item v-if="menu.sub_menus.length" v-for="(sub_menu, i) in menu.sub_menus" :key="i">
                  <v-list-item-title>{{ lang=='en' ? sub_menu.name_en : sub_menu.name_fr}}</v-list-item-title>
               </v-list-item>
            </v-list-group>
         </v-list>
      </v-navigation-drawer>
   </div>
</template>
<script>
   import {mapActions, mapGetters } from "vuex"; 
   export default {
         props: {
           lang: String,
         },
         data() {
             return {
                 clipped: false,
       drawer: true,
       fixed: false,
       items: [
         {
           icon: 'mdi-apps',
           title: 'Welcome',
           to: '/'
         },
         {
           icon: 'mdi-chart-bubble',
           title: 'Inspire',
           to: '/inspire'
         }
       ],
             }
         },
         computed: {
             ...mapGetters({
                 getMenuList: "lang/getMenuList",
                 getSelectedLang:"lang/getSelectedLang"
             })
         },
         methods:{
             ...mapActions({
                 saveMenu: "lang/setMenuList",
                 saveSelectedLang: "lang/setLang",
   
             }),
         },
         mounted(){
             this.saveMenu()
             this.saveSelectedLang(this.lang)
             this.$i18n.locale=this.lang
         }
   }
</script>