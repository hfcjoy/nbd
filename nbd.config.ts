import { defineConfig } from './src'

export default defineConfig({
  entryPoints: [
    {
      project: '@vercel/ncc'
    }
  ],
  outdir: './src/compiled'
})
