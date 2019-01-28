<template>

  <el-menu
    class="menu"
    router
    unique-opened
    background="red"
    text-color="#fff"
    active-text-color="#fff">

    <div class="menu-header">
      <el-button icon="el-icon-menu" type="text" class="menu-toggle" @click="onMenuToggle"/>
      <p>RainCruise</p>
    </div>

    <template v-for="item in routesWithTitle">
      <el-submenu v-if="item.children" :key="item.name" :index="item.path">
        <span slot="title">{{ item.meta.title }}</span>

        <el-menu-item-group
          v-for="sub in item.children"
          :key="sub.name">
          <el-menu-item
            :index="sub.path"
            v-text="sub.meta.title"
            :class="{'is-item-active': $route.name === sub.name}"/>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item
        v-else
        :key="item.name"
        :index="item.path"
        :class="{'is-item-active': $route.name === item.name}">
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </template>

  </el-menu>

</template>

<script>
import routes from '@/router/routes';

export default {
  name: 'NavMenu',

  model: {
    prop: 'navOpen',
    event: 'change'
  },

  props: {
    navOpen: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    routesWithTitle() {
      return routes.map(item => {
        if (item.children) {
          item.children = item.children.filter(child => child.meta && child.meta.title);
        }
        return item;
      });
    }
  },

  methods: {
    onMenuToggle() {
      const vm = this;
      const {navOpen} = vm;
      vm.emitChange(!navOpen);
    },

    emitChange(value) {
      this.$emit('change', value);
    }
  }
}
</script>

<style lang="scss">
@import '@styles/variables.scss';

.menu {
  border-right: 0;

  .menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $header-height;
    padding: 0 20px;
    background-color: $menu-background-color;
    color: $white;

    .menu-toggle {
      .el-icon-menu {
        font-size: 24px;
        color: $white;
      }
    }

    p {
      display: inline;
      margin: 10px;
      font-weight: 300;
      font-size: 20px;
    }
  }

  .el-menu-item {
    text-align: center;
  }

  .is-item-active {
    background-color: $primary !important;
  }

  .menu {
    border: 0;
  }

  .el-menu-item-group {
    text-align: center;
  }
}
</style>

