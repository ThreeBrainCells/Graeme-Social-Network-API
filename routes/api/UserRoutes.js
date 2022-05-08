const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    UpdateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(UpdateUser).delete(deleteUser);

router.route('/:userId/friends').post(addFriend);

router.route('/:userId/friends/:friendId').delete(deleteFriend)

module.exports = router