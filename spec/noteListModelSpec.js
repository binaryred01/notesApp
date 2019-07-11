console.log('Does NoteList exist?')

function testNoteListModel() {
  var noteArray = new NoteList()
  assert.isTrue(noteArray.returnArray().length === 1)
};

testNoteListModel();
