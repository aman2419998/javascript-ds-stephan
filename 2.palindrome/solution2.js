function palindrome( string ) {
    return string.split( '' ).every( ( char, index ) => (
        char === string[ string.length - index - 1 ]
    ) );
}

console.log( palindrome( 'moomm' ) );