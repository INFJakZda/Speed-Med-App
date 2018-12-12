<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              :src="medicine.thumbnail"
              alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">{{ medicine.name + " zł" }}</p>
          <p class="subtitle is-6">
            <font color="green">{{ medicine.price + " zł" }}</font>
            <strike><font color="red">{{ Math.round(parseFloat(medicine.price) + 5) * 100 / 100 + " zł" }}</font></strike>
          </p>
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
      this.$toast.open({
        message: 'Dodano do koszyka: ' + this.medicine.name.split(' ')[0],
        type: 'is-success'
      })
    },
    removeCart() {
      this.$store.dispatch('removeMedicine', this.medicine)
      this.$toast.open({
        message: 'Usunięto z koszyka: ' + this.medicine.name.split(' ')[0],
        type: 'is-danger'
      })
    }
  }
}
</script>

<style>
</style>
