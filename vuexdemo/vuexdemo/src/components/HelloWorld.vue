<template>
  <div class="hello">
    <h1>我是从页面直接获取的值：{{ this.$store.state.count }}</h1>
    <h2>我是从getter里面计算得到的值：{{this.$store.getters.getStateCount}}</h2>
    <h3>原来的值{{this.$store.state.count}}</h3>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  
    add(){
      this.$store.dispatch("add");
      //this.$store.commit("add");
    },
    reduce(){
      var n=10;
      this.$store.dispatch("reduce",n);
      //this.$store.commit("reduce");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
