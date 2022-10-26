<template>
  <h1>Hola, mundo: {{testing}}</h1>
</template>

<style>

</style>
<script>
  import {HTTP} from "../config/HttpBase";


  export default {
    components: {

    },
    data() {
      return {
        testing: process.env.baseUrl
      }
    },
    methods: {
      getInstitutionServiceData () {

      }
    },
    mounted(){
      this.getInstitutionServiceData();
    }
  };
</script>
