<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <h2 
        v-if="subtitle.length !== 0" 
        class="subtitle">{{ subtitle }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: '', required: false }
  }
}
</script>
