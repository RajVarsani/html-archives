 //accessing the html elements
 let orderedList = document.getElementById("orderedlist");
 let button = document.getElementById("button");

 //adding event listener to button
 button.addEventListener("click", generateItem);

 //adding event listener to generate list item on clicking enter 

 document.onkeydown = (e) => {
    if (e.key == 'Enter') {
        generateItem();
        
    }
}

 //function to generate list item and print in document
 function generateItem() {
     let listItem = document.createElement("li");
     let listContent = document.getElementById("input-field");

     if (listContent.value != "") {
         listItem.append(listContent.value);
         orderedList.append(listItem);
         listContent.value = "";
     }

 }