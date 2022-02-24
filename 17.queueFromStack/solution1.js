class stack {
    constructor( ) {
        this.data = [];
    }

    push( record ) {
        this.data.push( record );
    }

    pop(  ) {
       return this.data.pop();
    }

    peek() {
        return this.data[ this.data.length - 1 ]
    }
}

class Queue {
    constructor( ) {
        this.firstStack = new stack();
        this.secondStack = new stack();
    }

    add( record ) {
        this.firstStack.push( record );
    }

    remove( ) {
        while ( this.firstStack.peek() ) {
            this.secondStack.push( this.firstStack.pop() );
        }

        const record = this.secondStack.pop();

        while ( this.secondStack.peek() ) {
            this.firstStack.push( this.secondStack.pop() );
        }

        return record;
    }

    peek( ) {

        while ( this.firstStack.peek() ) {
            this.secondStack.push( this.firstStack.pop() );
        }

        const record = this.secondStack.peek();

        while ( this.secondStack.peek() ) {
            this.firstStack.push( this.secondStack.pop() );
        }

        return record;
    }
}

const q = new Queue();
q.add( 1 )
q.add( 2 )
console.log( q.peek() );