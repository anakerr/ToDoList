

//button to confirm edit is done 
// var span3=document.createElement('span3');
// var txt3=document.createTextNode('Done');
// span3.className='done';
// span3.appendChild(txt3);
// li.appendChild(span3);

function todo(){
    //insert text in classlist and inside li
    let text=document.getElementById('in1').value;
    let li=document.createElement('li');
    let liSpan=document.createElement('span');
    liSpan.className='liSPan';
    liSpan.innerHTML=text;
    li.appendChild(liSpan);
   
   
    if(text==""){
alert("Enter your to do list");
} else{
    document.getElementById('out1').appendChild(li); 
  
}
document.getElementById('in1').value='';

//button to delete   
var deleteSpan=document.createElement('span');
var closeB=document.createTextNode('x');
deleteSpan.className='close';
deleteSpan.appendChild(closeB);
li.appendChild(deleteSpan);

//button to edit 
var editSpan=document.createElement('span');
var editB=document.createTextNode('Edit');
editSpan.className='edit';
editSpan.appendChild(editB);
li.appendChild(editSpan);

tolocal2();
}



let spisok = document.querySelector('ul');
var todos2;

spisok.addEventListener('click', function(event){
    if(event.target.classList.contains('liSPan')){
    
    event.target.classList.toggle('checked');
    //tolocal2();
    } 
    //delete button 
    else if(event.target.className=='close') {
    var div=event.target.parentNode;
    div.remove();
    tolocal2();
    }
    // edit button 
    else if(event.target.className=='edit') {
        let editButton = event.target
        let parent = editButton.parentNode
        let liSpan = parent.querySelector(".liSPan")
        // var listItem=event.target.classList.contains('liSPan')
        liSpan.contentEditable = true;
        liSpan.addEventListener("keypress", function(event) {
            // If the user presses the "Enter" key on the keyboard
              
            if (event.key === "Enter") {
              // Cancel the default action, if needed
              event.preventDefault();
              // Trigger the button element with a click
              liSpan.contentEditable = false;
              tolocal2()
            }
          });
    // let editInput = document.getElementsByClassName("liSpan");
    // // listItem.contentEditable = true;
    // console.log(editInput)
    // console.log(liSpan)
    }
}
      , false)


//   function editTODO(){
  
   
//     const paragraph = listItem.innerHTML;
//     const edit_button = document.getElementsByClassName("edit");
//     const end_button = document.getElementsByClassName("done");

//  edit_button.addEventListener("click", function() {
//   paragraph.contentEditable = true;
//   paragraph.style.backgroundColor = "#dddbdb";
// } );

// end_button.addEventListener("click", function() {
//   paragraph.contentEditable = false;
//   paragraph.style.backgroundColor = "#ffe44d";
// } )
//     } 

//   }
 function tolocal2(){
        todos2=spisok.innerHTML;
        localStorage.setItem('elementispiska', todos2);
        }
        
        if(localStorage.getItem('elementispiska')){
        spisok.innerHTML=localStorage.getItem('elementispiska');
        }

        

//  var newInput = listItem.createElement("<input type='checkbox' name='edit-text'>");
//     listItem.appendChild(text2);
//     const text2 = document.createTextNode(newInput);
//     const pNode = document.getElementById("p");
//     pNode.appendChild(text2);
//     // var text2 = listItem.querySelector("li");
//         console.log(newInput)
//     // var containsClass = listItem.classList.contains("edit");


//         //if the class pf parent is .edit
//     if (containsClass){
//       //label text become the input's value  
//       text2.innerText = listItem.value;

//     } else {
//         //switch to .editmode
//         //input value becomes the label's text
//       listItem.value = text2.innerText;
//     }

//     listItem.classList.toggle("edit"); //toggle .editmode on the parent

// }