function vowel( string ) {
    const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
    let count = 0;
    for( let char of string.toLowerCase() ) {
        if( vowels.includes( char ) ) {
            count += 1
        }
    }
    return count;
}

console.log( vowel( 'Aman Gupta' ) );