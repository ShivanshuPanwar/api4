var express = require('express');
var router=express.Router();
var book = require('./bookmodel');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookdb');

router.get('/', function(req,res) {
    book.find().exec(function(err,result) {
        res.status(200).json(result);
    });
    
});

router.get('/:id', function(req,res) {
    book.findById(req.params.id).exec(function(err,result) {
        res.status(200).json(result);
    });
});



router.post('/', function(req,res) {
    var bk = new book(req.body);
    bk.save(function(err,result) {
        res.status(201).json(result);
    });

    
});

router.put('/:id', function(req,res) {
    book.findByIdAndUpdate(req.params.id,req.body).exec(function(err,result) {
        book.findById(req.params.id).exec(function(err,result) {
            res.status(200).json(result);
        });

    });
});

router.delete('/:id', function(req,res) {
    book.findByIdAndRemove(req.params.id).exec(function(err,result) {
        book.find().exec(function(err,result) {
            res.status(200).json(result);
        });

    });
});

module.exports = router;