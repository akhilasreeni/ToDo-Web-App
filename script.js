fetch("https://jsonplaceholder.typicode.com/todos/") 
.then(function(response) {
    return response.json()
})
.then((response) => {
    console.log(response[3]);
     var result = document.getElementById('result');

      for (var i=1;i<=200;i++){
        var x = document.createElement('input');
        x.setAttribute("type", "checkbox");
        x.setAttribute("id",response[i].id);
        var space=document.createElement("span");
        space.innerHTML=" ";
        var label = document.createElement('label');
        label.htmlFor = response[i].title;
        label.appendChild(document.createTextNode(response[i].title));
        var br = document.createElement('br');
        result.appendChild(x);
        result.appendChild(space);
        result.appendChild(label);
        result.appendChild(br);
      }
})

for(i=1;i<=200;i++){
  x.setAttribute("onchange",check("response[i].id"));
}

var c=0;
var p = new Promise(function(resolve,reject){

})

function givealert(){
  alert(" Congrats. 5 Tasks have been Successfully Completed")
}
function check(id){
  checklength(id)
  .then(givealert)
}
