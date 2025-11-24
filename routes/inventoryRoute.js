const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController");
const { handleErrors } = require("../utilities");
const invValidate = require('../utilities/inventory-validation')


// Route to build inventory by classification view
router.get("/type/:classificationId", handleErrors(invController.buildByClassificationId));

// Route to build details by details view
router.get("/detail/:invId", handleErrors(invController.buildByInventoryId));

router.get("/", handleErrors(invController.buildManagement));

router.get("/add-classification", handleErrors(invController.buildAddClassification));

router.get("/add-inventory", handleErrors(invController.buildAddInventory));



// Process the add-classification data
router.post(
    "/add-classification",
    invValidate.classificationRules(),
    invValidate.checkClassificationData,
    handleErrors(invController.AddClassificationName)
)

// Process the add-inventory data
router.post(
    "/add-inventory",
    invValidate.inventoryRules(),
    invValidate.checkInventoryData,
    handleErrors(invController.AddInventory)
)


module.exports = router;

