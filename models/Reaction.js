const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Schema.Types.ObjectId(),
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

module.exports = reactionSchema