document.getElementById('calc-btn').addEventListener('click',function(){
    const totalPlayerExpence = playerExpence();
    if(isNaN(totalPlayerExpence)){
        alert('plese enter a number to per player cost field')
        return;
    }
    else{
        steValueById('player-expence',totalPlayerExpence);
    }
})