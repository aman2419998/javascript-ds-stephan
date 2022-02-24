function pattern( num ) {
    let midpoint = Math.floor( ( 2 * num - 1 ) / 2 );
    for( let row=0; row<num; row++ ) {
        let pattern = '';
        for( let col=0; col< 2 * num - 1; col++ ) {
            if( midpoint - row <= col && midpoint + row >= col ) {
                pattern += '#'
            }else{
                pattern += ' '
            }
        }

        console.log( pattern );
    }
}

console.log( pattern( 5 ) );