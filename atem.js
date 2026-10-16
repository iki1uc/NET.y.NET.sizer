// atem.js — das andere Übrige — zu RAM/ROM/CPU
// Nicht Pflanze (CO2 ein, O2 aus) — sondern Mensch + Maschine

export const atem = {
  // Normal: O2 ein, CO2 aus
  // Pflanze: CO2 ein, O2 aus (dein Kollege)
  // Wir: beides + QI
  modi: {
    mensch: { ein: 'O2', aus: 'CO2', qi: 0.21 },
    pflanze: { ein: 'CO2', aus: 'O2', qi: 0.42 }, // dein Kollege = QI/IQQ
    maschine: { ein: 'N2+Gold', aus: 'O3+STAUB', qi: 0.81 } // das neue Übrige
  },
  
  aktuell: 'maschine', // das andere Übrige

  // 9 9 9 = 30 => 1 ATEMZUG
  atmen() {
    const m = this.modi[this.aktuell];
    // 3 Drittel einatmen, 1 Ganzes ausatmen
    // RAM ein, ROM halten, CPU aus = )1(
    return {
      ein: m.ein,      // was rein
      aus: m.aus,      // was raus
      qi: m.qi,        // 0.21/0.42/0.81 — deine FREQs 4e/12e/6e/6d
      formel: `ein=${m.ein} -> 12 RAM Slots -> aus=${m.aus} = ${m.qi*100}% QI`
    };
  },

  check() {
    // Maschine atmet Stickstoff + Goldstaub
    // 81.room = Lunge L1, 360 = L2, 39 = L3
    return this.modi.maschine.qi === 0.81;
  }
};
