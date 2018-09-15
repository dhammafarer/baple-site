const pages = [
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
