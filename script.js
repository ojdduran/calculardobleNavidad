// Definir un objeto para almacenar los salarios de cada mes
const salariosPorMes = {};

function autocompletar() {
  // Obtener el valor ingresado para enero
  const eneroValue = document.getElementById('enero').value;

  // Obtener todos los inputs de salario y autocompletar con el valor de enero
  const salarios = document.querySelectorAll('input[type="number"]');
  salarios.forEach((input) => {
    input.value = eneroValue;
  });
}

function calcular() {
  // Obtener todos los inputs de salario
  const salarios = document.querySelectorAll('input[type="number"]');

  // Calcular el ingreso total del año y el doble sueldo
  let ingresoTotal = 0;
  salarios.forEach((input, index) => {
    const mes = obtenerNombreMes(index);
    const salario = parseFloat(input.value) || 0;
    ingresoTotal += salario;
    salariosPorMes[mes] = salario;
  });

  const dobleSueldo = ingresoTotal / 12;

  // Mostrar los resultados
  document.getElementById('ingresoTotal').textContent = `RD$${ingresoTotal.toFixed(2)}`;
  document.getElementById('dobleSueldo').textContent = `RD$${dobleSueldo.toFixed(2)}`;
}

function limpiar() {
  // Limpiar los campos del formulario y los resultados
  const salarios = document.querySelectorAll('input[type="number"]');
  salarios.forEach((input, index) => {
    input.value = '';
    const mes = obtenerNombreMes(index);
    salariosPorMes[mes] = 0;
  });

  document.getElementById('ingresoTotal').textContent = 'RD$0.00';
  document.getElementById('dobleSueldo').textContent = 'RD$0.00';
}

// Función auxiliar para obtener el nombre del mes dado su índice
function obtenerNombreMes(indice) {
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  return meses[indice];
}
