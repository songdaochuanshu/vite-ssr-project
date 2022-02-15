/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-02-15 14:59:20
 * @LastEditors: MiKin
 * @LastEditTime: 2022-02-15 18:44:49
 * @FilePath: \vite-ssr-project\vite.config.ts
 */
import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [vue(), ssr()],
}

export default config
