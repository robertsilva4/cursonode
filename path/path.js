const path = require('path')

console.log('basename:', path.basename('c:\\tpm\\arquivo.html'))
console.log('normalize:', path.normalize('c:\\tpm/dir//subdir/dir/..'))
console.log('join path:', path.join('/teste', 'teste2', 'teste3/teste4', 'dir2', '..'))
console.log('resolve path:', path.resolve('path.js'))
console.log('extension:', path.extname('path.js'))