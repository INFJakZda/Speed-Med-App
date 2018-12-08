<template>
  <div>
    <Nav />
    <Header
      title="Szybki zestaw"
      subtitle="Skorzystaj z naszej zestawów leków!" />
    <Footer />
    <Search />
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Header from '~/components/Header'
import Search from '~/components/Search'

export default {
  components: {
    Nav,
    Header,
    Search
  },
  data() {
    return {}
  }
}
</script>
