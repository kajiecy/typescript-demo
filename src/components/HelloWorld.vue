<template>
  <div class="hello">
    <h1>{{ msg }} {{value}}<button @click="addCount">+</button></h1>
  {{users}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
    @Inject('users') users;
    @Prop({type: Number,default:0})
    @Model("input")value: number;
    addCount(){
        this.$emit('input', this.value+1)
    }
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
