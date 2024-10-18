document.getElementById('images').addEventListener('click' , function(e){
    console.log("image clicked");
    alert("images clicked")
} , false)

document.getElementById('img2').addEventListener('click' , function(e){
    console.log("image 2 clicked")
    alert("img2 clicked")
} , false)

document.querySelector('#images').addEventListener('click' , function(e){
    console.log(e.target.parentNode);

    if(e.target.tagName == 'IMG'){
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }  
})