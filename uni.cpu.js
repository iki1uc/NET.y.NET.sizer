// uni.cpu.js — Grundschätzung — FIXED
// NET.y.NET.sizer — iki1uc
// Version: 1.1 — RAMBO FIX + ROM/RAM/CPU/GPU/CACHE

export const uni = {
  ram: {
    slots: 12,
    list: ['ram.x','ram.y','ram.z','ram.h','ram.bio','ram.nano','ram.cpu','ram.gpu','ram.rom','ram.disk','rom.disk','ram.sys'],
    check: function() {
      // FIX: war ram.list — richtig ist this.list
      return this.list.length === this.slots;
    }
  },
  rom: {
    laws: 9,
    file: 'richter.rom.html',
    readonly: true,
    primes: [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],
    check: function() { return this.laws === 9 && this.readonly === true; }
  },
  cpu: {
    files: ['cpu.js','guru.js'],
    fixpunkt: 'f(f(x))=f(x)',
    chain: [3,9,81,729,3],
    core: 'MA³',
    pos: [3, Infinity],
    check: function() { return this.fixpunkt === 'f(f(x))=f(x)'; }
  },
  gpu: {
    files: ['gpu.js','schachbrett.js'],
    render: '9x9=81',
    form: 'Octaeder / Score',
    check: function() { return this.render === '9x9=81'; }
  },
  cache: {
    // NEU — das was jetzt dazu kommt
    l1: { size: 81, name: 'BEST?TMP' },
    l2: { size: 360, name: 'BEST?LAGE / ORBIT' },
    l3: { size: 39, name: 'BEST?AXIS / SCORE' },
    check: function() { return this.l1.size === 81 && this.l2.size === 360; }
  },
  varianten: ['roh','vollwertig','backup'],

  // Grundschaltung — kein Rambo mehr
  pc: {
    ready: function() {
      return uni.ram.check() && uni.rom.check() && uni.cpu.check() && uni.gpu.check() && uni.cache.check();
    }
  },

  test: function(os) {
    // os = { ram, rom, cpu, gpu, cache }
    const hasAll = os.ram && os.rom && os.cpu && os.gpu;
    const hasCache = os.cache ? true : false; // optional noch
    return hasAll ? 'Leben überlebt' : 'Leben failt';
  },

  // Status für deine 3 Varianten
  status: function() {
    return {
      ram: this.ram.check() ? 'OK 12/12' : `FAIL ${this.ram.list.length}/${this.ram.slots}`,
      rom: this.rom.check() ? 'OK 9 laws' : 'FAIL',
      cpu: this.cpu.check() ? 'OK f(f(x))=f(x)' : 'FAIL',
      gpu: this.gpu.check() ? 'OK 9x9=81' : 'FAIL',
      cache: this.cache.check() ? 'OK 81/360' : 'FAIL',
      pc: this.pc.ready() ? 'Leben überlebt' : 'Leben failt — Rambo Mode'
    };
  }
};

// Für direkten Import in index.html
export default uni;
