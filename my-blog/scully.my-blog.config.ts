import '@scullyio/scully-plugin-puppeteer';
import { setPluginConfig, ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */

setPluginConfig('md', { enableSyntaxHighlighting: true });

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "my-blog",
  spsModulePath: './dist/my-blog',
  outDir: './dist/static',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
  }
};
