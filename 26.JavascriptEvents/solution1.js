class Event {
    constructor( ) {
        this.events = {}
    }

    on( eventName, callback ) {
        if( this.events[ eventName ] ) {
            this.events[ eventName ].push( callback );
        }else {
            this.events[ eventName ] = [ callback ];
        }
    }

    trigger( eventName ) {
        if( this.events[ eventName ] ) {
            for( let cb of this.events[ eventName ] ) {
                cb();
            }
        }
    }

    off( eventName ) {
        delete this.events[ eventName ];
    }
}

const eventEmitter = new Event();

eventEmitter.on( 'click', ( ) => {
    console.log( 'First Event Fired' );
} );

eventEmitter.on( 'click', ( ) => {
    console.log( 'Second Event Fired' );
} );

eventEmitter.trigger( 'click' );

eventEmitter.off( 'click' );

console.log( eventEmitter );