function cifradoCesar(texto, desplazamiento) {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    texto = texto.toUpperCase();
    let resultado = '';
  
    for (let i = 0; i < texto.length; i++) {
      const letra = texto[i];
      const index = alfabeto.indexOf(letra);
  
      if (index === -1) {
        resultado += letra;
      } else {
        const nuevaPos = (index + desplazamiento) % 26;
        resultado += alfabeto[nuevaPos];
      }
    }
    return resultado;
  }
  
  function cifrar() {
    const input = document.getElementById('inputText').value;
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
  
    const desplazamiento = 3;
    const upperInput = input.toUpperCase();
    const cifrada = cifradoCesar(upperInput, desplazamiento);
  
    // Mostrar animación
    for (let i = 0; i < upperInput.length; i++) {
      const span = document.createElement('span');
      span.classList.add('letra');
      span.textContent = upperInput[i];
      resultadoDiv.appendChild(span);
  
      setTimeout(() => {
        const cif = cifradoCesar(upperInput[i], desplazamiento);
        span.style.transform = 'scale(1.5)';
        setTimeout(() => {
          span.textContent = cif;
          span.style.transform = 'scale(1)';
        }, 300);
      }, i * 500);
    }
  
    // Enviar datos al backend
    fetch('http://localhost:3000/guardar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          normal: input,
          cifrada: cifrada
        })
      })
  }