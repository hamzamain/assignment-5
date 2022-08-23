document.getElementById('total-calc-btn').addEventListener('click',function(){
    const totalPlayerExpence = playerExpence();
    
    const ManagerCost = getInputValueById('manager');
    const coachCost = getInputValueById('coach');

    console.log(ManagerCost,coachCost,totalPlayerExpence);
    const totalExpence = totalPlayerExpence + ManagerCost + coachCost;
    steValueById('total-expence',totalExpence);
})