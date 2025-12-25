// ================   Question  1  =============== \\



function start() {

    var StudentNames = []
    document.write("<h2> Literal Array </h2>")
    document.write("var StudentNames = [ ]")

}



// ================   Question  2  =============== \\



function two() {

    var StudentNames = new Array()
    document.write("<h2> Object Array </h2>")
    document.write("var StudentNames = new Array ( )")

}
    


// ================   Question  3  =============== \\



function three (){

    var strings = ["Ali" , "Asif" , "Ahmed" , "Amir"]
    document.write("<h2> Strings Array </h2>")
    document.write("Ali | Asif | Ahmed | Amir ")

}



// ================   Question  4  =============== \\



function four() {

    var numbers = [10 , 30 , 50 , 70]
    document.write("<h2> Number Array </h2>")
    document.write("10 - 30 - 50 - 70")

}



// ================   Question  5  =============== \\



function five() {

    var boolean = [true , false , true , false]
    document.write("<h2> Bolean Array </h2>")
    document.write("true - false - true - false")
    
}



// ================   Question  6  =============== \\



function six() {

    var mixed = ["Ahasan" , 90 , true]
    document.write("<h2> Mixed Array </h2>")
    document.write("Ahasan | 90 | true")

}



// ================   Question  7  =============== \\



function seven() {

    var qualification = [
        "  SSC <br>" ,
        "  HSC <br>" , 
        "  BCS <br>" , 
        "  BS <br>" , 
        "  BCOM <br>" , 
        "  MS <br>" , 
        "  M. Phil. <br>" , 
        "  PhD  <br>"
    ]
    var Qualification = qualification.join(" ")
    
    document.write("<h2> Qualification </h2>")
    document.write( Qualification )

}



// ================   Question  8  =============== \\



function eight() {

    var Subject1 = +prompt("Enter your 1 subject numbers")
    var Subject2 = +prompt("Enter your 2 subject numbers")
    var Subject3 = +prompt("Enter your 3 subject numbers")

    var totalmarks = 500
    var Sum = Subject1 + Subject2 + Subject3
    var percentage1 = (Subject1 / totalmarks) * 100
    var percentage2 = (Subject2 / totalmarks) * 100
    var percentage3 = (Subject3 / totalmarks) * 100

    document.write("<h3> Score of Michael is " + Subject1 + "<br>" + percentage1 + " % </h3>")
    document.write("<h3> Score of John is " + Subject2 + "<br>" + percentage2 + " % </h3>")
    document.write("<h3> Score of Tony is " + Subject3 + "<br>" + percentage3 + " % </h3>")
}



// ================   Question  9  =============== \\



function nine() {

    var COLOR1 = prompt("Enter color to add at beginning :")
    var COLOR2 = prompt("Enter color to add at end :")
    var COLOR3 = prompt("Enter index to add color :")
    
    alert("Pending ...")

}



// ================   Question  10  =============== \\



function ten() {
    var wrongNum = [320 , 230 , 480 , 120]
    var correctNum = [120 , 230 , 320 , 480]
    document.write("<h3> Scores of Students : ' " + wrongNum + " ' </h3>")
    document.write("<h3> Odered Scores of Students : ' " + correctNum + " ' </h3>")
}



// ================   Question  11  =============== \\



function eleven() {
    var Cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
    var selectedCities = Cities.slice(2, 4);
    alert("All Cities : " + Cities + "\n" + "Selected Cities : " + selectedCities)
}



// ================   Question  12  =============== \\



function twelwe() {
    var arr = [" This ", " is ", " my ", " cat "]
    var result = arr.join("")
    alert(result)
}



// ================   Question  13  =============== \\



function thirdteen() {

    var Devices = []
    
    Devices.push("Keyboard")
    Devices.push("Mouse")
    Devices.push("Printer")
    Devices.push("Monitor")

    document.write("<h2> Out : </h2> <h4>" + Devices.shift() + "</h4>")
    document.write("<h2> Out : </h2> <h4>" + Devices.shift() + "</h4>")
    document.write("<h2> Out : </h2> <h4>" + Devices.shift() + "</h4>")
    document.write("<h2> Out : </h2> <h4>" + Devices.shift() + "</h4>")
}



// ================   Question  14  =============== \\



function fourtheen() {
    
    var Devices = []
    
    Devices.push("Monitor")
    Devices.push("Printer")
    Devices.push("Mouse")
    Devices.push("Keyboard")

    document.write("<h2> Out : </h2> <h4>" + Devices.shift() + "</h4>")
    document.write("<h2> Out : </h2> <h4>" + Devices.shift() + "</h4>")
    document.write("<h2> Out : </h2> <h4>" + Devices.shift() + "</h4>")
    document.write("<h2> Out : </h2> <h4>" + Devices.shift() + "</h4>")
}



// ================   Question  15  =============== \\



function fiftheen() {

    var PhoneName = [
        "Apple" , 
        "Samsung" , 
        "Motorola" , 
        "Nokia" , 
        "Sony" , 
        "Haier"
    ]
    
    document.write("<select>")

    document.write("<option> Mobile Phone </option>")
    document.write("<option> Apple </option>")
    document.write("<option> Samsung </option>")
    document.write("<option> Motorola </option>")
    document.write("<option> Nokia </option>")
    document.write("<option> Sony </option>")
    document.write("<option> Haier </option>")

    document.write("</select>")

}