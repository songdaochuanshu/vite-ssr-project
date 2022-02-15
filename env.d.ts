/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-02-15 18:42:44
 * @LastEditors: MiKin
 * @LastEditTime: 2022-02-15 18:57:38
 * @FilePath: \vite-ssr-project\env.d.ts
 */
interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_USER_NAME: string,
            VITE_USER_NAME: string,
            VITE_GITHUB_API_URL: string,
            VITE_GITHUB_ACCEPT: string,
            VITE_GITHUB_TOKEN: string,
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}
