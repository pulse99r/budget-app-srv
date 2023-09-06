const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/Transactions");

// HOME
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// INDEX
transactions.get("/transactions", (req, res) => {
  res.json(transactionsArray);
});

// SHOW
transactions.get("/:arrayIndex", (req, res) => {
  console.log(req.params)
  if (transactionsArray[req.params.arrayIndex]) {
    res.json(transactionsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// CREATE
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

// DELETE
transactions.delete("/:indexArray", (req, res) => {
  if (transactionsArray[req.params.indexArray]) {
    const deletedTransaction = transactionsArray.splice(req.params.indexArray, 1);
    res.status(200).json(deletedTransaction);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// UPDATE
transactions.put("/:indexArray", (req, res) => {
  if (transactionsArray[req.params.indexArray]) {
    const deletedTransaction = transactionsArray.splice(req.params.indexArray, 1);
    res.status(200).json(deletedTransaction);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});


module.exports = transactions;