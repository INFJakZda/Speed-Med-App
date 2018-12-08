<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img 
              :src="medicine.thumbnail" 
              alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ medicine.name + " zł" }}</p>
          <p class="subtitle is-5">{{ medicine.price + " zł" }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    medicine: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>

<style>
</style>
