document.getElementById('calc-btn').addEventListener('click',function(){
    const totalPlayerExpence = playerExpence();
    steValueById('player-expence',totalPlayerExpence);
})