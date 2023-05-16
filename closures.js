var x = 100;
function outer(){
    var y =50;
    var n=100;
    function inner(){
        var z = 10;
        console.log(y+z+x);
    }
    return inner;
}
let inner = outer();
console.log(inner());
console.log(inner());