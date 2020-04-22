/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntries = [
  {
    date: "04/15/2020",
    concepts: "",
    entry: "Presented group projects",
    mood: "Happy" 
  },
  {
    date: "04/16/2020",
    concepts: "JavaScript",
    entry: "Basic JavaScript",
    mood: "Happy"
  },
  {
    date: "04/17/2020",
    concepts: "JavaScript",
    entry: "BRAIN FRIED",
    mood: "Blegh"
  }
]

const createJournalEntryComponent = (journalEntry) => {
  return `
      <div>
        <h1>${journalEntry.concepts}</h1>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.date}</p>
        <p>Mood: ${journalEntry.mood}</p>
      </div>
  `
}

const renderJournalEntries = (entries) => {
  for (let i = 0; i < entries.length; i++) {
    let journalElement = document.querySelector(".entryLog")
    journalElement.innerHTML += createJournalEntryComponent(entries[i])
  }
}
renderJournalEntries(journalEntries)
