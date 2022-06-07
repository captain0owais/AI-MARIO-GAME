function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800 , 400);
	video.parent('game_console');
  
	posenet = ml5.poseNet(video , modelLoaded);
	poseNet.on('pose' , gotResults);
}

function modelLoaded(){
	console.log("MODEL LOADED");
}

function gotResults(results){

if(results.length > 0){
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;

	console.log("NOSE X = " + noseX + "    " + "NOSE Y = " + noseY);
}

}

function draw() {
	game()
}






