
const app = Vue.createApp({
    // template: `
    //     <h1> hola Mundo </h1>
    //     <p> Desde app.js </p>
    // `
    data() {
        return {
            quote: "I'm Batama",
            author: "Bruce Wayne",
        }
    },
    methods: {
        changeQuote() {
            console.log( 'Hola mundo' )
            this.author = "Jesús Ugaz"
            this.capitalize()
           
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
            
    }
})

app.mount('#myApp')