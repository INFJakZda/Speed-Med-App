<template>
  <div>
    <Medicine 
      v-for="medicine in medicines" 
      :medicine="medicine" 
      :key="medicine.id"/>
  </div>
</template>

<script>
import Medicine from '@/components/Medicine'

export default {
  components: {
    Medicine
  },
  computed: {
    medicines() {
      return this.$store.getters.medicines
    }
  }
}
</script>
