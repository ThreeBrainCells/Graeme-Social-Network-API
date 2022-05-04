const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;