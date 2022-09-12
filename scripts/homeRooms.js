export default function multiplyRooms(val){
    if (process.browser){
       var main = document.getElementById("searchMult");

       var AdultDiv = document.createElement("div");
       var AdultDivChild = document.createElement("div");

       var AdultSelect = document.createElement("select");
       var AdultOption = document.createElement("option");


    main.appendChild(AdultDiv);
    AdultDiv.appendChild(AdultDivChild);
    AdultDivChild.appendChild(AdultSelect);
    AdultSelect.appendChild(AdultOption);

    AdultDiv.setAttribute("class", "col-start-2 flex justify-center AdultDiv");
    AdultDivChild.setAttribute("class", "mb-3 xl:w-96 AdultDivChild");
    AdultSelect.setAttribute("class", "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none");
    AdultOption.setAttribute("class", "first");

    var ssstuff = document.getElementsByClassName("first");

    for (var i=0; i< ssstuff.length; i++){
        ssstuff[i].innerHTML = 1;
    }
  

    //second child

    var AdultDiv2 = document.createElement("div");
    var AdultDivChild2 = document.createElement("div");

    var AdultSelect2 = document.createElement("select");
    var AdultOption2 = document.createElement("option");


 main.appendChild(AdultDiv2);
 AdultDiv2.appendChild(AdultDivChild2);
 AdultDivChild2.appendChild(AdultSelect2);
 AdultSelect2.appendChild(AdultOption2);

 AdultDiv2.setAttribute("class", "flex justify-center AdultDiv2");
 AdultDivChild2.setAttribute("class", "mb-3 xl:w-96 AdultDivChild2");
 AdultSelect2.setAttribute("class", "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none");
 AdultOption2.setAttribute("class", "first2");

 var ssstuff2 = document.getElementsByClassName("first2");

 for (var i=0; i< ssstuff2.length; i++){
     ssstuff2[i].innerHTML = 1;
 }

    }
    }
   