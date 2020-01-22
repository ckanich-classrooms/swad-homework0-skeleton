var fizzBuzzOutput = require( "../fizzbuzz" ).fizzBuzzOutput;

const assert = require( 'assert' );
const axios = require( 'axios' )


describe( "fizzbuzz", function () {
    it( "Should output Fizz for numbers %3=0 && %5!=0", function () {
        assert.strictEqual( fizzBuzzOutput( 6 ), "Fizz" );
    } );
    it( "Should output Buzz for numbers %3!=0j && %5==0", function () {
        assert.strictEqual( fizzBuzzOutput( 25 ), "Buzz" );
    } );
    it( "Should output FizzBuzz if divisible by 15", function () {
        assert.strictEqual( fizzBuzzOutput( 45 ), "FizzBuzz" );
    } );
    it( "Should output the number if divisible by neither 3 nor 5", function () {
        assert.strictEqual( fizzBuzzOutput( 98 ), "98" );
    } );

} );

const port = require( '../fizzbuzz' ).port
const app = require( '../fizzbuzz' ).app
describe( "fizzbuzz api test", async () => {
    // * Arrow functions are better^^^ B)

    // ! Cleanup code
    let server = {}
    before( async () => {
        server = app.listen( port, () => {
            //console.log(`FizzBuzz listening on port ${port}`)
        } )
    } )

    after( async () => {
        await server.close()
    } )

    // * FizzBuzz API Req helper
    let getFizz = ( n ) => {
        return new Promise( async ( resolve, reject ) => {
            const { data } = await ( axios.get( `http://localhost:${port}/fizzbuzz/${n}` ).catch( err => { } ) )
            resolve( data.toString() )
        } )
    }

    it( "Should output Fizz for numbers %3=0 && %5!=0", async () => {
        assert.strictEqual( ( await getFizz( 6 ) ), "Fizz" );
    } );
    it( "Should output Buzz for numbers %3!=0j && %5==0", async () => {
        assert.strictEqual( ( await getFizz( 25 ) ), "Buzz" );
    } );
    it( "Should output FizzBuzz if divisible by 15", async () => {
        assert.strictEqual( ( await getFizz( 45 ) ), "FizzBuzz" );
    } );
    it( "Should output the number if divisible by neither 3 nor 5", async () => {
        assert.strictEqual( ( await getFizz( 98 ) ), "98" );
    } );
} )