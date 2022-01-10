const app= new Vue({
    el: "#app",
    data: {

    },
    created() {
        
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) =>{
            console.log(response.data.response);
        })
        .catch((error) =>{
            console.log(error);
        })
        
    },




})