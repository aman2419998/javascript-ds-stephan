class Node {
    constructor( data ) {
        this.data = data;
        this.children = []
    }

    add( data ) {
        this.children.push( new Node( data ) );
    }

    remove( data ) {
       this.children = this.children.filter( child => child.data !== data );
    }
}

class Tree {
    constructor( ) {
        this.root = null;
    }

    traverseBFS( fn ) {
        const arr = [ this.root ];
        while( arr.length ) {
            const node = arr.shift();
            arr.push( ...node.children );
            fn( node );
        }
    }

    traverseDFS( fn ) {
        const arr = [ this.root ];
        while( arr.length ) {
            const node = arr.shift();
            arr.unshift( ...node.children );
            fn( node );
        }
    }
}

function levelWidth( root ) {
    const arr = [ root, 's' ];
    const counters = [ 0 ];
    while ( arr.length > 1 ) {
        const node = arr.shift();
        if( node === 's' ) {
            counters.push( 0 );
            arr.push( 's' );
        }else {
            arr.push( ...node.children );
            counters[ counters.length - 1 ]++;
        }
    }
    return counters;
}

const newNode = new Node( 20 );
const tree = new Tree();
tree.root = newNode;
tree.root.add( 15 );
tree.root.add( 10 );
tree.root.add( 5 );
tree.root.children[ 0 ].add( 22 );
tree.root.children[ 1 ].add( 222 );

console.log( levelWidth( tree.root ) );

