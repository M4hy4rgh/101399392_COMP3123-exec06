const noteModel = require("../models/Notes.js");
const express = require("express");
const app = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
// http://localhost:8081/notes
app.post("/notes", async (req, res) => {
  // Validate request
    if (!req.body.content) {
        return res.status(400).send({
        message: "Note content can not be empty",
        });
    }
    //TODO - Write your code here to save the note
    try {
        const note = new noteModel(req.body);
        await note.save();
        res.status(200).json({
            message: "Note saved successfully",
            data: note,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error while saving note",
            data: error.message,
        });
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get("/notes", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to returns all note
  try {
    const notes = await noteModel.find();

    if (!notes) {
      res.status(404).json({
        message: "No notes found",
        data: null,
      });
    } else {
      res.status(200).json({
        message: "Notes retrieved successfully",
        data: notes,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error while retrieving notes",
      data: error.message,
    });
  }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get("/notes/:noteId", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to return onlt one note using noteid
  try {
    const note = await noteModel.findById(req.params.noteId);

    if (!note) {
      res.status(404).json({
        message: "No note found",
        data: null,
      });
    } else {
      res.status(200).json({
        message: "Note retrieved successfully",
        data: note,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error while retrieving note",
      data: error.message,
    });
  }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put("/notes/:noteId", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to update the note using noteid
  try {
    const note = await noteModel.findByIdAndUpdate(
      req.params.noteId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!note) {
      res.status(404).json({
        message: "No note found",
        data: null,
      });
    } else {
      res.status(200).json({
        message: "Note updated successfully",
        data: note,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error while updating note",
      data: error.message,
    });
  }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete("/notes/:noteId", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to delete the note using noteid
  try {
    const empID = req.params.noteId;
    const note = await noteModel.findByIdAndDelete(empID);
    if (!note) {
      res.status(404).json({
        message: "No note found",
        data: null,
      });
    } else {
      res.status(200).json({
        message: "Note deleted successfully",
        data: note,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error while deleting note",
      data: error.message,
    });
  }
});
