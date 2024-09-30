import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence('greetings, friends')).toBe('Greetings, friends.');
  expect(correctSentence('Greetings, friends')).toBe('Greetings, friends.');
  expect(correctSentence('Greetings, friends.')).toBe('Greetings, friends.');
});

test('should capitalize first letter and add a period', () => {
  expect(correctSentence(' hey, friend')).toBe('Hey, friend.');
  expect(correctSentence('   hello world  ')).toBe('Hello world.');
  expect(correctSentence('this is a test')).toBe('This is a test.');
  expect(correctSentence('hello.')).toBe('Hello.');
  expect(correctSentence('')).toBe('.');
  expect(correctSentence('   ')).toBe('.');
});
