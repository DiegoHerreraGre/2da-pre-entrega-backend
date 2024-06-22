import {Router} from "express";
import {clientsModel} from "../models/client.model.js";

const router = Router();

router.route("/").get(async (req, res) => {
  try {
    const clients = await clientsModel.find();

    res.status(200).json({status: "success", payload: clients});
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({status: "Error", msg: "Internal server error"});
  }
});

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const {id} = req.params;
      const client = await clientsModel.findById(id);
      if (!client)
        return res
          .status(404)
          .json({status: "Error", msg: "Client not found"});

      res.status(200).json({status: "success", payload: client});
    } catch (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).json({status: "Error", msg: "Internal server error"});
    }
  })
  .put(async (req, res) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const client = await clientsModel.findByIdAndUpdate(id, body);
      const clientUpdate = await client.findById(id);

      res.json({status: "success", payload: clientUpdate});
    } catch (error) {
      console.error(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const {id} = req.params;
      const clientDelete = await clientsModel.findById(id);
      if (!clientDelete)
        return res
          .status(404)
          .json({status: "Error", msg: "Client not found"});

      res.json({status: "success", payload: "Cliente eliminado con éxito"});
    } catch (error) {
      console.error(error);
    }
  });

export default router;
