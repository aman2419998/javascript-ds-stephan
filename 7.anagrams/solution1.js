function anagram( string1, string2 ) {

    let string1CharMap = generateCharMap( string1 );
    let string2CharMap = generateCharMap( string2 );

    if( Object.keys( string1CharMap ).length !== Object.keys( string2CharMap ).length ) {
        return false
    }

    for( let char in string1CharMap ) {
        if( string1CharMap[ char ] !== string2CharMap[ char ] ) {
            return false;
        }
    }

    return true;
}

function generateCharMap( string ) {
    let charMap = {}
    for( let char of string.replace( /[^\w]/g,'' ).toLowerCase() ) {
        charMap[ char ] = charMap[ char ] + 1 || 1
    }

    return charMap;
}

console.log( anagram( 'Hello There!!', 'There Hello!' ) );
console.log( anagram( 'Helllo There!!', 'There Heello!' ) );