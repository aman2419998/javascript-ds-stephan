function spiralMatrix( num ) {
    let result = [];

    for( let i=0; i<num; i++ ) {
        result.push( [] );
    }

    let counter = 1;
    let startRow = 0;
    let endRow = num - 1;
    let startCol = 0;
    let endCol = num - 1;

    while( startRow <= endRow && startCol <= endCol ) {
        //top row 
        for( let i=startCol; i <= endCol; i++ ) {
            result[ startRow ][ i ] = counter;
            counter++
        }
        startRow++

        //right row
        for( let i= startRow; i <= endRow; i++ ){
            result[ i ][ endCol ] = counter;
            counter++
        }
        endCol--;

        //bottom row
        for( let i=endCol; i>=startCol; i-- ) {
            result[ endRow ][ i ] = counter;
            counter++
        }
        endRow--;

        //left row
        for( let i=endRow; i >=startRow; i-- ) {
            result[ i ][ startCol ] = counter;
            counter++
        }
        startCol++;
    }

    return result;
}

console.log( spiralMatrix( 5 ) );