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
    canvas = document.getElementById("my_canvas");

    // set width
    canvas.width = cell_size * columns;

    // set height
    canvas.height = cell_size * rows;

    // get tools
    tools = canvas.getContext("2d");

    // apply changes
    update();

}



// function update to make changes on page
function update(){

    // set canvas style
    tools.fillStyle = 'rgb(0,0,0)';
    tools.fillRect(0 , 0 , canvas.width , canvas.height);

    // set food style
    tools.fillStyle = 'rgb(255,255,255)';
    tools.fillRect(food_x , food_y , cell_size , cell_size);

    // set snake style
    tools.fillStyle = 'brown';
    tools.fillRect(snake_x , snake_y , cell_size , cell_size);

    // set score style
    tools.fillStyle = 'rgb(226, 230, 28)'
    tools.fillText("your score is :" + score , 10 , 10);



}


// change food place function
function placefood(){
    food_x = Math.floor(Math.random() * columns) * cell_size;
    food_y = Math.floor(Math.random() * )
}

// change direction finction
