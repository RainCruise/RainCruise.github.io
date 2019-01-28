<template>
  <div id="app">

    <el-container>
      <el-header class="header">
        <my-header v-model="isNavOpen"/>
      </el-header>

      <el-aside v-show="isNavOpen" class="aside" width="208px">
        <nav-menu v-model="isNavOpen"/>
      </el-aside>

      <el-main>
        <transition>
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import router from '@/router';
import '@styles/main.scss';

import Header from '@components/header';
import NavMenu from '@components/nav-menu';

export default {
  name: 'App',

  components: {
    'my-header': Header,
    'nav-menu': NavMenu
  },

  data() {
    return {
      isNavOpen: true
    }
  },

  router
}
</script>
