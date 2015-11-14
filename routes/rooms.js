'use strict';

let express = require('express');
let router = express.Router();

let Room = require('../models/room');
let Item = require('../models/item');

router.get('/', (req, res) => {

  // Room.find({}).populate('items').exec(function(err, rooms){
  //   res.status(err ? 400 : 200).send(err || rooms);
  // });

  Room.find({}, function(err, rooms){
    res.status(err ? 400 : 200).send(err || rooms);
  }).populate('items');

});


router.get('/:roomId/addItem/:itemId', function(req, res) {
  Room.findById(req.params.roomId, function(err, room){
    if(err) return res.status(400).send(err.message);
    Item.findById(req.params.itemId, function(err, item){
      if(err) return res.status(400).send(err.message);
      room.items.push(item._id);
      room.save(function(err){
        res.status(err ? 400 : 200).send(err ? 'item add failed' : 'item added');
      });
    });
  });
});

router.get('/:id', (req, res) => {
  Room.findById(req.params.id, function(err, room){
    res.status(err ? 400 : 200).send(err ? 'room not found' : room);
  });
});

router.put('/:id', (req, res) => {
  Room.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, room) {
    res.status(err ? 400 : 200).send(err ? 'room update failed' : room);
  });
});

router.delete('/:id', (req, res) => {
  Room.findByIdAndRemove(req.params.id, function(err, room) {
    res.status(err ? 400 : 200).send(err ? 'room delete failed' : 'room deleted.');
  });
});

router.post('/', (req, res) => {
  let room = new Room(req.body);
  room.save(err => {
    res.status(err ? 400 : 200).send(err || `${req.body.name} added.`);
  });
});

module.exports = router;
