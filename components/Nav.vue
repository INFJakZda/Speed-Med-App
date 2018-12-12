<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <span class="navbar-item is-family-code is-size-4">
        <nuxt-link to="/">
          <h3><b-icon icon="prescription-bottle-alt" /> SpeedMed</h3>
        </nuxt-link>
      </span>

      <p 
        class="control navbar-item right">
        <nuxt-link
          class="button"
          to="/cart">
          <span class="icon">
            <b-icon icon="shopping-cart" />
          </span>
          <span>Koszyk {{ itemsInCart }}</span>
        </nuxt-link>
      </p>

      <div
        :class="{ 'is-active' : showBurgerMenu }"
        class="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
        @click="showBurgerMenu = !showBurgerMenu">
        <span/>
        <span/>
        <span/>
      </div>
    </div>

    <div
      id="navbarExampleTransparentExample"
      :class="{ 'is-active' : showBurgerMenu }"
      class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <nuxt-link
            class="navbar-link"
            to="/category">
            Kategorie
          </nuxt-link>
          <div class="navbar-dropdown is-boxed">
            <nuxt-link
              v-for="category in getCategories"
              :key="category.id"
              :to="'/category/' + category.id"
              class="navbar-item" >{{ category.name }}</nuxt-link>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <nuxt-link
                :class="{
                  'button': true,
                  'is-success': isLocationSet,
                  'is-warning': !isLocationSet
                }"
                to="/location">
                <span class="icon">
                  <b-icon icon="map-marker-alt"/>
                </span>
                <span>Lokalizacja</span>
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { category } from '~/static/category.json'

export default {
  data() {
    return {
      category,
      showBurgerMenu: false
    }
  },
  computed: {
    getCategories() {
      return category.map(category => {
        category.link = '/category/' + category.id
        return category
      })
    },
    isLocationSet() {
      return this.$store.getters.isLocationSet
    },
    itemsInCart() {
      let items = this.$store.getters.cart.length
      return items > 0 ? ' (' + items + ') ' : ''
    }
  }
}
</script>

<style>
.right {
  position: absolute;
  right: 52px;
  padding: 10px;
}
</style>
