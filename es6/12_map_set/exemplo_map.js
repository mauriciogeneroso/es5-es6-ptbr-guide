let map = new Map();

map.set('nome', 'João');
map.set('idade', '16');
map.set('idade', '17');

console.log(map);
console.log(map.get('idade'));
map.clear();
console.log(map);