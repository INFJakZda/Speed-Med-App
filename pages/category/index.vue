<template>
  <div>
    <Nav />
    <Search />
    <Header
      title="Szybki zestaw"
      subtitle="Skorzystaj z naszych zestawów leków!" />
    <MedicineList
      :item-list="medicines"
      :add-button="true" />
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Header from '~/components/Header'
import Search from '~/components/Search'
import MedicineList from '@/components/MedicineList'

export default {
  components: {
    Nav,
    Header,
    Search,
    MedicineList
  },
  data() {
    return {}
  },
  computed: {
    medicines() {
      return this.$store.getters.medicines.filter(obj => {
        return obj.category == 10
      })
    }
  }
}
</script>
