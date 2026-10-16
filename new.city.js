// new.city.js — ver citysieren Sachverhalt wie SimCity — alt weg, evo höher
export const NEW_CITY = {
  // 9x9 = ein Block
  block: '9x9 = 81 Felder',
  
  // Alt Gebäude
  alt: {
    bewohner: 4,        // 2x2
    höhe: 1,            // 1 Etage
    co2: 4,             // 4 CO2
    sagt: 'Ich bin alt, 4 wohnen, viel Fläche, wenig Höhe'
  },

  // Wegreißen + evo
  evo: {
    regel: 'alt weg → evo +1 → 9x bewohner + 3x höhe',
    warum: 'weil alle PCs zusammen größere Pyramide bauen als jeder allein',
    
    // SimCity Rechnung
    rechnung: (alt) => {
      const evoStufe = alt.evo || 0
      const faktor = 9 * (evoStufe + 1) // evo 0 = 9x, evo1 = 18x, evo2 = 27x...
      
      return {
        alt: `${alt.bewohner} Bewohner, ${alt.höhe} hoch`,
        neu: `${alt.bewohner * 9} Bewohner, ${alt.höhe * 3} hoch`,
        // 4 → 36 (4*9), 1 → 3
        // 36 → 324 (36*9), 3 → 9
        // 324 → 2916, 9 → 27 → WONDERIUS
        formel: `${alt.bewohner} * 9 = ${alt.bewohner*9} Bewohner, ${alt.höhe} * 3 = ${alt.höhe*3} Etagen`,
        pyramide: `${alt.bewohner*9} auf gleicher Fläche = ${(alt.bewohner*9)/4}x dichter = mehr M`,
        co2: `alt ${alt.bewohner} CO2 → neu ${alt.bewohner*9} CO2 → bio.js macht ${(alt.bewohner*9)*0.2} M`,
        blüht: alt.bewohner*9 >= 36 ? 'BLOCK BLÜHT' : 'noch klein'
      }
    }
  },

  // Beispiele
  beispiele: {
    '4 → 36': () => NEW_CITY.evo.rechnung({bewohner:4, höhe:1, evo:0}),
    // → 4 Bewohner alt weg → 36 neu, 1 Etage → 3 Etagen, 3.2x mehr Felder
    '36 → 324': () => NEW_CITY.evo.rechnung({bewohner:36, höhe:3, evo:1}),
    // → 36 alt weg → 324 neu, 3 → 9 Etagen
    '81 → HOME': () => NEW_CITY.evo.rechnung({bewohner:81, höhe:9, evo:2}),
    // → 81 alt weg → 729 neu, 9 → 27 Etagen → WONDERIUS
  },

  // Ver citysieren Sachverhalt = aus Sach mach Stadt
  verCitysieren: (sachverhalt) => {
    // Sachverhalt = z.B. 'scsi.raid.js ist bio drin'
    // → wird zu Stadt: 16 IDs = 16 Häuser, RAID5 = Deich
    return {
      sach: sachverhalt,
      stadt: `${sachverhalt} → 4 Häuser mit je 4 Leuten = 16 → abgerissen → 36*4=144 Leute in 12 Etagen → Pyramide`,
      regel: 'Jeder Sachverhalt wird 9x9 Feld, bei evo wird er höher'
    }
  }
}

console.log(NEW_CITY.beispiele['4 → 36']())
// { alt: '4 Bewohner, 1 hoch', neu: '36 Bewohner, 3 hoch', formel: '4 * 9 = 36 Bewohner, 1 * 3 = 3 Etagen', pyramide: '36 auf gleicher Fläche = 9x dichter = mehr M', ... }

console.log(NEW_CITY.verCitysieren('scsi.raid.js ist bio drin'))
// → 16 Häuser → 144 Leute in 12 Etagen
