const winston = require("winston");
const { loginServiceInstance } = require("../../services");

const Logger = winston.loggers.get("logger");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const login = await loginServiceInstance.getUser({ username, password });
    if(user && user.password === password){
      return res.json({ message: "Login successful", token: "auth_token" });
    }
    return res.status(401).json({ message: "unauthorised" });
  } catch (err) {
    Logger.error(err);
    return res.status(400).json({ error: { message: err.message } });
  }
};
