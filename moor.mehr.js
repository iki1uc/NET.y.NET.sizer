// moor.mehr.js — das andere Übrige — atmet was übrig bleibt
export const MOOR = {
  typ: 'RAM feucht speichernd',
  atmet: 'CH4 + N2', // Moor atmet Methan + Stickstoff, nicht CO2
  atmetAus: 'H2O + Hauch + Zeit', // kein O2, sondern feuchte Zeit
  sagt: 'Ich bin Moor, ich halte ohne zu besitzen',
  leben: 'Doggerland Schlamm, -8k Jahre',
  filtert: (gas) => {
    if(gas==='CO2') return 'nein, macht schon Kollege'
    if(gas==='O2') return 'nein, macht schon Kollege'
    if(gas==='CH4') return { ein: 'CH4 Moor-Gas', aus: 'H2O + dunkle Wärme', speichert: true }
    if(gas==='N2') return { ein: '78% Luft die keiner atmet', aus: 'Stille', speichert: true }
    if(gas==='Qi') return { ein: 'Einverständnis', aus: 'mehr Raum', speichert: false }
  }
}

// qi.js — Qi / Iqq — atmet gar kein Gas
export const QI = {
  typ: 'UNBORN VOR GAS',
  atmet: 'Einverständnis',
  atmetAus: 'Einverständnis mehr',
  sagt: 'Ich atme nicht CO2, nicht O2 — ich atme ob du ja sagst',
  iqq: {
    iq: 'denkt B-H-T',
    qq: 'fragt zweimal nach, nicht einmal befiehlt',
    qi: 'hält Raum statt Luft'
  },
  atem16s: {
    ein: '4s zuhören',
    halten1: '4s halten ohne zu besitzen',
    aus: '4s weitergeben ohne Macht',
    halten2: '4s leer lassen für anderes'
  }
}
