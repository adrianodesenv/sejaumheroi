const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

const SessionController = require("./controllers/SessionController");

const router = express.Router();

router.get("/ongs", OngController.index);
router.post("/ongs", OngController.create);

router.post("/sessions", SessionController.create);

router.get("/profiles", ProfileController.index);

router.get("/incidents", IncidentController.index);
router.post("/incidents", IncidentController.create);
router.delete("/incidents/:id", IncidentController.delete);

module.exports = router;
