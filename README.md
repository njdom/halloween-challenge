# 🎃 Desafío de Halloween - Máxima Ganancia

Un desafío de programación con temática de Halloween que resuelve el problema de la suma máxima de subarreglos usando técnicas recursivas.

## 📝 Descripción

El detalle del reto de "La Cosecha de a Malditas" es el siguiente:

El Escenario 🎃

Eres el administrador de un huerto de calabazas que va a ser vendido por el precio total de las calabazas cosechadas. Sin embargo, en el huerto hay calabazas malvadas (puntos negativos) y calabazas deliciosas (puntos positivos).

Se ha descubierto que debido a una maldición, si se empieza a cosechar en una zona, es obligatorio cosechar todas las parcelas contiguas hasta que se decide parar.

El Desafío 🕸️

Debes crear una función en JavaScript llamada maximaGanancia(parcelas) que reciba un array de números enteros (parcelas) y devuelva la máxima ganancia que se puede obtener seleccionando un sub-array contiguo de parcelas (es decir, seleccionando un bloque de calabazas sin saltarse ninguna).

Ejemplo de entrada:

const huertoMaldito = [2, -5, 8, -2, 4, -10, 3, 1];

Sub-array posible: [2, -5, 8] $\rightarrow$ Ganancia: $2 - 5 + 8 = 5$
Sub-array posible: [8, -2, 4] $\rightarrow$ Ganancia: $8 - 2 + 4 = 10$
Sub-array posible: [3, 1] $\rightarrow$ Ganancia: $3 + 1 = 4$
 
La función debe encontrar la máxima suma posible de un sub-array contiguo.

## Ejemplos y Pruebas 📝

| Entrada (parcelas) | Sub-array de Máxima Ganancia | Salida Esperada (maximaGanancia) |
|-------------------|------------------------------|----------------------------------|
| [1, 2, 3, 4] | [1, 2, 3, 4] | 10 |
| [-2, 1, -3, 4, -1, 2, 1, -5, 4] | [4, -1, 2, 1] | 6 |
| [-1, -2, -3, -4] | [-1] o [-2] o [-3] o [-4] | -1 (¡Es la menos mala!) |
| [8, 1, -100, 2, 5] | [8, 1] | 9 |

## 🚀 Instalación

```bash
npm install
```

## 🧪 Ejecutar Pruebas

Ejecuta la suite de pruebas de Jest:

```bash
npm test
```
## 🧩 Algoritmo

La función `maximaGanancia` utiliza un enfoque recursivo que considera:
- El último elemento solo
- Máxima ganancia del arreglo sin el primer elemento
- Máxima ganancia del arreglo sin el último elemento
- Suma de todos los elementos en el arreglo

La función retorna el valor máximo entre estas opciones.

## 🎃 ¡Feliz Programación de Halloween! 👻
