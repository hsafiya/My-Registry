const router = require('express').Router();

router.get('/', (req, res) => {
    about.findAll({
        
    }) .then(dbAboutData => {
        const about = dbAboutData.map(post => post.get({ plain: true }))
        res.render('about', { about })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})



module.exports = router;