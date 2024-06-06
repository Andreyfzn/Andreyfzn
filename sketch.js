function         Numeros(){
let numero1=10;
let numero2=6;
let resultado=numero1/numero2;
  
console.log (resultado);
texto = "resultado da divisão=" + resultado;
textSize(25);
fill("yellow")
text(texto,5,10,150,150);
} 
  
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
                Numeros();
  
}
