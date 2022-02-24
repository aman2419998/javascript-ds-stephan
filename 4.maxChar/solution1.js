function maxChar ( string ) {

    let max = 0;
    let maxChar = '';
    let chars = {}

    for( let char of string ) {
        chars[ char ] = chars[ char ] + 1 || 1
    }

    for( let char in chars ) {
        if( chars[ char ] > max ) {
            max = chars[ char ];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log( maxChar( 'Hello World!' ) )