function memoize( fn ) {
    let cache = { }
    return function( ...args ) {
        if( cache[ args ] ) {
            return cache[ args ]
        }

        const result = fn.apply( this, args );
        cache[ args ] = result;
        
        return result;
    }
}

function fib( num ) { 
    if( num < 2 ) {
        return num;
    }

    return fib( num - 1 ) + fib( num - 2 );
}

fib = memoize( fib );

console.log( fib( 50 ) );