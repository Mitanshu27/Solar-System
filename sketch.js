
var sun,mercury,venus,mars,earth,jupiter;
    
var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupeterImg;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;

function preload() {
    sunImg = loadImage("u.png");
    mercuryImg = loadImage("me.png");
    venusImg = loadImage("ve.png");
    earthImg = loadImage("e.png");
    marsImg = loadImage("m.png");
    jupeterImg = loadImage("ju.png");
}

function setup() {
    createCanvas(1500, 1200);
    sun = createSprite(400, 200,50,50);
    sun.addImage("sun", sunImg);
    sun.scale = 0.5;
    sun.setCollider("circle", 0, 0, 95);
    sun.debug = true;

    mercury = createSprite(500, 190,50,50);
    mercury.addImage("mercury", mercuryImg);
    mercury.scale = 0.02;
    mercury.setCollider("circle", 0, 0, 800);
    mercury.debug = true;

    venus = createSprite(575, 210,50,50);
    venus.addImage("venus", venusImg);
    venus.scale = 0.03;
    venus.setCollider("circle", 0, 0, 800);
    venus.debug = true;

    earth = createSprite(650, 260,50,50);
    earth.addImage("earth", earthImg);
    earth.scale = 0.03;
    earth.setCollider("circle", 0, 0, 815);
    earth.debug = true;

    mars = createSprite(730, 300,50,50);
    mars.addImage("mars", marsImg);
    mars.scale = 0.06;
    mars.setCollider("circle", 0, 0, 300);
    mars.debug = true;


    
}

function draw() {
    background(0);


    angleMode(DEGREES);
    translate(width / 2, height / 2);
    rotate(angle);

    if (sun.collide(mercury)) 
    {
        mercury.destroy();
    }
    if (sun.collide(venus)) 
    {
        venus.destroy();
    }
    if (sun.collide(earth)) 
    {
        earth.destroy();
    }
    if (sun.collide(mars)) 
    {
        mars.destroy();
    }

    angle = angle + anglespeed;
    if (frameCount % 1 === 0) {
        sun.scale = sun.scale + 0.01;
    }
    drawSprites();
}

