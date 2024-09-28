/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman(-500)).toBe(false);
  expect(convertBytesToHuman('string')).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false);
  expect(convertBytesToHuman(undefined)).toBe(false);
  expect(convertBytesToHuman(NaN)).toBe(false);
  expect(convertBytesToHuman([])).toBe(false);
  expect(convertBytesToHuman({})).toBe(false);
  expect(convertBytesToHuman(Infinity)).toBe(false);
  expect(convertBytesToHuman(-Infinity)).toBe(false);
  expect(convertBytesToHuman(true)).toBe(false);
  expect(convertBytesToHuman(false)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe('5 B');
  expect(convertBytesToHuman(1000)).toBe('1000 B');
  expect(convertBytesToHuman(1500)).toBe('1.46 KB');
  expect(convertBytesToHuman(1024)).toBe('1 KB');
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB');
  expect(convertBytesToHuman(1610612736)).toBe('1.5 GB');
  expect(convertBytesToHuman(1099511627776)).toBe('1 TB');
});

// другая группа проверок

test('Приведение типов', () => {
  expect(convertBytesToHuman(+true)).toBe('1 B');
  expect(convertBytesToHuman(+false)).toBe('0 B');
  expect(convertBytesToHuman(Number(true))).toBe('1 B');
  expect(convertBytesToHuman(+null)).toBe('0 B');
  expect(convertBytesToHuman(+'1024')).toBe('1 KB');
});

test('0 есть 0', () => {
  expect(convertBytesToHuman(0)).toBe('0 B');
});

test('математическовое', () => {
  expect(convertBytesToHuman(1e3)).toBe('1000 B');
  expect(convertBytesToHuman(1.5e9)).toBe('1.4 GB');
  expect(convertBytesToHuman(1024 * 2 + 512 * 3)).toBe('3.5 KB');
  expect(convertBytesToHuman((1e6 - 500000) * 2)).toBe('976.56 KB');
  expect(convertBytesToHuman(2048 / 2 + 512 * 2)).toBe('2 KB');
});
