<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="aa2"> {{name}}</div>
    <div > {{type}}</div>
  </div>
</template>

<script>
  import {test,test2} from '../service/pay'
  export default {
    name: 'jn-a',
    data () {
      return {
        msg: 'Welcome to jn-A',
        name:'',
        type:0
      }
    },
    mounted(){
      test2(2,'sg').then(res=>{
        console.log(res)
        this.name = res.name;
        this.type = res.type;
       });
      test(1).then(res=>{
        console.log(res)
        this.msg = res.msg;
      });
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
