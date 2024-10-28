
const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

// router.post('/login', (req,res)=>{
//     res.send('login success');
// });

router.get('/', ensureAuthenticated, (req, res) =>{
    // console.log('--logged in user detail---', req.user);
    res.status(200).json([
        {
            name:"mobile",
            price: 10000
        },
        {
            name:"tv",
            price: 20000
        }
    ])
});


module.exports = router;