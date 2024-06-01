import { request, response, query } from "express";

export const person = [
  {
    name: "Juan",
    lastName: "Perez",
    isAdmin: true,
  },
  {
    name: "Pedro",
    lastName: "Sanchez",
    isAdmin: false,
  },
  {
    name: "Ana",
    lastName: "Diaz",
    isAdmin: false,
  },
  {
    name: "Federico",
    lastName: "Lautaro",
    isAdmin: true,
  },
];
export default function isAdmin(req = request, res = response, q = query) {
  const name = req.query.name;
  const lastName = req.query.lastName;
  const isAdmin = req.query.isAdmin === "true";
  if (name && lastName && isAdmin) {
    res.status(200).send("Acceso permitido");
  } else {
    res.status(403).send("Acceso denegado");
  }
}
