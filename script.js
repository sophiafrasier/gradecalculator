function calculateCurrentGrade(){
    var hwGrade= document.getElementById("hwScores").value;
    var hwArray= convertArr(hwGrade);
    var hwAvg= average(hwArray);
    colorRow(hwAvg, "table1");

    var classGrade= document.getElementById("classScores").value;
    var classArray= convertArr(classGrade);
    var classAvg= average(classArray);
    colorRow(classAvg, "table2");

    var testGrade= document.getElementById("testScores").value;
    var testArray= convertArr(testGrade);
    var testAvg= average(testArray);
    colorRow(testAvg, "table3");

    var partGrade= document.getElementById("partScores").value;
    var partArray= convertArr(partGrade);
    var partAvg= average(partArray);
    colorRow(partAvg,"table4");

    var projGrade= document.getElementById("projScores").value;
    var projArray= convertArr(projGrade);
    var projAvg= average(projArray);
    colorRow(projAvg, "table5");

    var hwWeight= (parseInt(document.getElementById("hwWeight").value))/100;
    var classWeight= (parseInt(document.getElementById("classWeight").value))/100;
    var testWeight= (parseInt(document.getElementById("testWeight").value))/100;
    var partWeight= (parseInt(document.getElementById("partWeight").value))/100;
    var projWeight= (parseInt(document.getElementById("projWeight").value))/100;
    var finalWeight= (parseInt(document.getElementById("finalWeight").value))/100;

    var sum= hwWeight+ classWeight+ testWeight+ partWeight+ projWeight +finalWeight;

    if(sum !== 1){
        document.getElementById("currentGrade").innerHTML= "Error! Please make sure that you have entered the correct weights."
    }else{
        var homework= hwAvg*hwWeight;
        var classwork= classAvg*classWeight;
        var participation= partAvg*partWeight;
        var test= testAvg*testWeight;
        var project= projAvg*projWeight;

        var currentGrade= homework+ classwork+ participation+ test+ project;
        console.log(currentGrade);
        document.getElementById("currentGrade").innerHTML= "Your current grade is "+ currentGrade+ "% and you need a";
    }

        return currentGrade;

}

function convertArr(str){
    var newArray= str.split(",");

    for(var i=0; i< newArray.length; i++){
        newArray[i]= parseInt(newArray[i]);
    }
    return newArray;
}

function average(arr){
    var sum= 0;
    for(var i=0; i< arr.length; i++){
        sum += arr[i];
    }

    var avg= sum/arr.length;
    console.log(avg);
    return avg;

}

function calculateGradeNeeded(){
    var gradeWanted= parseInt(document.getElementById("gradeWanted").value);
    var currentGrade1= calculateCurrentGrade();
    var finalWeight= (parseInt(document.getElementById("finalWeight").value))/100;

    var needed= (gradeWanted-currentGrade1*(1-finalWeight))/finalWeight;

    document.getElementById("finalGradeNeeded").innerHTML= "You need a "+ needed+ "% on the final in order to get a "+ gradeWanted+ "% in the class.";
    return needed;
}

function colorRow(average, row){
    if(average>=90){
        document.getElementById(row).style.backgroundColor = "#32CD32";
    }
    if(average>=80 && average<90){
        document.getElementById(row).style.backgroundColor = "#ADFF2F";
    }
    if(average>=70 && average<80){
        document.getElementById(row).style.backgroundColor = "#FFFF00";
    }
    if(average<60){
        document.getElementById(row).style.backgroundColor = "#FF0000";
    }
}

function reset(){
    document.getElementById("currentGrade").innerHTML = "";
    document.getElementById("finalGradeNeeded").innerHTML = "";
    document.getElementById("gradeWanted").value = "";
    document.getElementById("finalWeight").value = "";
    document.getElementById("table1").style.backgroundColor = "#FF8C00";
    document.getElementById("table2").style.backgroundColor = "#FF8C00";
    document.getElementById("table3").style.backgroundColor = "#FF8C00";
    document.getElementById("table4").style.backgroundColor = "#FF8C00";
    document.getElementById("table5").style.backgroundColor = "#FF8C00";
}
