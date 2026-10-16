// atom.cubik.js — atom nicht mehr dreieck, atom da sein in Mitte
export const atomCubik = {
  // atom = Mitte, nicht Dreieck
  atom: { x:0, y:0, z:0, da: true }, // da sein
  
  // würfel = 8 Ecken = cubik
  ecken: [
    {h:1,o:0,c:0,n:0}, // H
    {h:0,o:1,c:0,n:0}, // O
    {h:0,o:0,c:1,n:0}, // C
    {h:0,o:0,c:0,n:1}, // N
    {h:1,o:1,c:0,n:0}, // ether
    {h:0,o:0,c:1,n:1}, // void
    // 2 mehr für cubik komplett
    {h:1,c:1}, {o:1,n:1}
  ],
  
  // gerne dreieck = dreiecke als Verbindung Mitte→Ecke→Ecke, nicht als atom selbst
  dreiecke: [
    // 12 Dreiecke = 6 Flächen × 2 Diagonale = cubik bleibt, dreieck bleibt gerne
    // aber atom ist nicht dreieck, atom ist Mitte
  ],
  
  check() {
    return this.atom.da === true; // atom da sein = ja, nicht dreieck
  }
};
