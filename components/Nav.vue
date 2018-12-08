<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="/">
        <img
          src="~/assets/buefy.png"
          alt="SpeedMed"
          width="112"
          height="28">
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
          <a
            class="navbar-link"
            href="https://bulma.io/documentation/overview/start/">
            Kategorie
          </a>
          <div class="navbar-dropdown is-boxed">
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/overview/start/">
              Overview
            </a>
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/modifiers/syntax/">
              Modifiers
            </a>
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/columns/basics/">
              Columns
            </a>
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/layout/container/">
              Layout
            </a>
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/form/general/">
              Form
            </a>
            <hr class="navbar-divider">
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/elements/box/">
              Elements
            </a>
            <a
              class="navbar-item is-active"
              href="https://bulma.io/documentation/components/breadcrumb/">
              Components
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="button"
                href="https://github.com/jgthms/bulma/releases/download/0.7.2/bulma-0.7.2.zip">
                <span class="icon">
                  <i class="fas fa-download"/>
                </span>
                <span>Lokalizacja</span>
              </a>
            </p>
            <p class="control">
              <a
                class="button"
                href="https://github.com/jgthms/bulma/releases/download/0.7.2/bulma-0.7.2.zip">
                <span class="icon">
                  <i class="fas fa-download"/>
                </span>
                <span>Koszyk</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showBurgerMenu: false
    }
  }
}
</script>
