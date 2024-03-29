var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que ser� utilizado (2D ou 3D)
var dx = 5;//a tava de varia��o (velocidade) horizontal do objeto
var dy = 5;//a tava de varia��o (velocidade) vertical do objeto
var x = 250;//posi��o horizontal do objeto (com valor inicial)
var y = 100;//posi��o vertical do objeto (com valor inicial)
var WIDTH = 500;//largura da �rea retangular
var HEIGHT = 200;//altura da �rea retangular
var fundoImg = new Image();


function Desenhar() {
//desenhar carinha   
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // C�rculo exterior
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Boca (sentido hor�rio)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Olho esquerdo
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Olho direito
    ctx.stroke();

//desenhar carinha 2


ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.arc(x, y, 50, 0, Math.PI*2, true);
    ctx.fill();
    ctx.fillStyle = "yellow";
    ctx.arc(x, y,35, 0, Math.PI, false);
    ctx.fill();


    ctx.fillStyle = 'green';
    ctx.fillRect(x-20,y-20,10, 10, 100, 100);
    
    ctx.fillStyle = 'blue   ';
    ctx.fillRect(x+20,y-15,10, 5, 100, 100);

    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Boca (sentido hor�rio)
}

function fundo(){
    fundoImg.src = "fundo.jpg";
    ctx.drawImage(fundoImg, 0, 0);  
}

function LimparTela() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function Iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 10);
}

function KeyDown(evt){
    switch (evt.keyCode) {
        case 38:  /*seta para cima */
            if (y - dy > 0){
                y -= dy;
            }
            break;
        case 40:  /*set para baixo*/
            if (y + dy < HEIGHT){
                y += dy;
            }
            break;
        case 37:  /*set para esquerda*/
            if (x - dx > 0){
                x -= dx;
            }
            break;
        case 39:  /*seta para direita*/
            if (x + dx < WIDTH){
                x += dx;
            }
            break;
    }
}

function Atualizar() {
    LimparTela();    
   
    fundo();
     Desenhar();
}
window.addEventListener('keydown', KeyDown, true);
Iniciar();
