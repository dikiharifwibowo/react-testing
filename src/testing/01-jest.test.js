test("testing sederhana", () => {
    expect(true).toBe(true)
})

function penjumlahan(angka1, angka2) {
    return angka1+angka2
}

test("test penjumlahan", () => {
    expect(penjumlahan(2, 4)).toBe(6)
    expect(penjumlahan(5, 4)).toBe(9)
})