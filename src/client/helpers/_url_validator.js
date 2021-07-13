/**
 * Check if url is valid
 * @param {string} inputText - url
 */
export const urlIsValid = (inputText) => {
  const urlRegex =
    /^(http(s)?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.?[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  const urlIsValid = urlRegex.test(inputText);

  return urlIsValid;
};
