function solicitarYConvertirTemperatura() {
  let entrada;
  let celsius;

  // Bucle para volver a solicitar los datos hasta que sea un número válido
  while (true) {
    entrada = prompt("Ingresa la temperatura en grados Celsius:");

    if (entrada === null) {
      console.log("Operación cancelada por el usuario.");
      return;
    }

    const entradaLimpia = entrada.trim();
    celsius = Number(entradaLimpia);

    if (entradaLimpia !== "" && !isNaN(celsius)) {
      break; // Salir si el valor es numérico
    }

    alert("Error: El dato ingresado no es un número válido. Intenta de nuevo.");
  }

  // Fórmulas
  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  // 1. Impresión por consola exigida por el ejercicio
  console.log(`Grados Kelvin: ${kelvin}`);
  console.log(`Grados Fahrenheit: ${fahrenheit}`);

  // 2. Impresión estilizada por el DOM
  const appDiv = document.getElementById("app");
  if (appDiv) {
    appDiv.innerHTML = `
      <div class="result-card">
        <h2>Entrada: ${celsius}°C</h2>
        <div class="result-item">
          <span>Grados Kelvin:</span>
          <span class="result-value">${kelvin} K</span>
        </div>
        <div class="result-item">
          <span>Grados Fahrenheit:</span>
          <span class="result-value">${fahrenheit} °F</span>
        </div>
      </div>
    `;
  }
}

// Iniciar al cargar la página
solicitarYConvertirTemperatura();