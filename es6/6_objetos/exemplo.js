var obj = new Object;
obj.a = 5;
obj.b = 12;

delete obj.a;
console.log('a' in obj)