const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new Schema({
  note_title: {
    type: String,
    required: true,
    unique: true,
  },
  note_description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["HIGH", "LOW", "MEDIUM"],
    default: "MEDIUM",
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
  date_updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", NoteSchema);


// sample data:
// {
//   "note_title": "My First Note",
//   "note_description": "This is my first note",
//   "priority": "HIGH"
// }

// {
//   "note_title": "My Second Note",
//   "note_description": "This is my second note",
//   "priority": "LOW"
// }

// {
//   "note_title": "My Third Note",
//   "note_description": "This is my third note",
//   "priority": "MEDIUM",
//   "date_added": "2021-07-01",
//   "date_updated": "2021-07-05"
// }
