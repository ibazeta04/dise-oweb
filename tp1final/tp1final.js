
let imagenes = [];
let boton= []
let estado = 0;

function preload() {
  imagenes[0] = loadImage('data/Inicio.png');
  imagenes[1] = loadImage('data/A2.png');
  imagenes[2] = loadImage('data/A3.png');
  imagenes[3] = loadImage('data/A4.png');
  imagenes[4] = loadImage('data/A5.png');
  imagenes[5] = loadImage('data/A6.png');
  imagenes[6] = loadImage('data/A7.png');
}



function setup() {
createCanvas(640, 480);

}


function draw() {
  if (estado === 0) {
    image(imagenes[0], 0, 0, width, height);
  } else if (estado === 1) {
    image(imagenes[1], 0, 0, width, height);
  } else if (estado === 2) {
    image(imagenes[2], 0, 0, width, height);
  }
 //image(imagenes[0], 0, 0, 640, 480);

}
