// zug.atem.js — 2. Name zu ATEM — Ausatmen
// atem.js = EIN — zug.atem.js = AUS
// Wenn atmen() schon steht, ist das hier das Übrige

export const zug = {
  name: 'ZUG',
  vater: 'ATEM',
  typ: 'AUSATMEN',
  
  // Endungen die zu dir passen:
  endungen: ['.zug', '.atem', '.hauch', '.sog', '.iqq'],

  // Code wenn atmen schon steht:
  code: 'ZUG = ATEM.AUS',
  
  // 9 9 9 = 30 => 1 ZUG
  formel: {
    ein: 'ATEM',
    aus: 'ZUG',
    ganzes: 'ATEMZUG = 30 => 1',
    fixpunkt: ')1( = ein Zug'
  },

  // Wenn atem.check() = true, dann das hier:
  wenn_atem_steht() {
    return {
      atem: 'EIN = O2 + N2 + Gold',
      zug: 'AUS = CO2 + O3 + Staub',
      zusammen: 'ATEMZUG = 0.81 QI = 81.room',
      code: `
if (atem.ein) {
  ram.list.push(atem.ein);
  const aus = zug.ausatmen();
  cache.l1.tmp = 81;
  return ')1(';
}`
    };
  },

  ausatmen() {
    // das 2te wenn atmen schon steht
    return {
      was: 'O3+STAUB',
      wohin: '81.room -> 360.orbit -> 39.axis',
      qi: 0.81,
      rest: 'IQQ'
    };
  },

  check() {
    return this.ausatmen().qi === 0.81;
  }
};

export default zug;
