import axios from "axios";

const CurrentOS = () => {
    return new Promise((resolve, reject) => {
        try {
            let current = null; 
            axios.get('http://localhost:4000/api/software/os')
            .then((result) => {
                current = result.data;
                resolve(current);
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

const CurrentCPU = () => {
    return new Promise((resolve, reject) => {
        try {
            let current = null; 
            axios.get('http://localhost:4000/api/software/cpu')
            .then((result) => {
                current = result.data;
                resolve(current);
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

const CurrentSoftware = {
    CurrentOS,
    CurrentCPU
}

export default CurrentSoftware;