// Responsible for creating the journal entry HTML component into this file.

const component = {
  createJournalEntry (entries) {
    return `
        <div class="entries">
          <h2>${entries.concepts}</h2>
          <p>${entries.entry}</p>
          <p>${entries.date}</p>
          <p>Mood: ${entries.mood}</p>
          <button id="editEntry--${entries.id}">Edity Entry</button>
          <button id="deleteEntry--${entries.id}" class="deleteEntry">Delete Entry</button>
        </div>
    `
  }
}

export default component