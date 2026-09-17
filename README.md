# Conversor de Temperatura

Aplicación web interactiva desarrollada en JavaScript que convierte grados Celsius a Kelvin y Fahrenheit, incluyendo validación de datos de entrada mediante bucles y renders dinámicos en la pantalla (DOM).

Este proyecto forma parte de los ejercicios prácticos de lógica de programación.

---

## 🚀 Funcionalidades

* **Entrada de Datos:** Solicita al usuario ingresar una temperatura en grados Celsius a través de un cuadro de diálogo (`prompt`).
* **Validación de Datos:** Verifica que el valor ingresado sea un número válido mediante un bucle de reintento (`while` y `isNaN`). Si el usuario introduce texto o deja el campo vacío, el programa muestra una alerta de error y vuelve a solicitar el dato.
* **Conversión:**
  - **Kelvin:** $K = °C + 273.15$
  - **Fahrenheit:** $°F = ( °C \times \frac{9}{5} ) + 32$
* **Resultados en Consola y DOM:** Muestra los resultados calculados directamente en la consola del navegador y los renderiza visualmente dentro de una tarjeta con estilos CSS.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la interfaz web.
* **CSS3:** Estilos modernos con diseño responsivo y tema oscuro.
* **JavaScript (ES6):** Lógica de conversión, manipulación del DOM y validación de tipos de datos.
* **Git & GitHub:** Control de versiones y alojamiento del código fuente.

---

## 🧪 Pruebas de Funcionamiento

Puedes comprobar el funcionamiento probando los siguientes casos de prueba:

| Entrada (°C) | Salida Kelvin (K) | Salida Fahrenheit (°F) |
| :---: | :---: | :---: |
| **45** | 318.15 | 113 |
| **14** | 287.15 | 57.2 |

---


1. Clona este repositorio en tu equipo:
   ```bash
   git clone [https://github.com/lizbethtg/Temperatura.git](https://github.com/lizbethtg/Temperatura.git)
