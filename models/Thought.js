const { Schema, Types, model } = require('mongoose');


const Reaction = require('./Reaction')
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
        reactions: [Reaction]
    },
    {
        toJSON: {
            getters: true,
        }
    }
);



const Thought = model('thought', thoughtSchema);

module.exports = {Thought};