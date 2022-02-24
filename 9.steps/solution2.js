function steps( step, row=0, result='' ) {

    if( row === step ) {
        return;
    }

    if( result.length === step ) {
        console.log( result );
        return steps( step, row+1 );
    }

    const add = result.length <= row ? '#' : ' ';

    steps( step, row, result + add );
}

console.log( steps( 5 ) );