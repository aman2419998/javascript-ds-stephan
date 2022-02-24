function fib( num ) { 
    const result = [ 0, 1 ];

    for( let i=2; i<=num; i++ ) {
        const a = result[ i - 1 ];
        const b = result[ i - 2 ];
        result.push( a + b );
    }

    return result;
}

console.log( fib( 5 ) );