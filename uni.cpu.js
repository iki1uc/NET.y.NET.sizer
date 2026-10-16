// uni.cpu.js — Grundschätzung
export const uni = {
  ram: { slots:12, list:['ram.x','ram.y','ram.z','ram.h','ram.bio','ram.nano','ram.cpu','ram.gpu','ram.rom','ram.disk','rom.disk','ram.sys'], check:()=> ram.list.length===12 },
  rom: { laws:9, file:'richter.rom.html', readonly:true, check:()=> true },
  cpu: { file:'cpu.js + guru.js', fixpunkt:'f(f(x))=f(x)', check:()=> true },
  gpu: { file:'gpu.js + schachbrett.js', render:'9x9=81', check:()=> true },
  pc: { ready:()=> uni.ram.check() && uni.rom.check() && uni.cpu.check() && uni.gpu.check() },
  varianten:['roh','vollwertig','backup'],
  test: (os)=> os.ram && os.rom && os.cpu && os.gpu ? 'Leben überlebt' : 'Leben failt'
};
