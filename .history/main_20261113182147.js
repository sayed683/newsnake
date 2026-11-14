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

// food positions (x,y)
let food_x = cell_size * 5;
let food_y = cell_size * 5;

// snake head positions (x,y)
let snake_x = cell_size * 10;
let snake_y = cell_size * 10;

// body parts positions(x,y)
let pos_x = 0;
let pos_y = 0;

// container to hold sanke parts
snakeBody = [];

// load html page
document.