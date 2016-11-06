<template>
  <nav class="u-navbar">
    <ul class="u-navbar__navItems">
      <li v-for="navItem in navItems" :class="{'u-navbar__navItem': true, 'is-active': navItem.active}">
        <router-link :to="{path: navItem.link}">{{navItem.label}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      navItems: {
        type: Array, // [{label, link, active}]
        default () {
          return []
        }
      }
    }
  }
</script>
