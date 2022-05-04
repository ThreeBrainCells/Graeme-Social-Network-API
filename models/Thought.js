const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.types.ObjectId,
            default: () => new types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username:{
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //getter method to format timestamp on query
          }
    }
)

const Thoughts = model('thought', thoughtSchema);

module.exports = Thoughts;