import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { withTheme } from './decorators';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      decorators: [withTheme],
      globals: {
        theme: 'light',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'hsl(0 0% 100%)' },
        { name: 'dark', value: 'hsl(240 10% 3.9%)' },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '360px', height: '640px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1280px', height: '720px' },
        },
        wide: {
          name: 'Wide Desktop',
          styles: { width: '1536px', height: '864px' },
        },
      },
    },
    globalTypes: {
      theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
          icon: 'circlehollow',
          items: [
            { value: 'light', icon: 'circlehollow', title: 'Light' },
            { value: 'dark', icon: 'circle', title: 'Dark' },
          ],
          showName: true,
        },
      }
    }
  },
};

export default preview;