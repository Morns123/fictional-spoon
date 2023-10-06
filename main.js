function checkCats(CatsTuti, CatsNining) {
    // Salin array CatsTuti dan hapus usia kucing dari array yang disalin
    const CatsTutiCopy = [...CatsTuti];
    CatsTutiCopy[0] = "Anjing";  // Kucing pertama adalah anjing
    CatsTutiCopy[CatsTutiCopy.length - 1] = "Anjing";  // Kucing terakhir adalah anjing
    CatsTutiCopy[CatsTutiCopy.length - 2] = "Anjing";  // Kucing kedua terakhir adalah anjing

    // Gabungkan data Tuti yang sudah dikoreksi dengan data Nining
    const allCats = CatsTutiCopy.concat(CatsNining);

    // Loop melalui semua kucing dan tampilkan apakah itu Kucing Dewasa atau Kucing Kecil
    allCats.forEach((age, index) => {
        if (age >= 3) {
            console.log(`Kucing Nomor ${index + 1} adalah Kucing Dewasa, dan berusia ${age} tahun`);
        } else {
            console.log(`Kucing Nomor ${index + 1} masih anak-anak`);
        }
    });
}

// Data uji 1
const DataTuti1 = [3, 5, 2, 12, 7];
const DataNining1 = [4, 1, 15, 8, 3];
checkCats(DataTuti1, DataNining1);

// Data uji 2
const DataTuti2 = [9, 16, 6, 8, 3];
const DataNining2 = [10, 5, 6, 1, 4];
checkCats(DataTuti2, DataNining2);
