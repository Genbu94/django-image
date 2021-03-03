domReady(function(){
    var like_buttons = document.querySelectorAll(".like");
    for(let i = 0; i < like_buttons.length; i++){
        like_buttons[i].addEventListener("click", sendLike);
    }
});


function sendLike(event){
    const csrftoken = getCookie('csrftoken');
    const like_url = document.getElementById("like_url").innerHTML.replace(/['"]+/g, '');
    const imageId = event.target.getAttribute("data-id");
    const action = event.target.getAttribute("data-action");
    const data = JSON.stringify({"id": imageId, "action": action});
    const options = {
        headers: {
            'X-CSRFToken': csrftoken,
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        method: 'POST',
        mode: 'same-origin',
        body: data
    };
    
    fetch(like_url, options).then(function(response) {
        if (action == "unlike"){
            event.target.setAttribute("data-action", "like");
            event.target.text = "like";
        }else{
            event.target.setAttribute("data-action", "unlike");
            event.target.text = "unlike";
        }

    });
}

