export function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  const formText = document.getElementById('name').value;
  Client.checkForName(formText);

  const url =
    'https://learnenglishteens.britishcouncil.org/magazine/life-around-world/porridge-perfect-breakfast';

  fetch(`http://localhost:8081/check_article?articleUrl=${url}`)
    .then((res) => res.json())
    .then(function (res) {
      console.log(res);
      document.getElementById('results').innerHTML = res.agreement;
    });
}
