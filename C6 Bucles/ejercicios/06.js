function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num >= 100 && num <= 999 || num <= -100 && num >= -999) {
    return true;
  }
  return false;
}

module.exports = tieneTresDigitos;
