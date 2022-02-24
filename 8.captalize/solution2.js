function Captalize( string ) {
    let result = string[0].toUpperCase();
    for( let i=1; i < string.length; i++ ) {
        if( string[ i-1 ] === ' ' ) {
            result += string[ i ].toUpperCase();
        }else {
            result += string[ i ];
        }
    }

    return result;
}

console.log( Captalize( 'hello guys how are you man?' ) );