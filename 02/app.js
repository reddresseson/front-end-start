function log(str){
    console.log(str);
}

for(var i=0; i<100; i++){
    log(i+1)
}

for(i=1; i<101; i++){
    if(i%2 === 0) {
        log(i);
    }
}

for(i=1; i<101; i++){
    if(i%2 === 1) {
        log(i);
    }
}

for(i=2; i<10; i++){
    log(i+"단 출력");
    for(j=1; j<10; j++){
        log(i+'*'+j+'='+(i*j));
    }
}