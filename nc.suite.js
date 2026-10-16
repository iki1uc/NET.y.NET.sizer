window.NC = {
  filter: (cmd) => {
    blocked = ['rm -rf','eval(','attack','drop','delete','fetch(']
    if(blocked.some(b=>cmd.includes(b))) return false
    return true
  }
}
const ALLOWED = ['TMP','LAGE','AXIS','PIPE','SCORE','MATRIX','ORBIT','IDENTITY','FREQ']
