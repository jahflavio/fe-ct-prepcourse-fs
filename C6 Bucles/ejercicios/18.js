function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  if (min <= 0 && max >= 0) return 0;

  let producto = 1;

  for (let i = min; i <= max; i++) {
    producto *= i;
  }
  return producto;
}

module.exports = productoEntreNúmeros;