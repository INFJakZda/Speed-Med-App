<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="/"><h1>SpeedMed</h1>
      </a>
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
                class="button"
                to="/location">
                <span class="icon">
                  <i class="fas fa-download"/>
                </span>
                <span>Lokalizacja</span>
              </nuxt-link>
            </p>
            <p class="control">
              <nuxt-link
                class="button"
                to="/cart">
                <span class="icon">
                  <p>i</p>
                </span>
                <span>Koszyk</span>
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
    }
  }
}
</script>
