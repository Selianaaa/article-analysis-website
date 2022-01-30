/**
 * Handle submit
 */
export const handleSubmit = (event) => {
  event.preventDefault();
  console.log('AAAA');

  const articleUrl = document.getElementById('url').value;
  document.querySelector('#url').classList.remove('url_error');

  if (!Client.urlIsValid(articleUrl)) {
    document.querySelector('#url').classList.add('url_error');
    return;
  }

  Client.showPreloader();
  Client.getArticleAnalysis(articleUrl);
};
