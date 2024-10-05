import {test} from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

//Test untuk skenario normal dengan dua angka positif
test('Penjumlahan dua angka positif', () => {
    assert.strictEqual(sum(5, 5), 10, '5 + 5 seharusnya sama dengan 10');
});

//Test untuk salah satu angka negatif (harus mengembalikan 0)
test('Penjumlahan salah satu angka negatif', () => {
    assert.strictEqual(sum(5, -3), 0, '5 + (-3) seharusnya sama dengan 0')
});

//Test untuk dua angka negatif
test('Penjumlahan dua angka negatif', () => {
    assert.strictEqual(sum(-5, -2), 0, '(-5) + (-2) seharusnya sama dengan 0')
});

//Test salah satu angka dengan parameters (string)
test('Penjumlahan satu angka dengan parameters (string)', () => {
    assert.strictEqual(sum(2, 'test'), 0, '2 + "test" seharusnya sama dengan 0')
});

//Test untuk kedua parameter bukan angka
test('Penjumlahan kedua parameter bukan angka', () => {
    assert.strictEqual(sum('Name', 'Name'), 0, 'Name + Name seharusnya sama dengan 0')
});

//Test untuk nilai 0
test('Penjumlahan angka 0', () => {
    assert.strictEqual(sum(0, 0), 0, '0 + 0 seharusnya sama dengan 0')
});

//Test untuk angkat positif dan 0
test('Penjumlahan angka positif dengan 0', () => {
    assert.strictEqual(sum(5, 0), 5, '5 + 0 seharusnya sama dengan 5')
});

//Test untuk parameter floating point
test('Penjumlahan dua parameter floating point', () => {
    assert.strictEqual(sum(1.5, 2.3), 3.8, '1.5 + 2.3 seharusnya sama dengan 3.8')
});
