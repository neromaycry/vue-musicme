<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
html {
  position: static;
}
body {
	margin: 0;
	padding: 0;
	overflow-y: hidden;
}

.app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	height: 622px;
	width: 100%;
}
</style>
