import { postData } from "./postData.js";

const urlBase = "http://127.0.0.1:3000";

// Peticiones

async function postSumar(num1, num2) {
  const resultado = await postData(`${urlBase}/calculadora/sumar`, {
    num1,
    num2,
  });

  return resultado;
}

async function postRestar(num1, num2) {
  const resultado = await postData(`${urlBase}/calculadora/restar`, {
    num1: num1,
    num2: num2,
  });

  return resultado;
}

async function postMultiplicar(num1, num2) {
  const resultado = await postData(`${urlBase}/calculadora/multiplicar`, {
    num1: num1,
    num2: num2,
  });

  return resultado;
}

async function postDividir(num1, num2) {
  const resultado = await postData(`${urlBase}/calculadora/dividir`, {
    num1: num1,
    num2: num2,
  });

  return resultado;
}

// DOM
const d = document;

const form = d.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// Funcion que valida que los input tengan datos
function validarInput(num1, num2) {
  if (isNaN(num1) || num1 === null || isNaN(num2) || num2 === null) {
    return false;
  } else {
    return true;
  }
}

// event listeners

d.addEventListener("click", async (event) => {
  const num1 = parseFloat(d.querySelector("#num1").value);
  const num2 = parseFloat(d.querySelector("#num2").value);
  const resultado = d.querySelector(".result");
  const resultadoValidar = validarInput(num1, num2);

  if (event.target.matches("#btnSum")) {
    if (resultadoValidar) {
      const data = await postSumar(num1, num2);
      resultado.textContent = data.resultado;
    }
  }

  if (event.target.matches("#btnRes")) {
    if (resultadoValidar) {
      const data = await postRestar(num1, num2);
      resultado.textContent = data.resultado;
    }
  }

  if (event.target.matches("#btnMul")) {
    if (resultadoValidar) {
      const data = await postMultiplicar(num1, num2);
      resultado.textContent = data.resultado;
    }
  }

  if (event.target.matches("#btnDiv")) {
    if (resultadoValidar) {
      const data = await postDividir(num1, num2);
      resultado.textContent = data.resultado;
    }
  }
});
