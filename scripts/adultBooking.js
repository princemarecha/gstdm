export default function multBooking(val, rooms){
    var roomN = rooms;


    for (var i=1; i<=val;i++){

    var adults = document.getElementById("adults");

    var subdiv = document.createElement('div'); 
    var subdiv2 = document.createElement('div'); 
    var subdiv3 = document.createElement('div'); 
    var subdiv4 = document.createElement('div'); 
    var subdiv5 = document.createElement('div'); 
    var label = document.createElement('label'); 
    var name = document.createElement('label'); 
    var surname = document.createElement('label'); 
    var inputA = document.createElement('input'); 
    var inputB = document.createElement('input'); 
    var rooms = document.createElement('input'); 

    adults.appendChild(subdiv);
   // subdiv.appendChild(label);
    
    
    subdiv.appendChild(subdiv2);
    subdiv2.appendChild(subdiv3);
    subdiv2.appendChild(subdiv4);
    subdiv2.appendChild(subdiv5);

    //subdiv3.appendChild(name);
    subdiv3.appendChild(inputA);

    //subdiv4.appendChild(surname);
    subdiv4.appendChild(inputB);

    subdiv5.appendChild(rooms);

    //subdiv.appendChild(br);

    label.setAttribute('id', "adultN");
    name.setAttribute('id', "adName"+i);
    surname.setAttribute('id', "adSurname"+i);
    label.setAttribute('class', "ml-4 mr-2 text-md");
    subdiv.setAttribute('id', 'divStart');
    subdiv2.setAttribute("id", "subdiv2");
    subdiv2.setAttribute("class", "grid grid-cols-3 pl-6");
    subdiv3.setAttribute("class", "col-span-1");
    subdiv4.setAttribute("class", "col-span-1");
    
    inputA.setAttribute("class", "p-2 mr-3 mb-3 rounded-md text-sm");
    inputA.setAttribute("placeholder", "Adult ("+i+") Name");
    inputA.setAttribute("id", "aname"+i);
    inputA.setAttribute("type", "text");
    inputA.setAttribute("required","");    

    inputB.setAttribute("class", "p-2 mr-3 mb-3 rounded-md text-sm");
    inputB.setAttribute("id", "asurname"+i); 
    inputB.setAttribute("placeholder", "Adult ("+i+") Surname");
    inputB.setAttribute("type", "text");
    inputB.setAttribute("required","");  
    
    rooms.setAttribute("class", "p-2 mr-3 mb-3 rounded-md text-sm");
    rooms.setAttribute("id", "room"+i); 
    rooms.setAttribute("placeholder", "Room ("+i+")");
    rooms.setAttribute("type", "number");
    rooms.setAttribute("required","");  
    rooms.setAttribute("min","1");  
    rooms.setAttribute("max", roomN);


    //document.getElementById("adultN").innerHTML ="Other Adult Information";
    //document.getElementById("adName"+i).innerHTML ="Name";
    //  document.getElementById("adSurname"+i).innerHTML ="Surname";


}


}