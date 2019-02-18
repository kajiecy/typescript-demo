<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" v-model="clickCount"/>
    显示文本：{{showCountTest}}<br>
    <input type="text" v-model="clickCount"/>
    <button @click="addClickCount">点击</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue,Watch,Emit,Provide } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
    @Provide('users')
    users = [
        {
            name: 'test',
            id: 0
        }
    ]

    clickCount:number = 0;
    addClickCount(){
        this.clickCount ++;
        this.users[0].id++;
    }
    @Watch('clickCount', {deep: true})
    watchCount(newVal, oldVal) {
        console.log("newVal", newVal, "oldVal", oldVal)
    }
    get showCountTest(){
        return `${this.clickCount}次`
    }
}
</script>
