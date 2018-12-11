<template>
  <div>
    <Nav/>
    <section class="section">
      <b-message type="is-success">
        <p>Twoje zamówienie przebiegło pomyślnie. Zostanie dostarczone za około 25 minut.</p>
      </b-message>
    </section>
  </div>
</template>

<script>
import Nav from '~/components/Nav'

export default {
  components: {
    Nav
  }
}
</script>
