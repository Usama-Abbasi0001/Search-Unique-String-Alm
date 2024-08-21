function Unique(str){
    let storage={};
    for(let i=0; i<str.length ; i++){
        if(storage[str[i]]){
           return false; 
    }else{
        storage[str[i]]=true;
    }
}
return true;
}
const testresult= "hunfa";

console.log(Unique(testresult));