var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var car1_x = 10;
var car1_y = 10;

var car2_x = 10;
var car2_y = 120;

var background;
var car1;

function add(){
    background = new Image();
    background.onload =  uploadbackground;
    background.src = "https://i.postimg.cc/bv5d35nK/racing.jpg";

    car1 = new Image();
    car1.onload =  uploadcar1;
    car1.src = "https://i.postimg.cc/YqdnnNX1/car1.png";

    car2 = new Image();
    car2.onload =  uploadcar2;
    car2.src = "data:image/jpeg;base64,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";
}
function uploadbackground(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1, car1_x, car1_y, 170, 100);
}
function uploadcar2(){
    ctx.drawImage(car2, car2_x, car2_y, 170, 100);
}

window.addEventListener("keydown", key);
function key(e){
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "38"){
        up();
        console.log("up");
    }
    if (keypressed == "40"){
        down();
        console.log("down");
    }
    if (keypressed == "37"){
        left();
        console.log("left");
    }
    if (keypressed == "39"){
        right();
        console.log("right");
    }


    if (keypressed == "87"){
        w();
        console.log("w");
    }
    if (keypressed == "83"){
        s();
        console.log("s");
    }
    if (keypressed == "65"){
        a();
        console.log("a");
    }
    if (keypressed == "68"){
        d();
        console.log("d");
    }
}

function up(){
    if(car1_y >= 0){
        car1_y -= 10;
        console.log(`x = ${car1_x}, y = ${car1_y}`);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function down(){
    if(car1_y <= 500){
        car1_y += 10;
        console.log(`x = ${car1_x}, y = ${car1_y}`);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function left(){
    if(car1_x >= 0){
        car1_x -= 10;
        console.log(`x = ${car1_x}, y = ${car1_y}`);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function right(){
    if(car1_x <= 700){
        car1_x += 10;
        console.log(`x = ${car1_x}, y = ${car1_y}`);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}






function w(){
    if(car2_y >= 0){
        car2_y -= 10;
        console.log(`x = ${car2_x}, y = ${car2_y}`);
        uploadbackground();
        uploadcar2();
        uploadcar1();
    }
}
function s(){
    if(car2_y <= 500){
        car2_y += 10;
        console.log(`x = ${car2_x}, y = ${car2_y}`);
        uploadbackground();
        uploadcar2();
        uploadcar1();
    }
}
function a(){
    if(car2_x >= 0){
        car2_x -= 10;
        console.log(`x = ${car2_x}, y = ${car2_y}`);
        uploadbackground();
        uploadcar2();
        uploadcar1();
    }
}
function d(){
    if(car2_x <= 700){
        car2_x += 10;
        console.log(`x = ${car2_x}, y = ${car2_y}`);
        uploadbackground();
        uploadcar2();
        uploadcar1();
    }
}