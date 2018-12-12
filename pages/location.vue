<template>
  <div>
    <Nav/>
    <section class="section">
      <b-field label="Lokalizacja">
        <places
          v-model="form.country.label"
          :options="{ countries: ['PL'] }"
          placeholder="Wprowadź adres dostawy"
          @change="v => { form.country.data = v }"/>
      </b-field>
      <nuxt-link to="/">
        <a class="button is-primary is-medium is-fullwidth">Znajdź leki</a>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
import Places from 'vue-places'

export default {
  layout: 'default',
  components: {
    Header,
    Nav,
    Places
  },
  data() {
    return {
      form: {
        country: {
          label: null,
          data: {}
        }
      }
    }
  }
}
</script>
