"use strict";

var ipidentlib = require('./lib/ipident'),
    ipident = ipidentlib.ipidentSingleton.getInstance();

module.exports = ipident;

