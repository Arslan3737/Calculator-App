
function getNumber(num){
    var result = document.getElementById("result")
    result.value +=num;
    
    }
    
    function clearResult(){
        var result = document.getElementById("result")
        result.value = "";
    }
    
    function getResult(){
        var result = document.getElementById("result");
       result.value = eval(result.value);
    }

    function backspace(){
        var result = document.getElementById("result");
        var x = result.value;
        if(x.length > 0){
            x = x.substring(0, x.length-1);
            result.value = x;
        }
    }

    var i =0;
    function brackets(){
        var result = document.getElementById("result");
        if(i == 0){
            result.value += '(';
            i=1;
        }
        else if(i == 1){
             result.value += ')';
             i=0;
        }
    }