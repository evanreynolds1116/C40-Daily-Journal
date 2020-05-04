// Responsible for modifying the DOM into this file.
import component from "./entryComponent.js";

const render = {
  renderJournalEntries (entries) {
    for (let i = 0; i < entries.length; i++) {
    let journalElement = document.querySelector(".entryLog");
    journalElement.innerHTML += component.createJournalEntry(entries[i]);
    }
  }
}

export default render