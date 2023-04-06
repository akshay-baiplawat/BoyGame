let gamebox =document.getElementById('gamebox');
let pera=document.getElementById('pera');
let context=gamebox.getContext('2d');
let element = document.getElementById('gamebox');

let enemy={
    px:1000,
    py:50,
    vx:0,
    vy:3,
    width:150,
    height:150,
    color:'red',
    img: new Image
}
let enemy2={
    px:500,
    py:50,
    vx:0,
    vy:2,
    width:100,
    height:150,
    color:'red',
    img: new Image
}
let hero={
    px:0,
    py:400,
    vx:1,
    vy:0,
    width:115,
    height:200,
    color:'blue',
    po: 1,
    img: new Image,
    img2: new Image
}
let quen={
    px:1350,
    py:150,
    vx:1,
    vy:0,
    width:200,
    height:500,
    color:'blue',
    img: new Image
}
let backco ={
    color:'rgb(232, 28, 130)',
    px:20,
    py:13,
    vx:0,
    vy:0,
    width:370,
    height:50,
}
var background= new Image;
background.src="data/background.jpg";
hero.img.src ="data/hero.png";
hero.img2.src ="data/hero2.png";
enemy.img.src ="data/enemi2.png";
enemy2.img.src ="data/ene1.png";
quen.img.src ="data/final.png";
function drowback(box){
    context.drawImage(box,0,0,gamebox.width,gamebox.height);
}

function drowimg(box){
    context.drawImage(box.img,box.px,box.py,box.width,box.height);
}
function drowimg2(box){
    context.drawImage(box.img2,box.px,box.py,box.width,box.height);
}
function drowbox(box){
    context.fillStyle=box.color;
    context.fillRect(box.px,box.py,box.width,box.height);
}
function updateState(enemy){
    if(enemy.height+enemy.py>gamebox.height-90){
        enemy.vy=-enemy.vy;
    }else if(enemy.py<50){
        enemy.vy=-enemy.vy;
    }
    enemy.py+=enemy.vy;
}
function showtxt(){
    var tx=" YOUR LEVEL IS "+hero.po;
    context.font="40px arial ";
    context.fillStyle="white";
    context.fillText(tx,20,50);

}
function updateGame(){
    updateState(enemy);
    updateState(enemy2);
    context.clearRect(0,0,gamebox.width,gamebox.height);
    drowback(background);
    drowimg(enemy);
    drowimg(enemy2);
    drowimg(quen);
    drowimg2(hero);
    drowbox(backco);
    showtxt();
    window.requestAnimationFrame(updateGame);
    chack(enemy);
    chack(enemy2);
}

function chack(box){
    if(hero.px+hero.width-20>box.px && hero.px+20<box.px+box.width && hero.py+hero.height-20>box.py && hero.py+20<box.py+box.height && hero.py+20<box.py+box.height && hero.py+ hero.height+20>box.py){
        alert("Game over");
        hero.px=0;
    }
}

window.addEventListener("keydown",hedalkey);

function goHero(){
    context.clearRect(hero.x,hero.y,hero.width,hero.height);
    drowimg(hero);
    hero.px+=10;
    if(hero.px+hero.width+40>gamebox.width){
        hero.px=0;
        hero.po+=1;
        alert("Game NEXT LEVEL IS " + hero.po + " NOW");
        enemy.vy=Math.abs(enemy.vy)+1;
        enemy2.vy=Math.abs(enemy2.vy)+1;
    }
}

function comeHero(){
    context.clearRect(hero.x,hero.y,hero.width,hero.height);
    drowimg(hero);
    hero.px-=10;
    if(hero.px<0){
        hero.px=0;
    }
}
function hedalkey(event){
    if(event.key==='ArrowLeft'){
        comeHero();
    }else if(event.key==='ArrowRight'){
        goHero();
    }
}


updateGame();

