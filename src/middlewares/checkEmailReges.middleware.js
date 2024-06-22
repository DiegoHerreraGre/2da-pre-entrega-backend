import { request, response } from "express";

export const checkEmailReges = async (req = request, res = response, next) => {
  const regex_email = new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$');
  try {
    let { email } = req.body;
    const email_not_ok = email.toLowerCase();
    if (!regex_email.test(email_not_ok)) {
      return res.status(400).json({ error: 'Invalid email format' });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).send('Error interno del servidor');
  }
}