import type { UserConfig } from './defineConfig.types'

/**
 * 定义配置项
 *
 * @param config 打包配置项
 * @returns 定义的配置项
 */
export function defineConfig(config: UserConfig): UserConfig {
  console.log(config)
  return config
}
