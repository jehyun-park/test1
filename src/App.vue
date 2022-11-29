<template>
  <div id="app">
    <Header />

    <div class="container">
      <router-view />
    </div>

    <SideBar />
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/HeaderVue';
import SideBar from './components/common/SideBarVue';

import Footer from './components/common/FooterVue';

export default {
  name: 'App',
  components: {
    Header,
    SideBar,
    Footer,
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  color: #43b984;
}
table {
  width: 100%;
  border-collapse: collapse;
}
.wrap {
  width: 100%;
}
.container {
  width: 800px;
  margin: 0 auto;
}
a {
  text-decoration: none;
}
.btn {
  padding: 10px;
  background: #34445c;
  color: #fff;
}
</style>
