<template>
    <div id="app">
      <Curriculo
        name="Esther  "
        idade="22"
        naturalidade="Aquidauanna"
       
      />
    </div>
</template>

<script>
import Curriculo from "./components/curriculo.vue";
export default {
  name: "App",
  components: {
    Curriculo,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(231, 231, 231);
}

</style>
