import API from "./data.js";
import render from "./entriesDOM.js";
import newJournalEntry from "./createEntry.js"

// API.getJournalEntries().then(render.renderJournalEntries)

document.querySelector("#submit").addEventListener("click", (event) => {
  event.preventDefault()
  if (
    document.querySelector("#journalDate").value === "" || 
    document.querySelector("#conceptsCovered").value === "" || 
    document.querySelector("#journalEntry").value === "" ||
    document.querySelector("#mood").value === ""
    ) { 
      alert("All fields must be completed to record journal entry")
    } else {
      let dateInput = document.querySelector("#journalDate").value;
      let conceptsInput = document.querySelector("#conceptsCovered").value;
      let entryInput = document.querySelector("#journalEntry").value;
      let moodInput = document.querySelector("#mood").value; 
      let createNewJournalEntry = newJournalEntry(dateInput, conceptsInput, entryInput, moodInput)
      API.saveJournalEntry(createNewJournalEntry)
      .then( (newEntry) => {
        return API.getJournalEntries()
      })
      .then(render.renderJournalEntries);
    }
  });
  
const radioButton = document.getElementsByName("radio-button")
radioButton.forEach(button => {
  button.addEventListener("click", event => {
    const mood = event.target.value
    console.log(mood)
    API.getJournalEntries()
    .then(response => {
      const filteredResults = response.filter(entry => entry.mood == mood)
      render.renderJournalEntries(filteredResults.reverse())
    })
  })
})

const entryLog = document.querySelector(".entryLog")

const deleteEntry = {
  registerDeleteListener () {
    entryLog.addEventListener("click", event => {
      if (event.target.id.startsWith("deleteEntry--")) {
        const entryToDelete = event.target.id.split("--")[1]
        API.deleteJournalEntry(entryToDelete)
          .then(API.getJournalEntries)
          .then(render.renderJournalEntries)
      }
    })
  }
}

deleteEntry.registerDeleteListener()
API.getJournalEntries().then(render.renderJournalEntries)
