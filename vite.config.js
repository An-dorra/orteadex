import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcsspxtoviewport8plugin from "postcss-px-to-viewport-8-plugin";

export default defineConfig({
  base: "./",
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport8plugin({
          unitToConvert: "px",
          viewportWidth: (file) => {
            let num = 1920;
            if (file && file.indexOf("m_") !== -1) {
              num = 375;
            }
            return num;
          },
          unitPrecision: 5,
          propList: ["*"],
          viewportUnit: "vw",
          fontViewportUnit: "vw",
          selectorBlackList: [".m-"],
          minPixelValue: 1,
          mediaQuery: true,
          replace: true,
          exclude: [/node_modules\/ant-design-vue/],
          include: [/src\/pages\/HomePage\.css$/, /src\/layouts\/Header\.css$/],
          landscape: false,
          landscapeUnit: "vw",
          landscapeWidth: 1024,
        }),
      ],
    },
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  plugins: [react()],
});
