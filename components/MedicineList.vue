<template>
  <div>
    <b-message
      v-if="isItemListEmpty">
      Brak wyników.
    </b-message>
    <div
      v-if="!isItemListEmpty">
      <Medicine
        v-for="item in itemList"
        :medicine="item"
        :key="item.id"
        :add-button="addButton"
        :remove-button="removeButton" />
    </div>
</div></template>

<script>
import Medicine from '@/components/Medicine'

export default {
  components: {
    Medicine
  },
  props: {
    itemList: {
      type: Array,
      required: true,
      default: () => []
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
  computed: {
    isItemListEmpty() {
      return this.itemList.length === 0
    }
  }
}
</script>
