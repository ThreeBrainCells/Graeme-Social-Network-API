const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models')

module.exports = {

    //get all users
    getUsers(req, res) {
        User.find()
        .then(async (users) => {
            return res.json(users)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    //get a single user by id, as well as thought and friend data
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
    //post new user
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
    //update user by id
    UpdateUser(req, res) {
        User.findOneandUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((user) =>
            !user
                ? res.status(404).json({message: 'No user found with this ID!'})
                : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },
    //delete user by id (and possibly associated thoughts)
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID!' })
              : Thought.deleteMany({ _id: { $in: user.thoughts } })
          )
          .then(() => res.json({ message: 'User and associated apps deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
    
      //add friend to friends list
    addFriend(req, res){
      User.findOneAndUpdate(
        {_id: req.params.userId},
        { $addToSet: {friends: req.friendId}},
        {runValidators: true, new: true}
        )
        .then((user)=>
        !user
          ? res.status(404).json({message: 'No user with that ID!'})
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err))
    },
      //delete friend from friends list
    deleteFriend(req,res){
      User.findOneAndUpdate(
        {_id: req.params.userId},
        { $pull: { friends: {friendId: req.params.friendId}}},
        {runValidators: true, new: true}
      )
        .then((user)=>
          !user
            ? res.status(404).json({message: 'No user with that ID!'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    }
}