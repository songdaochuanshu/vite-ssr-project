<!--
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-02-15 19:02:36
 * @LastEditors: MiKin
 * @LastEditTime: 2022-02-15 19:03:37
 * @FilePath: \vite-ssr-project\components\Link\index.vue
-->

<template>
  <a :class="{ active: pageContext.urlPathname === $attrs.href }">
    <slot />
  </a>
</template>
<style scoped>
a {
  padding: 3px 10px;
}
a.active {
  background-color: #eee;
}
</style>
<script lang="ts" setup>
import { usePageContext } from '../../renderer/usePageContext'
const pageContext = usePageContext()
</script>
