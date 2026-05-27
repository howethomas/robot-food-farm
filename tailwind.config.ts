import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VSCode Light+ palette
        editor: '#ffffff',
        ink: '#000000',
        muted: '#6c6c6c',
        rule: '#e5e5e5',
        accent: '#007acc',         // VSCode status-bar blue
        panel: '#f3f3f3',          // sidebar / activity panel
        tabInactive: '#ececec',
        // JSON syntax (Light+)
        jKey: '#0451a5',
        jStr: '#a31515',
        jNum: '#098658',
        jBool: '#0000ff',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'system-ui',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'Menlo',
          'Monaco',
          '"Cascadia Code"',
          'Consolas',
          '"Courier New"',
          'monospace',
        ],
      },
      maxWidth: {
        prose: '40rem',
      },
    },
  },
  plugins: [],
};

export default config;
