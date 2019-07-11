(function(exports) {
  function NoteList() {
    this.array = [];
  };

NoteList.prototype.returnArray = function() {
  return this.array
}

  exports.NoteList = NoteList;
})(this);
