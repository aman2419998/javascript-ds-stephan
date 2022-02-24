// THIS SOLUTION IS USING ARRAY REVERSE METHOD

function reverse( string ){
    return string.split( '' ).reverse().join( '' );
}

const ans = reverse( 'Hello' );
console.log( ans );