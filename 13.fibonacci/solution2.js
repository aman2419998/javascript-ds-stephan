function fib( num ) { 
    if( num < 2 ) {
        return num;
    }

    return fib( num - 1 ) + fib( num - 2 );
}

console.log( fib( 5 ) );

// fib( 50 ) => exponential time