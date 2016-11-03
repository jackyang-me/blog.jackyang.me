<template>
  <nav class="navbar">
    <ul class="navbar__navItems">
      <li v-for="navItem in navItems" :class="{'navbar__navItem': !navItem.active, 'navbar__navItem--active': navItem.active}">
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
