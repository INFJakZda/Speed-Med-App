<template>
  <body class="has-navbar-fixed-top">
    <Nav />
    <section class="main-content">
      <div class="container">
        <p>Hello!</p>
      </div>
    </section>
  </body>
</template>

<script>
import Nav from '~/components/Nav'

export default {
  components: {
    Nav
  },
  data() {
    return {}
  }
}
</script>
