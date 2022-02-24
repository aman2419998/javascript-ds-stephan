function arrayChunk( array, chunk ) {
    let index = 0;
    let result = []
    while ( index < array.length ) {
        result.push( array.slice( index, index + chunk ) );
        index += chunk;
    }

    return result;
}

console.log( arrayChunk( [ 1,2,3,4,5,6,7,8,9,10 ], 5 ) );
console.log( arrayChunk( [ 1,2,3,4,5,6,7,8,9,10 ], 2 ) );