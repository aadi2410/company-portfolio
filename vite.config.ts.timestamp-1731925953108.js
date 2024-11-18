// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve("C:\\Users\\developer\\Downloads\\portfolio-website", "src/components"),
      "@utils": path.resolve("C:\\Users\\developer\\Downloads\\portfolio-website", "src/utils"),
      "@pages": path.resolve("C:\\Users\\developer\\Downloads\\portfolio-website", "src/pages"),
      "@layout": path.resolve("C:\\Users\\developer\\Downloads\\portfolio-website", "src/layout")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQGNvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoXCJDOlxcXFxVc2Vyc1xcXFxkZXZlbG9wZXJcXFxcRG93bmxvYWRzXFxcXHBvcnRmb2xpby13ZWJzaXRlXCIsICdzcmMvY29tcG9uZW50cycpLFxuICAgICAgJ0B1dGlscyc6IHBhdGgucmVzb2x2ZShcIkM6XFxcXFVzZXJzXFxcXGRldmVsb3BlclxcXFxEb3dubG9hZHNcXFxccG9ydGZvbGlvLXdlYnNpdGVcIiwgJ3NyYy91dGlscycpLFxuICAgICAgJ0BwYWdlcyc6IHBhdGgucmVzb2x2ZShcIkM6XFxcXFVzZXJzXFxcXGRldmVsb3BlclxcXFxEb3dubG9hZHNcXFxccG9ydGZvbGlvLXdlYnNpdGVcIiwgJ3NyYy9wYWdlcycpLFxuICAgICAgJ0BsYXlvdXQnOiBwYXRoLnJlc29sdmUoXCJDOlxcXFxVc2Vyc1xcXFxkZXZlbG9wZXJcXFxcRG93bmxvYWRzXFxcXHBvcnRmb2xpby13ZWJzaXRlXCIsICdzcmMvbGF5b3V0JylcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUdqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsZUFBZSxLQUFLLFFBQVEsc0RBQXNELGdCQUFnQjtBQUFBLE1BQ2xHLFVBQVUsS0FBSyxRQUFRLHNEQUFzRCxXQUFXO0FBQUEsTUFDeEYsVUFBVSxLQUFLLFFBQVEsc0RBQXNELFdBQVc7QUFBQSxNQUN4RixXQUFXLEtBQUssUUFBUSxzREFBc0QsWUFBWTtBQUFBLElBQzVGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
