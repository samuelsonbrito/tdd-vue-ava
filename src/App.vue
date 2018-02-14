<template>
  <div id="app">
    <p>Total: {{ total }}</p>
    <button @click="subtrair"> - </button>
    <button @click="somar"> + </button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      total: 0
    }
  },
  methods:{
    subtrair(){
      this.total--
    },
    somar(){
      this.total++
    }
  }
}
</script>
