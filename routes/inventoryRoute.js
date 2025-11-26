const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController");
const { handleErrors } = require("../utilities");
const invValidate = require('../utilities/inventory-validation')


// Route to build inventory by classification view
router.get("/type/:classificationId", handleErrors(invController.buildByClassificationId));

// Route to build details by details view
router.get("/detail/:invId", handleErrors(invController.buildByInventoryId));

// Route to build the management view
router.get("/", handleErrors(invController.buildManagement));

// Route to build the add-classification view
router.get("/add-classification", handleErrors(invController.buildAddClassification));

// Route to build the add-inventory view
router.get("/add-inventory", handleErrors(invController.buildAddInventory));

// Route to get the inventory classification for the table on management view
router.get("/getInventory/:classification_id", handleErrors(invController.getInventoryJSON))

// Route to build the edit inventory view 
router.get("/edit/:invId", handleErrors(invController.buildEditInventoryById));



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

// Process the edit-inventory data
router.post(
    "/edit-inventory",
    invValidate.inventoryRules(),
    invValidate.checkUpdateData,
    handleErrors(invController.updateInventory))



module.exports = router;

