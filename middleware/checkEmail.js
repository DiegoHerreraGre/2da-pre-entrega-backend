import express from "express";
export const middlewareEmail = express();

middlewareEmail.use((req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email) {
    res.status(400).send("Email is required");
  } else if (!emailRegex.test(email)) {
    res.status(400).send("Invalid email format");
  } else {
    console.log("Email seems ok");
    next();
  }
});
