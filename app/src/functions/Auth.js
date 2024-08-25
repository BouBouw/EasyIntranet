import axios from "axios";

const Controller = () => {
    return new Promise((resolve, reject) => {
        try {
            axios.get('http://localhost:4000')
            .then((result) => {
                resolve(result)
            })
        } catch(error) {

        }
    })
}

const Login = (email, password) => {
    return new Promise((resolve, reject) => {
        try {
            let current = null; 
            axios.post('http://localhost:4000/auth/login', {
                email, 
                password
            })
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                console.error("Error fetching data:", error.message);
                reject(error);
            });
        } catch (err) {
            reject(err);
        }
    });
}

const Auth = {
    Controller,
    Login
};

export default Auth;