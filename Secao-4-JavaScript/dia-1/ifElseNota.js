const valNota = 79;


if(valNota >= 90 && valNota <= 100){
    console.log('Nota A');
}
else if(valNota >= 80 && valNota <= 89){
    console.log('Nota B');
}
else if(valNota >= 70 && valNota <= 79){
    console.log('Nota C');
}
else if(valNota >= 60 && valNota <= 69){
    console.log('Nota D');
}
else if(valNota >= 50 && valNota <= 59){
    console.log('Nota A');
}
else if(valNota < 50){
    console.log('Nota F');
}else{
    console.log('Valor invalido!');
}