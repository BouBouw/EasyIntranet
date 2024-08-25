import axios from "axios";

const All = () => {
    return new Promise((resolve, reject) => {
        try {
            axios.get('http://localhost:4000/api/users/all')
            .then((result) => {
                resolve(result)
            })
        } catch(error) {
            reject(error);
        }
    })
}

const UsersController = {
    All
}

export default UsersController;