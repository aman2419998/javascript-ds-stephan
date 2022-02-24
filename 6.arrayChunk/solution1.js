function arrayChunk( array, chunk ) {
    let result = [];
    for( let element of array ) {
        let lastChunk = result[ result.length - 1 ];
        if( lastChunk && lastChunk.length !== chunk ) {
            lastChunk.push( element );
        }else {
            result.push( [ element ] );
        }
    }

    return result;
}

console.log( arrayChunk( [ 1,2,3,4,5,6,7,8,9,10 ], 5 ) );
console.log( arrayChunk( [ 1,2,3,4,5,6,7,8,9,10 ], 2 ) );