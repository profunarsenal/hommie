<template>
  <div id="app">
    <header-component />
    <div class="main">
      <sidebar-component />
      <building-component />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
import BuildingComponent from "@/components/BuildingComponent.vue";

export default {
  name: "App",

  components: {
    HeaderComponent,
    SidebarComponent,
    BuildingComponent,
  },
};
</script>

<style lang="scss">
@import "~@/assets/style/normalize.css";

// reset style
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

// base style
body {
  min-width: 320px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #142036;
  background: #f4f4f4;
}

.container {
  max-width: 1480px;
  padding: 0 40px;
  margin: 0 auto;

  @media (min-width: 1600px) {
    max-width: 1430px;
    padding: 0 15px;
  }
}

.main {
  display: flex;
}
</style>
