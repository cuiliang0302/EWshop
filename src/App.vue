<template>
  <router-view></router-view>
<!--  <router-view v-slot="{ Component }">-->
<!--    <transition>-->
<!--      <keep-alive>-->
<!--        <component :is="Component"/>-->
<!--      </keep-alive>-->
<!--    </transition>-->
<!--  </router-view>-->
</template>

<style lang="scss">

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
