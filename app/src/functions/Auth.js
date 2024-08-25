import axios from "axios";

const Login = (email, password) => {
    return new Promise((resolve, reject) => {
        try {
            let current = null; 
            axios.post('http://localhost:4000/auth/login', {
                email, 
                password
            })
            .then((result) => {
                console.log(result)
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
    Login
};

export default Auth;