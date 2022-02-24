function checkVowel( string ) {
    const result = string.match( /[aeiou]/gi );
    return result ? result.length : 0
}

console.log( checkVowel( 'Hello World' ) )