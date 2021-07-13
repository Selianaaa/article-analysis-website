import { urlIsValid } from '../src/client/helpers';

describe('Testing the name checker functionality', () => {
  test('Testing the urlIsValid() function', () => {
    expect(urlIsValid).toBeDefined();
  });

  test('valid url', () => {
    expect(
      urlIsValid('https://www.bbc.com/news/world-us-canada-57814213')
    ).toBe(true);
  });

  test('invalid url', () => {
    expect(urlIsValid('www.bbc.com')).toBe(false);
  });
});
