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

const getRAM = async (req, res) => {
    try {
        const data = await si.memLayout();

        res.send(data);
    } catch(err) {

    }
}

const getDISKS = async (req, res) => {
    try {
        const data = await si.diskLayout();

        res.send(data);
    } catch(err) {

    }
}

const getGPU = async (req, res) => {
    try {
        const data = await si.graphics();

        res.send(data);
    } catch(err) {

    }
}

const getNET = async (req, res) => {
    try {
        const data = await si.networkInterfaces();

        res.send(data);
    } catch(err) {

    }
}

module.exports = {
    getOS,
    getCPU,
    getRAM,
    getDISKS,
    getGPU,
    getNET
};