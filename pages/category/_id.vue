<template>
  <div>
    <Nav />
    <Header
      :title="categoryName.name" />
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
import { category } from '~/static/category.json'

export default {
  components: {
    Nav,
    Header,
    Search,
    // Medicine,
    MedicineList
  },
  data() {
    return {}
  },
  computed: {
    medicines() {
      return this.$store.getters.medicines.filter(obj => {
        return obj.category == this.$route.params.id
      })
    },
    categoryName() {
      return category.filter(cat => cat.id == this.$route.params.id)[0]
    }
  }
}
</script>
