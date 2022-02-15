/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-02-15 14:59:20
 * @LastEditors: MiKin
 * @LastEditTime: 2022-02-15 18:43:43
 * @FilePath: \vite-ssr-project\renderer\app.ts
 */
import { createSSRApp, defineComponent, h } from 'vue'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
import type { PageContext } from './types'

export { createApp }

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          },
        },
      )
    },
  })

  const app = createSSRApp(PageWithLayout)

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}
