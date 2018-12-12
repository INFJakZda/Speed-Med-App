<template>
  <div>
    <Nav />
    <Search />
    <Header
      title="Szybki zestaw"
      subtitle="Skorzystaj z naszych zestawów leków!" />
    <Medicine
      v-for="medicine in medicines"
      :medicine="medicine"
      :key="medicine.id"
      :add-button="true" />
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Header from '~/components/Header'
import Search from '~/components/Search'
import Medicine from '@/components/Medicine'

export default {
  components: {
    Nav,
    Header,
    Search,
    Medicine
  },
  data() {
    return {}
  },
  computed: {
    medicines() {
      return this.$store.getters.medicines
    }
  }
}
</script>
