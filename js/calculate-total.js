document.getElementById('total-calc-btn').addEventListener('click',function(){
    const totalPlayerExpence = playerExpence();
    
    const ManagerCost = getInputValueById('manager');
    const coachCost = getInputValueById('coach');

    console.log(ManagerCost,coachCost,totalPlayerExpence);
    const totalExpence = totalPlayerExpence + ManagerCost + coachCost;
    if(isNaN(totalExpence)){
        alert('plese enter numbers to above fields')
        return;
    }
    else{
        
        steValueById('total-expence',totalExpence);
    }
})