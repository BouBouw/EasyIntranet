const si = require('systeminformation');

const getOS = async (req, res) => {
    try {
        const data = await si.osInfo();

        res.send(data);
    } catch(err) {

    }
}

const getCPU = async (req, res) => {
    try {
        const data = await si.cpu();

        res.send(data);
    } catch(err) {

    }
}

module.exports = {
    getOS,
    getCPU
};