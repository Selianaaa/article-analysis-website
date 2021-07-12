export function handleSubmit(event) {
  event.preventDefault();

  const formText = document.getElementById('url').value;
  if (!Client.checkForName(formText)) return;

  const preloaderElement = document.querySelector('#preloader');
  preloaderElement.style.display = 'block';
  document.getElementById('results').style.display = 'none';

  const url =
    'https://learnenglishteens.britishcouncil.org/magazine/life-around-world/porridge-perfect-breakfast';

  fetch(`http://localhost:8081/check_article?articleUrl=${url}`)
    .then((res) => res.json())
    .then(function (res) {
      console.log(res);
      preloaderElement.style.display = 'none';
      document.getElementById('results').style.display = 'block';

      document.querySelector('#agreement span').innerHTML = res.agreement;
      document.querySelector('#confidence span').innerHTML = res.confidence;
      document.querySelector('#irony span').innerHTML = res.irony;
      document.querySelector('#score span').innerHTML = res.score_tag;
      document.querySelector('#subjectivity span').innerHTML = res.subjectivity;
    });
}
