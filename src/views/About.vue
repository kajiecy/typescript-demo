<template>
  <div class="about">
    <h1>This is an about page</h1>
      <button></button>
  </div>
</template>
<script lang="ts">
    import { Component, Vue,Watch,Emit,Provide } from 'vue-property-decorator';

    Component.registerHooks([
        'beforeRouteEnter',
        'beforeRouteLeave',
    ])

    @Component
export default class About extends Vue {
    mounted() {
        console.log('About mounted',this.$route);
    }
    beforeRouteEnter (to, from, next) {
        console.log("触发before守卫");
        //此时根据传来的路由信息判断 组织菜单的 openFlag
        next();
    }
    beforeRouteLeave (to, from, next) {
        console.log("触发Leave守卫");
        //此时根据传来的路由信息判断 组织菜单的 openFlag
        next();
    }

    @Watch('$route', {deep: true})
    watchRoute(newVal, oldVal) {
        console.log("newVal", newVal, "oldVal", oldVal)
    }
}
</script>
