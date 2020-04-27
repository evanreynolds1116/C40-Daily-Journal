// Responsible for creating the journal entry HTML component into this file.

const component = {
  createJournalEntry (entries) {
    return `
        <div>
          <h1>${entries.concepts}</h1>
          <p>${entries.entry}</p>
          <p>${entries.date}</p>
          <p>Mood: ${entries.mood}</p>
        </div>
    `
  }
}