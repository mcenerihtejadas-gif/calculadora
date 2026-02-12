const inputCuenta = document.getElementById('cuenta');
const inputPersonas = document.getElementById('personas');
const botonesPropina = document.querySelectorAll('.btn-propina');
const propinaPersonalizada = document.getElementById('propina-personalizada');
const displayPropina = document.getElementById('monto-propina');
const displayTotal = document.getElementById('monto-total');
const btnReiniciar = document.getElementById('btn-reiniciar');

let valorCuenta = 0;
let porcentajePropina = 0.15; 
let numeroPersonas = 1;

function calcular() {
  if (numeroPersonas >= 1) {
    
    const propinaTotal = valorCuenta * porcentajePropina;
   
    const propinaPorPersona = propinaTotal / numeroPersonas;
   
    const totalPorPersona = (valorCuenta + propinaTotal) / numeroPersonas;

    displayPropina.innerText = `$${propinaPorPersona.toFixed(2)}`;
    displayTotal.innerText = `$${totalPorPersona.toFixed(2)}`;
  }
}


inputCuenta.addEventListener('input', (e) => {
  valorCuenta = parseFloat(e.target.value) || 0;
  calcular();
});

botonesPropina.forEach(boton => {
  boton.addEventListener('click', (e) => {
    botonesPropina.forEach(b => b.classList.remove('activo'));
    e.target.classList.add('activo');
    porcentajePropina = parseFloat(e.target.value) / 100;
    propinaPersonalizada.value = ""; 
    calcular();
  });
});

propinaPersonalizada.addEventListener('input', (e) => {
  porcentajePropina = parseFloat(e.target.value) / 100 || 0;
  calcular();
});

inputPersonas.addEventListener('input', (e) => {
  numeroPersonas = parseInt(e.target.value) || 0;
  calcular();
});

btnReiniciar.addEventListener('click', () => {
  location.reload(); 
});