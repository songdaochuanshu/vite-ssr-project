<!--
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-02-15 14:59:20
 * @LastEditors: MiKin
 * @LastEditTime: 2022-02-15 23:38:25
 * @FilePath: \vite-ssr-project\renderer\PageShell.vue
-->
<template>
  <div class="layout">
    <Sidebar />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from '../components/Sidebar/index.vue'
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>

<style lang="scss" scoped>
.layout {
  display: flex;
  margin: auto;
}
.content {
  padding: 20px;
  border-left: 2px solid #eee;
  padding-bottom: 50px;
  min-height: 100vh;
}
.logo {
  margin-top: 20px;
  margin-bottom: 10px;
  img {
    border-radius: 50%;
  }
}
</style>
