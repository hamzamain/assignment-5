document.getElementById('cards-perants').addEventListener('click',function(event){
   const clickedElement = event.target;
   const clickedElementValue = clickedElement.innerText;
   
//    console.log(clickedElement)
   if(clickedElementValue === 'SELECT'){
    const playerName = clickedElement.parentNode.children[0].innerText;
    if(liArray.length <= 4){
        const li = document.createElement('li');
    li.classList.add('li-class');
    li.innerText = playerName;
    clickedElement.setAttribute('disabled',true)

    const liContainer = document.getElementById('li-container');
    // console.log(liContainer)
    liContainer.appendChild(li);
    // console.log(liContainer);
    console.log(liArray.length);
    }
    else{
        alert('you have fulfilled the selection limit');
    }

}
})

