<template>
</template>
<script type="text/javascript">
  import {mapActions, mapGetters } from "vuex"; 
  export default {
     computed: {
            ...mapGetters({
                getSelectedLang:"lang/getSelectedLang"
            })
        },
        mounted(){
          if(this.getSelectedLang && this.getSelectedLang=='fr'){
           this.$router.push('fr-fr')
          }else{
           this.$router.push('en-en')
          }
        }
    }
</script>
