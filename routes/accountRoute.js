const express = require("express")
const router = new express.Router() 
const controller = require("../controllers/accountController");
const utilities = require("../utilities");
const regValidate = require('../utilities/account-validation')

// router.get("/login", handleErrors(accountController.buildLogin));

router.get("/login", utilities.handleErrors(controller.buildLogin));

router.get("/register", utilities.handleErrors(controller.buildRegister));

// router.post('/register', utilities.handleErrors(controller.registerAccount))

// Process the registration data
router.post(
    "/register",
    regValidate.registrationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(controller.registerAccount)
)

module.exports = router;
