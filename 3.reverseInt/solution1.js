function reverseInt( int ) {
    return parseInt( int.toString().split( '' ).reverse().join( '' ) ) * Math.sign( int );
}

console.log( reverseInt( -50 ) );
console.log( reverseInt( 786 ) );
console.log( reverseInt( -786 ) );

