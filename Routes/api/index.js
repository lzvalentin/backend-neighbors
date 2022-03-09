const router = require('express').Router();
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const petVacRoutes = require('./petVacRoutes');
const hoaRoutes = require('./hoaRoutes');
const commMgrRoutes = require('./commMgrRoutes');

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/petVac', petVacRoutes);
router.use('/hoa', hoaRoutes);
router.use('/commMgr', commMgrRoutes);

module.exports = router;
