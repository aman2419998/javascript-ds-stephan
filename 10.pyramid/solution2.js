function pyramid( num, row=0, pattern='' ) {
    
    if( num === row ) {
        return;
    }

    const col = pattern.length;

    if( col === 2 * num - 1 ) {
        console.log( pattern );
        return pyramid( num, row+1 );
    }

    const midpoint = Math.floor( ( 2 * num - 1 ) / 2 );
    const add = midpoint - row <= col && midpoint + row >= col ? '#' : ' ';
    pyramid( num, row, pattern + add );
}

console.log( pyramid( 5 ) );