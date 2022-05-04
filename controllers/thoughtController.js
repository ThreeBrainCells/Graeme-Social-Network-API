const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models')

module.exports = {

    //get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    //get a single thought by id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId})
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },
    //post a new thought then push the new id into associated user field
    createThought(req, res) {
        thought.create(req.body)
          .then((thought) => {
            return User.findOneAndUpdate(
              { _id: req.body.userId },
              { $addToSet: { thoughts: thought._id } },
              { new: true }
            );
          })
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'Thought created, but found no user with that ID',
                })
              : res.json('Added new thought 🎉')
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
    //update a thought by id
      updateThought(req, res) {
          Thought.findOneAndUpdate(
              {_id: req.params.thoughtId},
              { $set: req.body},
              {runValidators: true, new: true}
          )
          .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json(thought)
        )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
      },
    //delete thought by id
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : User.findOneAndUpdate(
                  { thoughts: req.params.thoughtId },
                  { $pull: { thoughts: req.params.thoughtId } },
                  { new: true }
                )
          )
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'Thought created but no user with this id!',
                })
              : res.json({ message: 'Thought successfully deleted!' })
          )
          .catch((err) => res.status(500).json(err));
      },
    //post reaction
    addReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
    //delete reaction by id
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
}