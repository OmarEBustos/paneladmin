<template>
  <div id="app">
    <div>
      <notifications group="foo" />
    </div>
    <router-view/>
  </div>
</template>

<script>
import AsideApp from '@/components/AsideApp.vue';
export default {
  components:{
    AsideApp
  },

  data() {
    return {
     
    }
  },


}
</script>

<style lang="scss">

</style>
