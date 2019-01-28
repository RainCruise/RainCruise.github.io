<template>
  <el-row class="header-wrap">
    <el-col :span="24">
      <div class="header-left">
        <el-button icon="el-icon-menu" type="text" @click="onMenuToggle"/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Header',

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

.header-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-left {
    display: inline-block;

    .el-button {
      height: $header-height;

      .el-icon-menu {
        font-size: 24px;
        color: $white;
      }
    }
  }
}
</style>
