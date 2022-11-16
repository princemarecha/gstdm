export default function childrenCustom(num){
    console.log(num);

     while (document.getElementById("childDiv")){
            document.getElementById("allOptions").removeChild(document.getElementById("childDiv"));
        }
   

    for (var i=1;i<=num;i++){

        var allOptions = document.getElementById("allOptions");

        if (!childDiv)
            {
                var childDiv = document.createElement('div');
            }

        var childAge = document.createElement('input');    
      
        allOptions.appendChild(childDiv);

        childDiv.appendChild(childAge);

        childDiv.setAttribute('class', 'grid grid-cols-1 col-span-full');
        childDiv.setAttribute('id', 'childDiv');

        childAge.setAttribute('value', '');
        childAge.setAttribute('type', 'number');
        childAge.setAttribute('id', 'childAge'+ i);
        childAge.setAttribute('placeholder', 'Child ('+ i +') Age');
        childAge.setAttribute('class', 'col-span-full');
        document.getElementById("childAge" + i).innerHTML = "Child Age";

    }

    
}