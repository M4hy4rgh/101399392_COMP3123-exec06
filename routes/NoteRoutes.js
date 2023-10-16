const noteModel = require("../models/Notes.js");
const express = require("express");
const app = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
// http://localhost:8081/notes
app.post("/notes", async (req, res) => {
  // Validate request
  if (!req.body.note_title || !req.body.note_description) {
    return res.status(400).send({
      message: "Note title and description are required fields",
    });
  }
  //TODO - Write your code here to save the note
  try {
    const note = await noteModel.create(req.body);
    res.status(201).json({
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
  //TODO - Write your code here to returns all note
  try {
    const notes = await noteModel.find({});

    if (!notes) {
      res.status(404).json({
        message: "No notes found",
        result_count: 0,
        data: null,
      });
    } else {
      res.status(200).json({
        message: "Notes retrieved successfully",
        result_count: notes.length,
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
  //TODO - Write your code here to delete the note using noteid
  try {
    const note = await noteModel.findByIdAndDelete(req.params.noteId);
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

module.exports = app;
