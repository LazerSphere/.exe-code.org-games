

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a2c0d082-8062-4371-ae41-cde44f1d353e","82935061-f6ca-4388-99c5-619b89129d36","769dee66-f411-48f0-9ddd-6d04281fbc10","59abcc1d-fee9-4ff0-a9f5-c4ed783144c9","4fbb7bbc-80b7-41fd-ab50-8406a241323f","1a2f141b-dd66-482a-b656-289eb79189ec","af03d5dc-74ae-47ac-8490-fc01bfc2c83e","9d32bb17-f1af-4c64-b69e-e9ba8f6d9fdb","6db7236d-a9cb-4833-acf1-6c39a2529c45","8d782218-11f0-4abd-b88e-5697109e8739"],"propsByKey":{"a2c0d082-8062-4371-ae41-cde44f1d353e":{"name":"landscape","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"82935061-f6ca-4388-99c5-619b89129d36":{"name":"alienBlue","sourceUrl":"assets/api/v1/animation-library/gamelab/yoXBG2L287khtgsZxziHgV12eUhQwZRS/category_fantasy/alienBlue.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"yoXBG2L287khtgsZxziHgV12eUhQwZRS","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yoXBG2L287khtgsZxziHgV12eUhQwZRS/category_fantasy/alienBlue.png"},"769dee66-f411-48f0-9ddd-6d04281fbc10":{"name":"alienBlueduck","sourceUrl":"assets/api/v1/animation-library/gamelab/BesD7SXLqwnvHKmov_KY7_TkDdf18FXU/category_fantasy/alienBlue_duck.png","frameSize":{"x":67,"y":72},"frameCount":1,"looping":true,"frameDelay":2,"version":"BesD7SXLqwnvHKmov_KY7_TkDdf18FXU","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":67,"y":72},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BesD7SXLqwnvHKmov_KY7_TkDdf18FXU/category_fantasy/alienBlue_duck.png"},"59abcc1d-fee9-4ff0-a9f5-c4ed783144c9":{"name":"groundPound","sourceUrl":null,"frameSize":{"x":67,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"z9F9lAyVp5MO1bXa2sNQP2DgQdaEc8HW","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":67,"y":72},"rootRelativePath":"assets/59abcc1d-fee9-4ff0-a9f5-c4ed783144c9.png"},"4fbb7bbc-80b7-41fd-ab50-8406a241323f":{"name":"alienBluewalkRight","sourceUrl":"assets/api/v1/animation-library/gamelab/dc4vui4_pmHrM.rep9aLGndzWtuC_cqp/category_fantasy/alienBlue_walk.png","frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":5,"version":"dc4vui4_pmHrM.rep9aLGndzWtuC_cqp","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dc4vui4_pmHrM.rep9aLGndzWtuC_cqp/category_fantasy/alienBlue_walk.png"},"1a2f141b-dd66-482a-b656-289eb79189ec":{"name":"alienBluewalkleft","sourceUrl":null,"frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":5,"version":"7veqGyD4PRQlnUrAm7UWeEM.bZNn5I_o","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/1a2f141b-dd66-482a-b656-289eb79189ec.png"},"af03d5dc-74ae-47ac-8490-fc01bfc2c83e":{"name":"laser","sourceUrl":"assets/v3/animations/YoJkS15JXpQewrl2tPp2bpaQJWXVd3YBR3kRLW_iiS0/af03d5dc-74ae-47ac-8490-fc01bfc2c83e.png","frameSize":{"x":272,"y":13},"frameCount":1,"looping":true,"frameDelay":4,"version":"hIf02Gv59tDFU9FCd89a0hZwkGHR_6Kh","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":13},"rootRelativePath":"assets/v3/animations/YoJkS15JXpQewrl2tPp2bpaQJWXVd3YBR3kRLW_iiS0/af03d5dc-74ae-47ac-8490-fc01bfc2c83e.png"},"9d32bb17-f1af-4c64-b69e-e9ba8f6d9fdb":{"name":"replay","sourceUrl":"assets/v3/animations/YoJkS15JXpQewrl2tPp2bpaQJWXVd3YBR3kRLW_iiS0/9d32bb17-f1af-4c64-b69e-e9ba8f6d9fdb.png","frameSize":{"x":250,"y":67},"frameCount":1,"looping":true,"frameDelay":4,"version":"tLnZnCdqG47EIr_DxjtZAVJ1g7K2FOyc","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":67},"rootRelativePath":"assets/v3/animations/YoJkS15JXpQewrl2tPp2bpaQJWXVd3YBR3kRLW_iiS0/9d32bb17-f1af-4c64-b69e-e9ba8f6d9fdb.png"},"6db7236d-a9cb-4833-acf1-6c39a2529c45":{"name":"GameOver","sourceUrl":"assets/v3/animations/YoJkS15JXpQewrl2tPp2bpaQJWXVd3YBR3kRLW_iiS0/6db7236d-a9cb-4833-acf1-6c39a2529c45.png","frameSize":{"x":251,"y":201},"frameCount":1,"looping":true,"frameDelay":4,"version":"hNspSnBmmvEYD36uXvmUPJ6ZmN61KH7e","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":251,"y":201},"rootRelativePath":"assets/v3/animations/YoJkS15JXpQewrl2tPp2bpaQJWXVd3YBR3kRLW_iiS0/6db7236d-a9cb-4833-acf1-6c39a2529c45.png"},"8d782218-11f0-4abd-b88e-5697109e8739":{"name":"start","sourceUrl":null,"frameSize":{"x":186,"y":78},"frameCount":1,"looping":true,"frameDelay":12,"version":"4k4qWkPlCi7fC1_wwV.tL6U64lzHPl3e","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":186,"y":78},"rootRelativePath":"assets/8d782218-11f0-4abd-b88e-5697109e8739.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var landscape = createSprite(200, 200);
landscape.setAnimation("landscape");
var alien = createSprite(200, 350);
alien.setAnimation("alienBlue");
alien.setCollider("rectangle", 0, 0, 50, 70);
alien.debug = false;
var numberOflasers = 7;
var lasers = createGroup();


