import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/main.ts"],

  target: "esnext",
  platform: "node",

  unbundle: true,
  sourcemap: true,
})
