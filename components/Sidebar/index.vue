<!--
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-02-15 19:13:14
 * @LastEditors: MiKin
 * @LastEditTime: 2022-02-16 00:52:07
 * @FilePath: \vite-ssr-project\components\sidebar\index.vue
-->
<template>
    <div class="navigation">
        <a :href="state.html_url" target="_blank" class="logo">
            <img :src="state.avatar_url" height="64" width="64" :alt="state.login" />
        </a>
            <a :href="state.html_url" target="_blank">{{ state.name }}</a>
        <br />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
    </div>
</template>

<script setup lang="ts">
import Link from '../../components/Link/index.vue'
import { onMounted, Ref, ref } from 'vue'

let state = ref({}) as Ref<GithubUser>;
onMounted(async () => {

    const {
        VITE_USER_NAME: userName,
        VITE_GITHUB_API_URL: apiUrl,
        VITE_GITHUB_ACCEPT: accept,
        VITE_GITHUB_TOKEN: token
    } = import.meta.env

    const res = await fetch(`${apiUrl}/users/${userName}`, {
        headers: {
            'Accept': accept,
            'Authorization': token
        }
    })
    const data: GithubUser = await res.json()
    state.value = data;
})

</script>

<style lang="scss" scoped>
.navigation {
    padding: 20px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.8em;
    .logo {
        img {
            border-radius: 50%;
        }
    }
}
</style>