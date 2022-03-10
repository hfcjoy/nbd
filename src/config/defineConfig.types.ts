export interface UserConfig extends CommonConfig {
  /**
   * 项目入口配置项
   *
   * @param UserConfig.entryPoints 项目名称或者项目入口文件路径
   * @param EntryPointWithSpecialConfig 每个项目单独配置
   * @param EntryPointWithSpecialConfigs 多个项目一起编译
   */
  entryPoints:
    | EntryPointWithAtom
    | EntryPointWithSpecialConfig
    | EntryPointWithSpecialConfigs
}

interface CommonConfig {
  /** 打包过后的输出目录 */
  outdir?: string
}

type EntryPointWithAtom = string
interface EntryPointWithSpecialConfig extends CommonConfig {
  /**
   * 项目名称或者项目入口文件路径
   *
   * @example
   * 'webpack' || '../src/main.js'
   */
  project: EntryPointWithAtom
}
type EntryPointWithSpecialConfigs = Array<EntryPointWithSpecialConfig>
