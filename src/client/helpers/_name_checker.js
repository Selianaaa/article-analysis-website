/**
 * Check if url is valid
 * @param {string} inputText - url
 */
export const checkForName = (inputText) => {
  const urlRegex =
    /^(http(s)?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.?[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  console.log(urlRegex.test(inputText), inputText);

  const urlIsValid = urlRegex.test(inputText);
  const urlInputElement = document.querySelector('#url');

  if (!urlIsValid) {
    urlInputElement.classList.add('url_error');
  } else {
    urlInputElement.classList.remove('url_error');
  }

  return urlIsValid;
};
