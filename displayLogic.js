// using global variable because it is simple!
var SEED

function playTurn(){
    SEED = Game.incrementGrid(SEED)
}

// seed the game
function seedGame(){
    // render the width and height
    var width = document.getElementById("width").value
    var height = document.getElementById("height").value
    //generate the values
    SEED = makeMatrix(width,height)
    console.log(SEED)
    // render the table
    tableCreate(width,height)
    // destroy the init screen
    document.getElementById('gameInit').innerHTML = ''
}

//inspiration:  http://jsfiddle.net/Ronny/Ud5vT/

function makeBoolean(){
    return Math.random()<.5; // Readable, succint
}

function makeMatrix( rows, cols){

  var arr = new Array();

  // Creates all lines:
  for(var i=0; i < rows; i++){

      // Creates an empty line
      arr.push([]);

      // Adds cols to the empty line:
      arr[i].push( new Array(cols));

      for(var j=0; j < cols; j++){
        // Initializes:
        arr[i][j] = makeBoolean();
      }
  }

  return arr;
}

// render the table
function tableCreate(w,h) {
    var body = document.getElementById('renderGame');
    // wipe the old game if it exists from the screen
    body.innerHTML = ""
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < w; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < h; j++) {
            //if (i == 2 && j == 1) {
            //    break
           // } else {
                var td = document.createElement('td');
                td.appendChild(document.createTextNode( SEED[i][j] ))
                td.setAttribute('rowSpan', '1');
                td.setAttribute('collSpan', '1');
                tr.appendChild(td)
            //}
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}