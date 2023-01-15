const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
   

select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {                       
                        option.classList.remove('selected');           
        });
        option.classList.add('selected');
        
        let canalFor = document.getElementById("canal");
        canal = canalFor.innerText;

        let envFor = document.getElementById("source");
        env = envFor.innerText;

        });       
    });   
}); 

let canal;
let env;
let endingLink = "/login.html?SOURCE=SYSTEM&channel=";
let zero = "https://test-zero/app/";
let minusOne = "https://test-minus-one/app/";
let minusTwo = "https://test-minus-two/app/";
let minusThree = "https://test-minus-three/app/";
let finalLink = document.getElementById("newLink").innerHTML;
let newLink = document.getElementById("newLink").innerHTML;


function showLink() {   
    let proposalIndex = document.getElementById("prefix").value;
    
    if (env == -2) {   
        document.getElementById("newLink").innerText = 
        minusTwo + proposalIndex +
        endingLink + canal;
               
        (function() {
            
            newLink = minusTwo + proposalIndex +
            endingLink+ canal;
            link1.setAttribute("href",newLink);
        
        });
    } 
    else if (env == -1) { 
        document.getElementById("newLink").innerText = 
        minusOne + proposalIndex +
        endingLink + canal;
               
        (function() {
            
            newLink = minusOne + proposalIndex +
            endingLink+ canal;
            link1.setAttribute("href",newLink);
        
        });
    }
    else if (env == -3) { 
        document.getElementById("newLink").innerText = 
        minusThree + proposalIndex +
        endingLink + canal;
                
        (function() {
            
            newLink = minusThree + proposalIndex +
            endingLink+ canal;
            link1.setAttribute("href",newLink);
        
        });
  }
    else if (env == 0) { 
        document.getElementById("newLink").innerText = 
        zero + proposalIndex +
        endingLink + canal;
                
        (function() {
            
            newLink = zero + proposalIndex +
            endingLink+ canal;
            link1.setAttribute("href",newLink);
        
        });
    };
};

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
