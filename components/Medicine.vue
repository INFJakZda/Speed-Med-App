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
          <a
            v-if="addButton"
            class="button is-success"
            @click="addToCart">
            <span class="icon is-small">
              <b-icon icon="plus" />
            </span>
            <span>Dodaj</span>
          </a>
          <a
            v-if="removeButton"
            class="button is-danger is-outlined is-fullwidth"
            @click="removeCart">
            <span class="icon is-small">
              <b-icon icon="times" />
            </span>
            <span>Usuń</span>
          </a>
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
    },
    addButton: {
      type: Boolean,
      required: false,
      default: false
    },
    removeButton: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addMedicine', this.medicine)
    },
    removeCart() {
      this.$store.dispatch('removeMedicine', this.medicine)
    }
  }
}
</script>

<style>
</style>
