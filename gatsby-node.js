exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return  new Promise((resolve, reject)=> {
    if (page.path.match(/^\/en/)) {
      page.layout = 'index-en';
      createPage(page);
    } else if (page.path.match(/^\/es/)) {
      page.layout = 'index-es';
      createPage(page);
    } else if (page.path.match(/^\/zh/)) {
      page.layout = 'index-zh';
      createPage(page);
    }

    resolve();
  });
};