for (var i = 0; i < numberOflasers; i++) {
  var laser = createSprite(randomNumber(15, 200), randomNumber(15, 200));
  laser.setAnimation("laser");
  laser.scale = 0.25;
  laser.debug = false;
  laser.setCollider("rectangle");
  laser.velocityX = randomNumber(-5, 5) || 1;
  laser.velocityY = randomNumber(-5, 5) || 1;
  lasers.add(laser);
}


var startgame = createSprite(200, 325);
startgame.setAnimation("start");
var GameOver = createSprite(200, 200);
GameOver.setAnimation("GameOver");
GameOver.visible = false;
var replay = createSprite(500, 500);
replay.setAnimation("replay");
replay.visible = false;
var gameOver = false;
var time = 0;
var gamestart = false;


createEdgeSprites();
function draw() {
  
  
background("black");
  alienMovement();
  
  if (gamestart === true) {
    
  } else {
    startGame();
  }
  
  
for (var j = 0; j < lasers.length; j++) {
        var currentLaser = lasers[j];
        currentLaser.bounceOff(edges);
    }


if (alien.isTouching(lasers)) {
    gameOver = true;
  }
  
  
  
if (gameOver) {
    alien.visible = false;
    lasers.visible = false;
    GameOver.visible = true;
    time = time;
  }
  
  
  
  
  
  
  
  
  
  
  
  
if (alien.x>=400) {
    alien.x = 395;
  } else if (alien.x<=0) {
    alien.x = 5;
  } else if (alien.y<=0) {
    alien.y = 350;
  } else if (alien.y>=400) {
    alien.y = 350;
  }
  
  
drawSprites();

  if (mousePressedOver(replay) && gameOver){
resetGame();
}

  time = time+0.0333333333333333;


  if (gameOver) {
    time = Math.round(time) + 0.0333333333333333;
    lasers.setVelocityXEach(0);
    lasers.setVelocityYEach(0);
    alien.visible = false;
    lasers.setVisibleEach(false);
    GameOver.visible = true;
    replay.visible = true;
    replay.x = 200;
    replay.y = 325;
    fill("orange");
    textSize(32);
    text("Time Alive: ", 100, 100);
    text(Math.round(time), 260, 100);
    fill("yellow");
  } else {
    fill("orange");
    textSize(32);
    text(Math.round(time*100)/100, 260, 100);
    text("Time Alive: ", 100, 100);
  }
  
  
  hitboxes();



}
function resetGame() {
    time = 0;
    gameOver = false;
    alien.x = 200;
    alien.y = 350;
    alien.visible = true;
    alien.velocityX = 0;
    alien.velocityY = 0;
    replay.visible = false;
    GameOver.visible = false;
    lasers.setVisibleEach(true); 
  for (var i = 0; i < lasers.length; i++) {
      var laser = lasers[i];
      laser.x = randomNumber(15, 385);
      laser.y = randomNumber(15, 200); 
      laser.velocityX = randomNumber(-4, 4) || 1; 
      laser.velocityY = randomNumber(-4, 4) || 1; 
  }
}


