const layouts = [
  {
    path: /^\/plastics/,
    layout: 'plastics',
  },
];
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return  new Promise((resolve, reject)=> {
    const match = layouts.find(l => page.path.match(l.path));
    if (match) page.layout = match.layout;

    resolve();
  });
};
