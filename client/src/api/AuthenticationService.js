import axios from "axios";



class AuthenticationService{

    constructor(){
        this.serviceUrl = process.env.SERVER_URL + "/auth";
    }

    login(username, password){
        axios.post(this.serviceUrl + "/login", {
            username: username,
            password: password
        })
        .then( (response) => {
            console.log(data);
            if (response.data.accessToken){
                localStorage.setItem("token", JSON.stringify(response.data));
            }
        })
        .catch( error => {
            console.log(error);
        });
    }

    register(payload){
        axios.post(this.serviceUrl + "/register", payload)
            .then()
            .catch( error => {});
    }

    logout(){

    }
}

export default AuthenticationService;