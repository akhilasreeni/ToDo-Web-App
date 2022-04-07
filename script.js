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
        var label = document.createElement('label');
        label.htmlFor = response[i].title;
        label.appendChild(document.createTextNode(response[i].title));
        var br = document.createElement('br');
        result.appendChild(x);
        result.appendChild(label);
        result.appendChild(br);
      }
})


   