<template>
  <div>
    <Nav />
    <section
      v-if="!displayInvoice"
      class="section">
      <b-message
        v-if="!isLocationSet"
        type="is-warning">
        Przed złożeniem zamówienia, pamiętaj aby ustawić adres dostawy.
      </b-message>
      <b-message
        v-if="isCartEmpty"
        type="is-info">
        Twój koszyk jest pusty.
      </b-message>
    </section>
    <section
      v-if="displayInvoice"
      class="section">
      <Medicine
        v-for="medicine in medicines"
        :medicine="medicine"
        :key="medicine.id"
        :remove-button="true" />
      <section>
        <p>Razem: <strong>{{ price }} zł</strong></p>
        <p>Na adres: <strong>{{ location }}</strong></p>
      </section>
      <a class="button is-primary is-medium is-fullwidth">Złóż zamówienie</a>
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
    },
    location() {
      return this.$store.getters.location
    },
    isCartEmpty() {
      return this.$store.getters.cart.length === 0
    },
    isLocationSet() {
      return this.$store.getters.isLocationSet
    },
    displayInvoice() {
      return !this.isCartEmpty && this.isLocationSet
    }
  }
}
</script>
