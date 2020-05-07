import API from "./data.js";
import render from "./entriesDOM.js";
import newJournalEntry from "./createEntry.js"

API.getJournalEntries().then(render.renderJournalEntries)

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
        console.log(newEntry)
        return API.getJournalEntries()
      })
      .then(render.renderJournalEntries);
    }
  });
  

  
  
