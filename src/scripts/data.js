// Responsible for getting the data into this file

const API = {
  getJournalEntries () {
      return fetch("http://localhost:3000/entries")
          .then(response => response.json())
  }
}

