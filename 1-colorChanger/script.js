const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( function(button){
    // console.log(button);
    button.addEventListener('click', function(e){
        if( e.target.id === 'violet' || 
            e.target.id === 'indigo' || 
            e.target.id === 'blue' || 
            e.target.id === 'green' || 
            e.target.id === 'yellow' || 
            e.target.id === 'orange' || 
            e.target.id === 'red' ) body.style.backgroundColor = e.target.id;
    })
});