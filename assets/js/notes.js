import Note from './note';

const NOTES = [{
    noteName: 'c4',
    frequency: 261.6
  },
  {
    noteName: 'd4',
    frequency: 293.7
  },
  {
    noteName: 'e4',
    frequency: 329.6
  }
];

/**
 * @param {string} noteName 
 * @returns {Note}
 */
export function getNote(noteName) {
  return NOTES.filter(name => noteName === name)[0];
}
