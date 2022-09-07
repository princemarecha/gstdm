import { Label } from "reactstrap";

export default function GetSadza(){
    if (process.browser){
        var roomOptions = document.getElementById("roomOptions");

        var unitDiv = document.getElementById("unitDiv");
        unitDiv.setAttribute('class', 'col-span-1 grid grid-cols-2 m-4 gap-6');
        var checkDiv = document.createElement("div");
        var newBound = document.createElement('hr');
        var changeLabel = document.createElement('label');
        var roomID = document.createElement('input');
        var confirmed = document.createElement('input');

        checkDiv.appendChild(changeLabel);
        checkDiv.appendChild(confirmed);

        unitDiv.appendChild(newBound);
        unitDiv.appendChild(roomID);
        unitDiv.appendChild(checkDiv);

      
        roomOptions.appendChild(unitDiv);
     
       
        newBound.setAttribute('class','col-span-full py-3 mr-6');  

        roomID.setAttribute('type','text');
        roomID.setAttribute('placeholder','Room ID');

        confirmed.setAttribute('type','checkBox');
        confirmed.setAttribute('checked', '');
        changeLabel.setAttribute('class', 'roomCheck mr-4');
        
        var stuff = document.getElementsByClassName("roomCheck");

        for (var i=0; i< stuff.length; i++){
            stuff[i].innerHTML = "Room Checked";
        }
    }
}
