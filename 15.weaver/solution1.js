class queue {
    constructor() {
        this.data = [];
    }

    add( record ) {
        return this.data.unshift( record );
    }

    remove( ) {
        return this.data.pop();
    }

    peek( ) {
        return this.data[ this.data.length - 1 ];
    }
}

function weaver( sourceOne, sourceTwo ) {
    const q = new queue();

    while ( sourceOne.peek() || sourceTwo.peek() ) {
        if( sourceOne.peek() ) {
            q.add( sourceOne.remove() );
        }

        if( sourceTwo.peek() ) {
            q.add( sourceTwo.remove() );
        }
    }

    return q.data;
}


const source1 = new queue();
source1.add( 1 );
source1.add( 2 );

const source2 = new queue();
source2.add( 'Hello' );
source2.add( 'World' );

console.log( weaver( source1, source2 ) );