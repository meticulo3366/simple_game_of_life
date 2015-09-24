var Game = {}



Game.incrementGrid = function( gridItem ){                     
        // step through array row
        console.log(gridItem)
        for(i =0; i < gridItem.length ; i++){       

        //step through array collumns
            for(j=0; j<gridItem[i].length; j++){
                //compute all logic here
                var cell = gridItem[i][j];
                // cells living nearby
                var livingNear = 0;
                // now compare all neighbors
                    for(k=1; k<9; k++){
                        // check if first index is out of bounds
                        var checkNull = function( x,y ){
                            if (gridItem[x] === undefined){
                                return true
                            } else if( gridItem[x][y] === undefined){
                                return true
                            } else{
                                return false
                            }
                        }

                        /*
                        1    2     3

                        4    5     6

                        7    8      9
                        */

                        //  x coords
                        var x = k % 3
                        var y = 0

                        if ( k < 4 ){
                            y = 1
                        } else if (k<7){
                            y = 2
                        } else if( k < 10){
                            y = 3
                        } else {
                            console.log("oops");
                        }

                        if( checkNull(x,y) == true ){
                            // dont compare as it is out of bounds
                        } else {
                            var otherCell = gridItem[x][y]

                            // if outher call has living organisms
                            if( otherCell  == true ){
                                livingNear ++
                            }

                        }
                }
            // Any live cell with fewer than two live neighbours dies, as if caused by under-population.
            // Any live cell with more than three live neighbours dies, as if by overcrowding.
            if ( ( livingNear < 2 || livingNear > 3 ) && gridItem[i][j] == true ){
                gridItem[i][j] = false
            }

            //Any live cell with two or three live neighbours lives on to the next generation
            if ( ( livingNear == 2 || livingNear == 3 ) && gridItem[i][j] == true ){
                gridItem[i][j] = true
            }

            // if cell is dead and has 3 living neighbors
            if( livingNear  == 3 && gridItem[i][j] == false){
                gridItem[i][j] = true
            }
        }
    }
    return gridItem
}