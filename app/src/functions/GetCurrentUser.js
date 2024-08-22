import axios from "axios";

const GetCurrentUser = () => {
    return new Promise((resolve, reject) => {
        try {
            let current = null; 
            if (!current) {
                axios.get('http://localhost:4000/api')
                    .then((result) => {
                        current = result.data;
                        resolve(current);
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error.message);
                        reject(error);
                    });
            } else {
                resolve(current);
            }
        } catch (err) {
            reject(err);
        }
    });
}

export default GetCurrentUser;