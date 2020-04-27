/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

API.getJournalEntries().then(render.renderJournalEntries)




// OLD STUFF
// const createJournalEntryComponent = (entries) => {
//   return `
//       <div>
//         <h1>${entries.concepts}</h1>
//         <p>${entries.entry}</p>
//         <p>${entries.date}</p>
//         <p>Mood: ${entries.mood}</p>
//       </div>
//   `
// }

// function renderJournalEntries (entries) {
//   document.querySelector(".entryLog").innerHTML += entries
// }

// fetch("http://localhost:3000/entries") // Fetch from the API
// .then(entries => entries.json())  // Parse as JSON
// .then(parsedEntries => {
//   // What should happen when we finally have the array?
//   parsedEntries.forEach(entries => {
//     const entryToHTML = createJournalEntryComponent(entries)
//     renderJournalEntries(entryToHTML)
//   });
//   console.table(parsedEntries)
// })

// NOT NEEDED ANYMORE ???
// const renderJournalEntries = (entries) => {
//   for (let i = 0; i < entries.length; i++) {
//     let journalElement = document.querySelector(".entryLog")
//     journalElement.innerHTML += createJournalEntryComponent(entries[i])
//   }
// }