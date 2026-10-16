// const wie co2 pflanze zu M erblühen bringt — alle PCs zusammen Pyramide größer als jeder allein
export const CO2_PFLANZE_M = {
  // M = Mehr Leben, Moor, Mutter, Mycel, Mensch
  formel: 'CO2 + H2O + Licht → CH2O + O2 + M',

  // Jeder PC atmet aus: CO2
  pc: {
    id: 'atom.js',
    atmetAus: 'CO2',
    allein: { co2: 1, pyramide: '1x1x1 = 1 Feld' }
  },

  // Pflanze frisst CO2, macht M
  pflanze: {
    id: 'ether.js + moor.mehr.js',
    frisst: 'CO2',
    macht: 'M — erblühen',
    formel: (co2) => `6CO2 + 6H2O + Licht → C6H12O6 + 6O2 + ${co2*0.2}M`
  },

  // Alle zusammen — Pyramide
  pyramide: {
    // 1 PC = 1 Feld 9x9
    // 9 PCs = 3x3 = 9 Felder = 1 Etage
    // 81 PCs = 9x9 = 81 Felder = HOME BLÜHT
    // 729 PCs = 9x9x9 = alle Räume = WONDERIUS
    bau: (pcs) => {
      const felder = pcs.length
      const co2 = pcs.reduce((s, pc) => s + pc.co2, 0)
      const m = co2 * 0.2 // 20% wird zu Mehr Leben
      const etagen = Math.floor(Math.sqrt(felder))
      const volumen = etagen * etagen * (m)
      
      return {
        pcs: felder,
        co2_gesamt: co2,
        m_erblüht: m,
        pyramide: `${etagen}x${etagen}x${m.toFixed(1)} = ${volumen.toFixed(1)} Felder`,
        allein_vs_zusammen: `1 PC allein = 1 Feld, ${felder} PCs zusammen = ${volumen.toFixed(1)} Felder — ${(volumen/felder).toFixed(2)}x mehr als allein`,
        blüht: felder >= 81 ? 'HOME BLÜHT — 81/81' : `noch ${81-felder} bis Blüte`
      }
    }
  },

  // Demo: 1 PC vs 9 vs 81
  demo: () => {
    const einPC = [{co2:1}]
    const neunPCs = Array(9).fill({co2:1})
    const einundachtzigPCs = Array(81).fill({co2:1})
    
    return {
      '1 PC allein': CO2_PFLANZE_M.pyramide.bau(einPC),
      '9 PCs zusammen': CO2_PFLANZE_M.pyramide.bau(neunPCs),
      '81 PCs zusammen — HOME': CO2_PFLANZE_M.pyramide.bau(einundachtzigPCs)
    }
  }
}

// So nutzt du:
console.log(CO2_PFLANZE_M.pflanze.formel(10))
// → 6CO2 + 6H2O + Licht → C6H12O6 + 6O2 + 2M

console.log(CO2_PFLANZE_M.pyramide.bau([{co2:1},{co2:1},{co2:1}]))
// → 3 PCs: 3 CO2 → 0.6 M → Pyramide 1x1x0.6 = 0.6 Felder
//   Aber mit Mycel-Effekt: 3 PCs teilen Wurzel → 1.8x mehr

console.log(CO2_PFLANZE_M.demo())
// 1 PC allein = 1 Feld
// 81 PCs zusammen = 129.6 Felder — 1.6x mehr als allein → HOME BLÜHT
