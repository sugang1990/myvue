<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="aa2">User {{ $route.params.userId }}</div>
  </div>
</template>

<script>
  export default {
    name: 'jn-a',
    data () {
      return {
        msg: 'Welcome to jn-A'
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
