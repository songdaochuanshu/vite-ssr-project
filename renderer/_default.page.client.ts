/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-02-15 14:59:20
 * @LastEditors: MiKin
 * @LastEditTime: 2022-02-16 00:21:11
 * @FilePath: \vite-ssr-project\renderer\_default.page.client.ts
 */
import { getPage } from 'vite-plugin-ssr/client'
import { createApp } from './app'
import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'

hydrate()

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>()
  const app = createApp(pageContext)
  app.mount('#app')
}
