// Responsible for modifying the DOM into this file.

const render = {
  renderJournalEntries (entries) {
    for (let i = 0; i < entries.length; i++) {
    let journalElement = document.querySelector(".entryLog");
    journalElement.innerHTML += component.createJournalEntry(entries[i]);
    }
  }
}