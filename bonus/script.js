// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.




const app= new Vue({
    el: "#app",
    data: {
        listEmail:[],
    },
    created() {
        this.Email()
            
    },
    // aggiunta funzione
    methods: {
        Email: function(){
            for( let i=0; i < 10; i++){
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) =>{
                    console.log(response.data.response);
                    email= response.data.response;
                    this.listEmail.push(email);
                })
                .catch((error) =>{
                    console.log(error);
                }) 
            } 
        }
    },
})


