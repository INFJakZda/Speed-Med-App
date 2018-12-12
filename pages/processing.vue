<template>
  <div>
    <Nav/>
    <section class="section">
      <b-message type="is-success">
        <p>Twoje zamówienie zostało przyjęte do realizacji.</p>
        <p>Dostarczymy zamówienie na adres: <strong>{{ location }}</strong></p>
        <p>Oczekiwany czas dostawy: <strong>25 minut</strong></p>
      </b-message>
    </section>
  </div>
</template>

<script>
import Nav from '~/components/Nav'

export default {
  components: {
    Nav
  },
  computed: {
    location() {
      return this.$store.getters.location
    }
  },
  created() {
    this.$store.commit('clearCart')
  }
}
</script>
