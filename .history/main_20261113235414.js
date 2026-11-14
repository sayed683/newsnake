// score
let score = 0;

// canvas
let canvas;

// cells size
let cell_size = 20;

// width = num of columns
let columns = 20;

// heigt = rows
let rows = 20;

// tools to draw set positions
let tools;

// food positions (x,y)
let food_x = cell_size * 5;
let food_y = cell_size * 5;

// snake head 🗣 positions (x,y) 
let snake_x = cell_size * 10;
let snake_y = cell_size * 10;

// body parts positions(x,y)
let pos_x = 0;
let pos_y = 0;

// container to hold sanke parts
snakeBody = [];

// load html page
window.onload = function () {
    // get canvas from document
    canvas = document.onload("my_vanvas");

    // set width
    width = cell_size * columns;

    // set height
    height = cell_size * rows;

    // get tools
    tools = canvas.getContext("2d");

    // call function update
    update();
}


// apply changes on document
function update(){
    // set canvas style
    tools.fillStyle = 'rgb(0,0,0)';
    tools.fillRect(0 , 0 , canvas.width , canvas.height);

    // set snake dtyle
    tools.fillStyle = 'rgb(255,255,255)';
    tools.fillRect(snake_x , snake_y , cell_size , cell_size);

    // set food style
    tools.fillStyle = 'brown';
    tools.fillRect(food_x , food_y , cell_size , cell_size);

    // set score style
    tools.fillStyle = '#67c367';
    tools.fillText("your score :" + score , 10 , 5 )



}
