function add() {
    var name1 = parseInt(document.getElementById("name1").value);
    var name2 = parseInt(document.getElementById("name2").value);

    var addResult = name1 + name2;
    
    document.getElementById("result").innerHTML=addResult;
}
