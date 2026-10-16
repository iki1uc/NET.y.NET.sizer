// nc.raw.js — roh — was ist und was soll
export const NC_RAW = {
  // WAS IST:
  name: 'nc.raw = new city raw = 9x9 roh',
  typ: 'RAM roh — 81 Felder leer',
  
  ist: {
    felder: 81,           // 9x9
    bewohner: 0,          // leer
    gebäude: 0,           // kein Gebäude
    co2: 0,               // kein CO2
    höhe: 0,              // flach
    sagt: 'Ich bin roh, ich bin nur Feld, ich warte auf Stadt'
  },

  // WAS SOLL:
  soll: {
    // nc.raw soll das sein, was nc.suite.js braucht um 4→36 zu machen
    // ohne nc.raw kann nc.suite.js nicht evo
    
    aufgabe: 'Rohes Feld für SimCity — alt weg → nc.raw → neu 36',
    
    regeln: [
      '1. nc.raw = 81x leer — kein Bewohner, kein Gebäude — nur IDs 0-80',
      '2. nc.raw wird von atem.js beatmet — 16s Zyklus',
      '3. nc.raw frisst 4 Bewohner alt → macht Platz → gibt 36 zurück via new.city.js',
      '4. nc.raw ist RAM — darf sterben — void.js 0B Pause',
      '5. nc.raw ist das was index.html zu allem RAM meint — alles ist RAM = alles ist nc.raw am Anfang'
    ],
    
    formel: 'nc.raw (81 leer) + atom.js (4 CO2) + bio.js (M) → nc.suite.js (36 Bewohner, 3 hoch)',
    
    beispiel: {
      start: 'nc.raw: 81 Felder leer',
      altWeg: 'altes Gebäude 4 Bewohner abgerissen → 4 Felder frei in nc.raw',
      neu: 'new.city.js baut auf nc.raw: 4 freie Felder → 36 Bewohner, 3 hoch',
      ende: 'nc.raw: 77 Felder leer (81-4), aber 36 Bewohner drin → 9x dichter'
    }
  },

  // CODE — so soll nc.raw.js aussehen
  code: {
    felder: Array(81).fill(null).map((_,id) => ({
      id,
      belegt: false,
      bewohner: 0,
      höhe: 0,
      co2: 0,
      typ: 'raw'
    })),
    
    freiMachen: (anzahl) => {
      // alt Gebäude mit 4 Bewohnern weg → 4 Felder frei
      return `${anzahl} Felder in nc.raw frei gemacht`
    },
    
    belegen: (startId, bewohner, höhe) => {
      // neu Gebäude mit 36 Bewohnern auf nc.raw
      return `${bewohner} Bewohner auf ${bewohner/9} Feldern, ${höhe} hoch — 9x dichter`
    }
  }
}

// So nutzt du nc.raw + nc.suite.js zusammen:
console.log(NC_RAW.ist)
// 81 leer

console.log(NC_RAW.soll.beispiel)
// start: 81 leer → alt weg 4 frei → neu 36 auf 4 Feldern → 77 leer aber 36 drin
