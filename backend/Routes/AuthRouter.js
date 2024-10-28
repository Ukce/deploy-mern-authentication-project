const router = require('express').Router();
const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

// router.post('/login', (req,res)=>{
//     res.send('login success');
// });

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);


module.exports = router;