const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
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
            get: (date) => timeSince(date)
          }
    },
    {
        timestamps: true,
        toJSON: {
            getters: true,
        }
    }
)

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
        reactions: [{type:Schema.Types.ObjectId, ref: 'reaction'}]
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

const Reactions = model('reaction', reactionSchema)

const Thought = model('thought', thoughtSchema);

module.exports = {Thought, Reactions};