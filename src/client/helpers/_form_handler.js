/**
 * Handle submit
 */
export const handleSubmit = (event) => {
  event.preventDefault();

  const articleUrl = document.getElementById('url').value;
  if (!Client.checkForName(articleUrl)) return;

  const preloaderElement = document.querySelector('#preloader');
  preloaderElement.style.display = 'block';
  document.getElementById('results').style.display = 'none';

  fetch(`http://localhost:8081/check_article?articleUrl=${articleUrl}`)
    .then((res) => res.json())
    .then(function (res) {
      preloaderElement.style.display = 'none';
      document.getElementById('results').style.display = 'block';

      document.querySelector('#agreement span').innerHTML = res.agreement;
      document.querySelector('#confidence span').innerHTML = res.confidence;
      document.querySelector('#irony span').innerHTML = res.irony;
      document.querySelector('#score span').innerHTML = res.score_tag;
      document.querySelector('#subjectivity span').innerHTML = res.subjectivity;
    });
};
