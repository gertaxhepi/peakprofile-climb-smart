// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import path from "path";
import { loadEnv, type Plugin } from "vite";

// Loads ALL env vars (not just VITE_*) into process.env for server-side code
// (server routes / server functions). Never expose these via envDefine.
function loadServerEnv(): Plugin {
  return {
    name: "load-server-env",
    config(_, { mode }) {
      Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [loadServerEnv()],
    resolve: {
      alias: {
        // Pin entities deep imports to the hoisted v4.5.0 copy (nested v7 breaks SSR).
        "entities/lib/decode.js": path.resolve(process.cwd(), "node_modules/entities/lib/decode.js"),
        "entities/lib/encode.js": path.resolve(process.cwd(), "node_modules/entities/lib/encode.js"),
        "entities": path.resolve(process.cwd(), "node_modules/entities"),
      },
    },
  },
});
