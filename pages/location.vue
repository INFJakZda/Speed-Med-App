<template>
  <div>
    <Nav/>
    <section class="section">
      <b-field label="Lokalizacja">
        <places
          v-model="form.country.label"
          :options="{ countries: ['PL'] }"
          placeholder="Wprowadź adres dostawy"
          @change="v => { form.country.data = v }" />
      </b-field>
      <a
        class="button is-primary is-medium is-fullwidth"
        @click.prevent="setLocation()">Znajdź leki</a>
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
  },
  methods: {
    setLocation() {
      this.$store.commit('location', this.form.country.label)
      this.$router.push('/')
    }
  }
}
</script>
