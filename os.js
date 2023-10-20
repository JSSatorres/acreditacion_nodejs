const os = require('node:os') 

console.log('userInfo', os.userInfo());
console.log('Sistema operativo', os.platform());
console.log('Version sistema operativo', os.release());
console.log('Arquitectura', os.arch());
console.log('CPUs', os.cpus());
console.log('Espacio libre memoria', os.freemem());
console.log('Espacio total memoria', os.totalmem());

// console.log(globalThis);

console.table({
  platform: os.platform(),
  freemem: os.freemem(),
  totalmem:os.totalmem()
})