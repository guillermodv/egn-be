const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.get("x-auth");
    // TODO: check this token validity
    //const result = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const result = token === process.env.JWT_SECRET_KEY;

    if (result) {
      req.session = result;
      next();
    } else {
      res.status(401).send();
    }
  } catch (e) {
    console.log({ e });
    res.status(400).send();
  }
};

module.exports = authenticate;
