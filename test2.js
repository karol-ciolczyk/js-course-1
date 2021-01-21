function setUpEvents(){

    var content = document.getElementById("content");
    var button = document.getElementById("show-more");
    
    button.onclinck = function(){
    
        if(content.className == "open"){
            
            content.className = "";
            button.innerHTML = "Show More";
         }  else{
    
            content.className = "open";
            button.innerHTML = "Show Less";
         }
    
    };
    
}


window.onload = function(){

    setUpEvents();

};