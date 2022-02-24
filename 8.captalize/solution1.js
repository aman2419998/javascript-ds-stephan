function Captalize( string ) {
    const sentance = string.split( ' ' );
    const result = [];
    for( let words of sentance ) {
        result.push(  words[0].toUpperCase() + words.slice( 1 ) ); 
    }
    return result.join( ' ' );
}

console.log( Captalize( 'hello guys how are you man?' ) );