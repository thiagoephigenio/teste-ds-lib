import { resolve } from 'path';
import { defineConfig, createLogger } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const root = resolve(__dirname, 'src');
const customLogger = createLogger();

export default defineConfig(({ command, mode }) => {
  const defaultConfig = {
    root,
    base: '/',
    json: {
      stringify: true,
    },
  };

  if (command === 'serve' && mode !== 'production') {
    return {
      ...defaultConfig,
      customLogger,
      clearScreen: false,
      define: {
        global: {},
      },
      server: {
        port: 49051,
        open: true,
      },
    };
  }
  return {
    build: {
      lib: {
        entry: root,
        name: '@teste-ds-lib/styles',
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        plugins: [cssInjectedByJsPlugin()],
      },
    },
  };
});
