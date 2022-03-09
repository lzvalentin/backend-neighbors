const router = require('express').Router();


const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const petVacRoutes = require('./petVacRoutes');
const hoaRoutes = require('./hoaRoutes');
const commMgrRoutes = require('./commMgrRoutes');
const commentRoutes = require('./commentRoutes');

// TODO Needs fix
// const postRoutes = require('./postRoutes');




router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/petVac', petVacRoutes);
router.use('/hoa', hoaRoutes);
router.use('/commMgr', commMgrRoutes);
router.use('/comments', commentRoutes);


// router.use('/posts', postRoutes);




module.exports = router;
