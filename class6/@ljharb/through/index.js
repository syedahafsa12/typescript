'use strict';

var Stream = require('stream').Stream;
var callBind = require('call-bind');

// create a readable writable stream.

function through(write, end, opts) {
	var writeBound = callBind(write || function (data) { this.queue(data); });
	var endBound = callBind(end || function () { this.queue(null); });

	var ended = false;
	var destroyed = false;
	var buffer = [];
	var _ended = false;
	var stream = new Stream();
	stream.readable = true;
	stream.writable = true;
	stream.paused = false;

	//  stream.autoPause   = !(opts