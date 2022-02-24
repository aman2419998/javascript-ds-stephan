class Node {
    constructor( data ) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert( data ) {
        if( data > this.data && this.right ) {
            this.right.insert( data );
        }else if( data > this.data ) {
            this.right = new Node( data );
        }else if( data < this.data && this.left ) {
            this.left.insert( data );
        }else {
            this.left = new Node( data );
        }
    }

    contains( data ) {
        if( this.data === data ) {
            return this;
        }

        if( this.data < data && this.right ) {
            return this.right.contains( data );
        } else if( this.left ) {
            return this.left.contains( data );
        }

        return null;
    }
}

function validate( node, min=null, max=null ) {
    
    if( min !== null && node.data < min ) {
        return false;
    }

    if( max !== null && node.data > max ) {
        return false;
    }

    if( node.left && !validate( node.left, min, node.data ) ) {
        return false;
    }

    if( node.right && !validate( node.right, node.data, max ) ) {
        return false;
    }

    return true;
}

const BST = new Node( 10 );
BST.insert( 5 );
BST.insert( 15 );

console.log( validate( BST ) );