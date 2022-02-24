function steps( num ) {
    for( let i=0; i < num; i++ ) {
        let rowResult = '';
        for( let j=0; j < num; j++ ) {
            if( j <= i ) {
                rowResult += '#';
            }else {
                rowResult += ' ';
            }
        }
        console.log( rowResult );
    }
}

console.log( steps( 5 ) );