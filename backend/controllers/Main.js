const Dev = async (req, res) => {
    // console.log(req)

    const user = {
        name: 'Jonh',
        email: 'test@exemple.com',
        password: 'password'
    }

    res.send(user)
};

module.exports = {
    Dev,
};