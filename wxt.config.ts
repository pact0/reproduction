import { defineConfig, UserConfig } from "wxt";
import react from "@vitejs/plugin-react";

// See https://wxt.dev/api/config.html
export default defineConfig({
  imports: {
    eslintrc: {
      enabled: 9,
    },
  },

  runner: {
    startUrls: ["https://www.google.com"],
    chromiumArgs: ["--user-data-dir=./.wxt/chrome-data"],
  },
  manifest: {
    permissions: [
      "activeTab",
      "scripting",
      "sidePanel",
      "storage",
      "tabs",
      "notifications",
    ],
    action: {},
    name: "Reproduction",
    description: "Reproduction",
  },
  vite: () => ({
    plugins: [react()],
  }),
  modules: ["@wxt-dev/module-react", "@wxt-dev/auto-icons"],
  srcDir: "src",
}) satisfies UserConfig;
