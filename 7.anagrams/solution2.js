function anagram( string1, string2 ) {
    let newString1 = cleanUpString( string1 );
    let newString2 = cleanUpString( string2 );

    if( newString1 === newString2 ) {
        return true;
    }

    return false;
}

function cleanUpString( string ) {
    return string.replace( /[^\w]/g, '' ).toLowerCase().split( '' ).sort().join( '' );
}

console.log( anagram( 'Hello There!!', 'There Hello!' ) );
console.log( anagram( 'Helllo There!!', 'There Heello!' ) );