function alienMovement() {
  if (keyDown("a")) {
    alien.x = alien.x - 5;
    alien.setAnimation("alienBluewalkleft");
    if (keyDown("shift")) {
      alien.x = alien.x - 10;
    }
    if (alien.y<200) {
      alien.velocityY = 6;
    }
    if (alien.y > 350) {
      alien.velocityY = 0;
      alien.y = 350;
    }
  } else if ((keyDown("d"))) {
    alien.x = alien.x + 5;
    alien.setAnimation("alienBluewalkRight");
    if (keyDown("shift")) {
      alien.x = alien.x + 10;
    }
    if (alien.y<200) {
      alien.velocityY = 6;
    }
    if (alien.y > 350) {
      alien.velocityY = 0;
      alien.y = 350;
    }
  } else if ((keyDown("s"))) {
    alien.setAnimation("alienBlueduck");
    alien.setCollider("rectangle", 0, 10, 40, 40);
    if (alien.y<200) {
      alien.velocityY = 6;
    }
    if (alien.y > 350) {
      alien.velocityY = 0;
      alien.y = 350;
    }
  } else if ((keyWentDown("space"))) {
    alien.velocityY = -6;
  } else if ((alien.y < 200)) {
    alien.velocityY = 6;
  } else if (alien.y>350) {
    alien.velocityY = 0;
    alien.y = 350;
  } else if ((keyDown("ctrl"))) {
    alien.velocityY = 0;
    alien.y = 350;
    alien.setAnimation("groundPound");
    alien.setCollider("rectangle", 0, 10, 40, 40);
  } else {
    alien.setAnimation("alienBlue");
    alien.setCollider("rectangle", 0, 0, 50, 70);
  }
  
}
function hitboxes() {
  if (keyDown("p")) {
    alien.debug = false;
    landscape.debug = false;
    GameOver.debug = false;
    replay.debug = false;
    for (var i = 0; i < lasers.length; i++) {
      (lasers[i]).debug = false;
    }
  }

  if (keyDown("o")) {
    alien.debug = true;
    landscape.debug = true;
    GameOver.debug = true;
    replay.debug = true;
    for (var k = 0; k < lasers.length; k++) {
      (lasers[k]).debug = true;
    }
  }
}


function startGame() {
  lasers.setVisibleEach(false);
  GameOver.visible = false;
  replay.visible = false;
  if (mousePressedOver(startgame)) {
    resetGame();
    startgame.x = 10000;
    gamestart = true;
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
