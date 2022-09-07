import { Label } from "reactstrap";

export default function GetSadza(){
    if (process.browser){
        var roomOptions = document.getElementById("roomOptions");
    
        var unitDiv = document.getElementById("unitDiv");
        unitDiv.setAttribute('class', 'col-span-1 grid grid-cols-2 m-4 gap-6');

        var totals = document.getElementById("totals");

        var checkDiv = document.createElement("div");
        var currencyDiv = document.createElement("div");
        var newBound = document.createElement('hr');
        var changeLabel = document.createElement('label');
        var roomID = document.createElement('input');
        var roomCode = document.createElement('input');
        var roomName = document.createElement('input');
        var totalNet = document.createElement('input');
        var pendingAmount = document.createElement('input');
        var confirmed = document.createElement('input');

        var currency = document.createElement('select');
        var US = document.createElement('option');
        var DEU = document.createElement('option');
        var GBP = document.createElement('option');

        checkDiv.appendChild(changeLabel);
        checkDiv.appendChild(confirmed);

        currency.appendChild(US);
        currency.appendChild(DEU);
        currency.appendChild(GBP);

        unitDiv.appendChild(newBound);
        unitDiv.appendChild(roomID);
        unitDiv.appendChild(checkDiv);
        unitDiv.appendChild(roomCode);
        unitDiv.appendChild(roomName);
        currencyDiv.appendChild(totalNet);
        currencyDiv.appendChild(pendingAmount);
      
        currencyDiv.appendChild(currency);

        roomOptions.appendChild(unitDiv);
        
        if (!document.getElementById("currencyDiv")){
             totals.appendChild(currencyDiv);
            }
        
     
       
        newBound.setAttribute('class','col-span-full py-3 mr-6');  

        roomID.setAttribute('type','number');
        roomID.setAttribute('placeholder','Room ID');

        roomCode.setAttribute('type','text');
        roomCode.setAttribute('placeholder','Room Code (e.g. DBT.ST-3)');

        roomName.setAttribute('type','text');
        roomName.setAttribute('placeholder','Room Name (e.g. Double or Twin MON....)');

        totalNet.setAttribute('type','number');
        totalNet.setAttribute('min','0.00');
        totalNet.setAttribute('max','100000.00');
        totalNet.setAttribute('step','0.01');
        totalNet.setAttribute('placeholder','Total Net (999.00)');

        pendingAmount.setAttribute('type','number');
        pendingAmount.setAttribute('min','0.00');
        pendingAmount.setAttribute('max','100000.00');
        pendingAmount.setAttribute('step','0.01');
        pendingAmount.setAttribute('placeholder','Pending Amount (990.00)');

        currency.setAttribute('name','currency');
        currency.setAttribute('id','currency');
       

        US.setAttribute('value', '$US');
        US.setAttribute('id', 'USD');
        document.getElementById("USD").innerHTML = "USD";

        DEU.setAttribute('value', 'DEU');
        DEU.setAttribute('id', 'DEU');
        document.getElementById("DEU").innerHTML = "DEU";

        GBP.setAttribute('value', 'GBP');
        GBP.setAttribute('id', 'GBP');
        document.getElementById("GBP").innerHTML = "GBP";


        confirmed.setAttribute('type','checkBox');
        confirmed.setAttribute('checked', '');
        changeLabel.setAttribute('class', 'roomCheck mr-4');

        currencyDiv.setAttribute('id', 'currencyDiv');
        currencyDiv.setAttribute('class', 'grid grid-cols-1 m-4 gap-6');
        

        
        var stuff = document.getElementsByClassName("roomCheck");

        for (var i=0; i< stuff.length; i++){
            stuff[i].innerHTML = "Confirmed";
        }
    }
}
