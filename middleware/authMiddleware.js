const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    console.log("HElllllllllooooooooooooooooooooooooYour authorization header: ==> ", authHeader);

    if (!authHeader) {
      return res.status(401).send({
        success: false,
        message: "No Authorization header provided",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Token missing",
      });
    }

    const decode = JWT.verify(token, process.env.JWT_Secret);

    req.user = decode;
    next();

  } catch (err) {
    console.log("JWT Error:", err.message);

    return res.status(401).send({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};
