const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new Schema({
    note_Title: {
        type: String,
        required: true,
        unique: true
    },
    note_Description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM'],
        default: 'MEDIUM'
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Note', NoteSchema);

// {
//     "note_Title": "test",
//     "note_Description": "test",
//     "priority": "HIGH"
// }
//
// {
//     "note_Title": "test",
//     "note_Description": "test",
//     "priority": "HIGH",
//      "dateAdded": "2021-03-25T18:00:00.000Z",
//      "dateUpdated": "2021-03-25T18:00:00.000Z"
// }
//

