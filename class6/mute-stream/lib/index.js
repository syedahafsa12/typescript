const Stream = require('stream')

class MuteStream extends Stream {
  #isTTY = null

  constructor (opts = {}) {
    super(opts)
    this.writable = this.readable = true
    this.muted = false
    this.on('pipe', this._onpipe)
    this.replace = opts.replace

    // For readline-type situations
    // This much at the start of a line being redrawn after a ctrl char
    // is seen (such as backspace) won't be redrawn as the replacement
    this._prompt = opts.prompt || null
    this._hadControl = false
  }

  #destSrc (ke