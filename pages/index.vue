<template>
  <section class="container">
    <button 
      type="button" 
      class="button next-note" 
      @click="playNextNote">Next</button>
  </section>
</template>

<script>
import Piano from "../assets/js/piano";
import { getNote } from "../assets/js/notes";
import Note from "../assets/js/note";

const audioCtx = new window.AudioContext();
const oscillator = audioCtx.createOscillator();

const notes = initNotes("Für Elise");
const piano = initPiano();

let noteIndex = 0;

export default {
  methods: {
    playNextNotes() {

      
      noteIndex++;
    }
  }
};

function initPiano() {
  const p = new Piano();

  return p;
}

/**
 * @param {string} songName
 * @returns {Note[][]}
 */
function initNotes(songName) {
  let notes = [];

  switch (songName) {
    case "Für Elise":
    default:
      notes = [[getNote("c4")], [getNote("c4"), getNote("e4")]];
      break;
  }

  return notes;
}

/**
 * @param {Note[]} notes
 */
function playNotes(notes) {
  notes.forEach(playNote);
}

/** 
 * @param {Note} note
 */
function playNote(note) {
  oscillator.type = 'triangle';
  oscillator.frequency.value = note.frequency;
  oscillator.start(0);

  oscillator.connect(audioCtx.destination);
}
</script>

<style>
.container {
  align-items: center;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.button {
  background-color: transparent;
  border: 3px solid darkorange;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
}

.button:hover,
.button:focus {
  background-color: darkorange;
  color: white;
  outline: none;
}

.next-note::after {
  content: "🎶";
  margin-left: 0.4em;
}
</style>
