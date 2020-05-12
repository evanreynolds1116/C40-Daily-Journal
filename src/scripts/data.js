// Responsible for getting the data into this file


const API = {
  getJournalEntries () {
      return fetch("http://localhost:3000/entries")
          .then(response => response.json())
  },
  saveJournalEntry (newJournalEntry) {
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    })
    .then(response => response.json())
  },
  deleteJournalEntry (entryId) {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
      method: "DELETE"
    })
    .then(response => response.json())
  },
  editJournalEntry (id, obj) {
    return fetch(`http://localhost:3000/entries/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
      .then(response => response.json())
  }
}

export default API
