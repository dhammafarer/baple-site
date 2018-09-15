const pages = [
  {
    path: /^\/en\/energy/,
    layout: 'energy-en',
  },
  {
    path: /^\/en\/engineering/,
    layout: 'engineering-en',
  },
  {
    path: /^\/en\/metal-packaging/,
    layout: 'metal-packaging-en',
  },
  {
    path: /^\/en\/plastics/,
    layout: 'plastics-en',
  },
  {
    path: /^\/en\/wines/,
    layout: 'wines-en',
  },
  {
    path: /^\/en/,
    layout: 'index-en',
  },
  {
    path: /^\/es/,
    layout: 'index-es',
  },
  {
    path: /^\/zh/,
    layout: 'index-zh',
  },
];
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return  new Promise((resolve, reject)=> {
    const match = pages.find(p => page.path.match(p.path));
    if (match) page.layout = match.layout;

    resolve();
  });
};
