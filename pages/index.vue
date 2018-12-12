<template>
  <div />
</template>

<script>
export default {
  created() {
    if (!this.$store.getters.isLocationSet) {
      this.$router.push('location')
    } else {
      this.$router.push('category')
    }
  }
}
</script>
