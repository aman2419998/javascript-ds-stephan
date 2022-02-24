// THIS SOLUTION IS USING ARRAY HELPERS

function reverse( string ) {
    return string.split( '' ).reduce( ( reversed, char ) => char + reversed, '' )
}

const ans = reverse( 'Hello' );
console.log( ans );