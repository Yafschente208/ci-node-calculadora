// calculator.test.js

import test from 'node:test';              
import assert from 'node:assert/strict';    

import { sumar, restar, multiplicar, dividir } from './calculator.js';

test('sumar 2 + 3 da 5', () => {
  assert.equal(sumar(2, 3), 5);
});

test('restar 10 - 4 da 6', () => {
  assert.equal(restar(10, 4), 6);
});

test('multiplicar 5 * 8 da 40', () => {
  assert.equal(multiplicar(5, 8), 40);
});

test('dividir 20 / 4 da 5', () => {
  assert.equal(dividir(20, 4), 5);
});

test('dividir por cero lanza error', () => {
  assert.throws(() => dividir(10, 0), { message: 'No se puede dividir por cero' });
});