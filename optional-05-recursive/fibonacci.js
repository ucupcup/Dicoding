function fibonacci(n) {
    // Basis untuk deret Fibonacci: kembalikan [0] untuk n = 0 dan [0, 1] untuk n = 1
    if (n === 0) {
        return [0];
    }
    if (n === 1) {
        return [0, 1];
    }
 
    // Rekursif: Dapatkan deret Fibonacci hingga n-1
    const fibArray = fibonacci(n - 1);
    
    // Hitung elemen baru sebagai jumlah dari dua elemen terakhir
    const nextValue = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    
    // Tambahkan elemen baru ke array
    fibArray.push(nextValue);
    
    // Kembalikan deret yang telah diperbarui
    return fibArray;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
