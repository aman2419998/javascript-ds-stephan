class Node {
    constructor( data, next = null ) {
        this.data = data,
        this.next = next
    }
};

class LinkedList {
    constructor( ) {
        this.head = null;
    }

    insertFirst( data ) {
        this.head = new Node( data, this.head );
    }

    size( ) {
        let counter = 0;
        let node = this.head;
        while( node ) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst( ) {
        return this.head;
    }

    getLast( ) { 
        let node = this.head;
        if( !node ) {
            return null;
        }
        while( node.next ) {
            node = node.next;
        }
        return node;
    }

    clear( ) {
        this.head = null;
    }

    removeFirst( ) {
        if( !this.head ) {
            return null;
        }
        this.head = this.head.next;
    }

    removeLast( ) {

        if( !this.head || !this.head.next ) {
            this.head = null;
            return null;
        }

        let prev = this.head;
        let main = this.head.next;

        while( main.next ) {
            prev = main;
            main = main.next;
        }

        prev.next = null;
    }

    insertLast( data ) {
        let lastNode = new Node( data );
        let node = this.getLast();

        if( !node ) {
            this.head = lastNode;
            return;
        }

        node.next = lastNode;
    }

    getAt( index=0 ) {
        let counter = 0;
        let node = this.head
        while( node ) {
            if( counter === index ) {
                return node;
            }else {
                counter++;
                node = node.next;
            }
        }
        return null;
    }

    removeAt( index = 0 ) {
        if( !this.head ) {
            return null;
        }

        let prevNode = this.getAt( index - 1 );
        let node = this.getAt( index );
        let nextNode = this.getAt( index + 1 );
        if( prevNode ) {
            prevNode.next = nextNode;
        }else if( nextNode ) {
            this.head = nextNode;
            node.next = null;
        }else {
            return null;
        }
    }

    insertAt( data, index = 0 ) {
        if( !this.head ) {
            this.head = new Node( data );
            return;
        }

        const prevNode = this.getAt( index - 1 );
        const node = this.getAt( index );

        if( prevNode && node ) {
            prevNode.next = new Node( data, node );
        }else if( node ) {
            this.head = new Node( data, node );
        } else {
            const lastNode = this.getLast();
            lastNode.next = new Node( data );
        }
    }

    foreach( fn ) {
        let node = this.head;
        let counter = 0;
        while( node ) {
            fn( node, counter );
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        let counter = 0;
        while( node ) {
            yield { data: node.data, index: counter };
            node = node.next;
            counter++;
        }
    }
}


function midPoint( list ) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while( fast.next && fast.next.next ) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const list = new LinkedList();
list.insertFirst( 10 );
list.insertFirst( 20 );
list.insertFirst( 30 );
list.insertFirst( 40 );
list.insertFirst( 50 );
console.log( midPoint( list ) );