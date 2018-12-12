<template>
  <div>
    <Nav />
    <section class="section">
      <Medicine
        v-for="medicine in medicines"
        :medicine="medicine"
        :key="medicine.id"
        :remove-button="true" />
      <a class="button is-primary is-medium is-fullwidth">Złóż zamówienie {{ price + "zł" }}</a>
    </section>
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Medicine from '@/components/Medicine'

export default {
  components: {
    Nav,
    Medicine
  },
  data() {
    return {}
  },
  computed: {
    medicines() {
      return this.$store.getters.cart
    },
    price() {
      return Math.round(this.$store.getters.cartPrice * 100) / 100
    }
  }
}
</script>
