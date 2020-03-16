let a = {
    name: 'Den',
    protocol: "https",
    maxStudentCount: 20,
    isOnline: true,
    studend: ['ivan','Lera','Jora'],
    slassRoom: {
        teather: {
            name: 'name Teatcher',
            age: 18
        }
    }
}
let b = {...a};
 b.slassRoom = {...a.slassRoom}
 b.slassRoom.teather = {...a.slassRoom.teather}

 b.name = 'Ola';
 b.slassRoom.teather.name = "oooop"

console.log("a = : " + a.name)
console.log("a = : " + a.slassRoom.teather.name)

console.log("b = : " + b.slassRoom.teather.name)
console.log("b = : " + b.name)
window.a = a;
window.b = b;ad