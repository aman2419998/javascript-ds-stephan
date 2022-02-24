// THIS SOLUTION IS USING COMMON FOR OF LOOP

function reverse( string ){
    let reversed = '';
    for( let char of string ) {
        reversed = char + reversed;
    }

    return reversed;
}

const ans = reverse( 'Hello' );
console.log( ans );