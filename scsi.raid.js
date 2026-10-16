// bio.js — so sollte es drin sein
export const BIO = {
  id: 'bio.js',
  typ: 'STAMM+BLATT Verbund — RAM+ROM',
  
  // das Ding aus co2.pflanze.m.js
  CO2_PFLANZE_M: {
    formel: 'CO2 + H2O + Licht → CH2O + O2 + M',
    bau: (pcs) => {
      const co2 = pcs.length
      const m = co2 * 0.2
      const etagen = Math.floor(Math.sqrt(co2))
      return `${etagen}x${etagen}x${m.toFixed(1)} = ${(etagen*etagen*m).toFixed(1)} Felder — ${co2>=81?'HOME BLÜHT':'noch '+(81-co2)+' bis Blüte'}`
    }
  },

  // Anschluss an deine anderen
  atmetMit: ['ether.js','moor.mehr.js','leben.atmet.html','lunge.js'],
  lebtMit: ['zelle.js','unborn.js','leben.mehr.html'],
  
  sagt: 'Ich bin bio.js — ich mache aus vielen CO2 ein M'
}
