export const files = {
  children: [
    {
      name: 'node_modules',
      children: [
        {
          name: 'lodash',
          children: [
            {
              name: 'merge',
            },
            { name: 'registry' },
          ],
        },
        { name: 'react' },
        { name: 'joi' },
        { name: 'globals' },
      ],
    },
    { name: 'package.json' },
    { name: 'vite.config.ts' },
    {
      name: 'src',
      children: [
        {
          name: 'components',
          children: [
            {
              name: 'header',
            },
            { name: 'footer' },
          ],
        },
        { name: 'pages' },
        { name: 'data' },
        { name: 'assets' },
      ],
    },
  ],
};
