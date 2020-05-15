import API from "./data.js";
import render from "./entriesDOM.js";
import newJournalEntry from "./createEntry.js"

document.querySelector("#submit").addEventListener("click", (event) => {
  event.preventDefault()

  const hiddenEntryId = document.querySelector("#entryId").value
  if (hiddenEntryId !== "") {
    editEntry(hiddenEntryId)
  } else if (
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
 
// Adds event listener to Delete Entry button
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

// Adds event listener to Edit Entry button
entryLog.addEventListener("click", event => {
  if (event.target.id.startsWith("editEntry--")) {
    const entryIdToEdit = event.target.id.split("--")[1]
    updateFormFields(entryIdToEdit)
    console.log("ENTRY ID: ", entryIdToEdit)
  }
})

const updateFormFields = entryId => {

  let hiddenEntryId = document.querySelector("#entryId")
  let dateInput = document.querySelector("#journalDate")
  let conceptsInput = document.querySelector("#conceptsCovered")
  let entryInput = document.querySelector("#journalEntry")
  let moodInput = document.querySelector("#mood")

  fetch(`http://localhost:3000/entries/${entryId}`)
    .then(response => response.json())
    .then(entry => {
      hiddenEntryId.value = entry.id
      dateInput.value = entry.date
      conceptsInput.value = entry.concepts
      entryInput.value = entry.entry
      moodInput.value = entry.mood
    })
}

const editEntry = (id) => {
  const updatedObject = {
    date: document.querySelector("#journalDate").value,
    concepts: document.querySelector("#conceptsCovered").value,
    entry: document.querySelector("#journalEntry").value,
    mood: document.querySelector("#mood").value
  };

  API.editJournalEntry(id, updatedObject).then(() => {
    document.querySelector("#entryId").value = ""
    
    API.getJournalEntries().then(render.renderJournalEntries)
  })
}

let searchInput = document.querySelector("#search")
searchInput.addEventListener("keypress", event => {
  let searchTerm = event.target.value.toLowerCase();
  if (event.keyCode == 13 && searchTerm != "") {
    entryLog.innerHTML = ""
    API.getJournalEntries().then( eachEntry => {
      let allEntries = [];
      eachEntry.forEach( entry => {
        for (const value of Object.values(entry)) {
          if (value.toString().toLowerCase().includes(searchTerm)) {
            allEntries.push(entry)
            break;
          }
        }
      })
      console.log(allEntries)
      render.renderJournalEntries(allEntries)
    })
  }
})

// if (event.keyCode == 13 && searchTerm != "")
// API.getJournalEntries().then( eachEntry => {
//   eachEntry.forEach( entry => {
//     for (const value of Object.values(entry)) {
      
