import { test } from 'node:test';
import  assert  from 'node:assert';
import { sum } from './index.js';

test('Fungsi sum menjumlahkan dua angka positif', () => {
  // Mengharapkan hasilnya adalah 5
  assert.strictEqual(sum(2, 3), 5);
});

test('Fungsi sum menjumlahkan angka positif dan negatif', () => {
  // Mengharapkan hasilnya adalah 2
  assert.strictEqual(sum(5, -3), 2); 
});

test('Fungsi sum menjumlahkan dua angka negatif', () => {
  // Mengharapkan hasilnya adalah -2
  assert.strictEqual(sum(-2, -3), -5); 
});

test('Fungsi sum menjumlahkan angka dengan nol', () => {
  // Mengharapkan hasilnya adalah 5
  assert.strictEqual(sum(0, 5), 5);
  // Mengharapkan hasilnya adalah 5  
  assert.strictEqual(sum(5, 0), 5);  
});
