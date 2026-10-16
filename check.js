<script type="module">
  import { uni } from './uni.cpu.js';
  
  console.log(uni.status());
  // { ram: "OK 12/12", rom: "OK...", pc: "Leben überlebt" }

  // Deine BEST? Werte kommen jetzt aus uni:
  // uni.ram.list → 12 Slots
  // uni.rom.primes → 25 Primzahlen für 9x9 Grid
  // uni.cpu.chain → [3,9,81,729,3]
  // uni.cache.l1.size → 81

  document.getElementById('core-label').textContent = uni.cpu.core; // MA³
</script>
