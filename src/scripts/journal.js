import API from "./data.js";
import render from "./entriesDOM.js";

API.getJournalEntries().then(render.renderJournalEntries)



