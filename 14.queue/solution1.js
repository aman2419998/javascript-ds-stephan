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
}

const q = new queue();
q.add( 1 );
q.add( 2 );
console.log( q.remove( ) );