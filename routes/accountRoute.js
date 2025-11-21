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

// // Process the login attempt
// router.post(
//     "/login",
//     (req, res) => {
//         res.status(200).send('login process')
//   }
// )

router.post(
    "/login",
    regValidate.loginRules(),
    regValidate.checkLoginData,
    utilities.handleErrors(controller.accountLogin)
)

module.exports = router;
