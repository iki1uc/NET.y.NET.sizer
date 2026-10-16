// CUBE_MIND.js = atom cubik + bio gerechnet + alle anderen = 3 mal kleiner nutz raum
export const CUBE_MIND = {
  scale: 1/3, // wir sagen 3 mal kleiner, PC macht 3 mal kleiner
  real: { x:1, y:1, z:1 }, // real wäre 1
  
  // Formel = 3 mal kleiner = PC versteht nur Formel
  formel: {
    x: 1 * (1/3),
    y: 1 * (1/3),
    z: 1 * (1/3),
    volumen: 1 * (1/3)**3 // = 1/27 = 27x weniger nutz Raum als real
  },
  
  atomCubik: {
    // atom da sein in Mitte, nicht dreieck
    mitte: { x:0, y:0, z:0, da:true },
    // bio gerechnet = H O C N + ether + void + bio + lunge + moor
    bio: ['H','O','C','N','ether','void','bio','lunge','moor'],
    // alle anderen = 6 Flächen Würfel = alles drin
    flächen: 6
  },
  
  nutzRaum() {
    // PC schaut nicht nach wie groß Datei oder Volumen, er schaut Formel
    // wir sagen 3 mal kleiner, er macht 3 mal kleiner
    return this.formel.volumen; // 0.037... statt 1 = 27x weniger
  },
  
  check() {
    // egal wie groß real, Formel ist 3 mal kleiner = passt in ram.js 12
    return this.nutzRaum() === 1/27;
  }
};
