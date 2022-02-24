function palindrome( string ) {
    return string.split( '' ).reverse().join( '' ) === string;
}

console.log( palindrome( 'moom' ) );