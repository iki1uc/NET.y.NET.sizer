// bio.tel.js — minimal — 3 Atem
import {lungePflanze} from './lunge.pflanze.js'
import {lungeMensch} from './lunge.mensch.js'
import {qi} from './qi.iqq.js'

export const bioTel = {
  pflanze: lungePflanze,  // CO2 → O2
  mensch: lungeMensch,    // O2 → CO2
  qi: qi,                 // Übrig bleibt
  kreislauf: () => {
    // CO2 von Mensch → Pflanze → O2 → Mensch → CO2 → ...
    return "CO2 → O2 → CO2 → QI bleibt"
  }
}
