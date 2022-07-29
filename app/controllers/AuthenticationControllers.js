const User = require("../models/user");

const login = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const userInputData = req.body;

    User.findOne(userInputData)
        .then((user) => {
            if (user === null) {
                const data = {
                    message: "Sorry user is not here!",
                }

                res.status(401);
                res.send(data);
            } else {
                const data = {
                    user,
                }

                res.status(200);
                res.send(data);
            }
        })
        .catch((error) => {
            res.status(500);
            res.send(error);
        })
}

const register = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const userInputData = req.body;

    const user = new User(userInputData);
    user.save()
        .then((user) => {
            const data = {
                user,
            }

            res.status(200);
            res.send(data);
        })
        .catch((error) => {
            res.status(500);
            res.send(error);
        })
}

module.exports = {
    login,
    register,
}