// Declaring Variables

// Pages
let home_page  = document.querySelector('.home');
let add_page   = document.querySelector('.add_page')
let admin_page = document.querySelector('.admin_page')
let random     = document.querySelector('.random');
let question   = document.querySelector('.question');
let answer     = document.querySelector('.answer');
let about      = document.querySelector('.about');

// Btns
let btns = document.querySelectorAll('button');
let destination;


// Getting Clicked Btn
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        destination = btn.id;
        console.log(destination);
        routing(destination)
    })
})

// Routing Func
function routing(distination) {

    home_page.style.display = 'none';
    add_page.style.display = 'none';
    admin_page.style.display = 'none';
    question.style.display = 'none';
    answer.style.display = 'none';
    random.style.display = 'none';
    about.style.display = 'none';

    console.log(`###################`);
    console.log(destination);
    console.log(`###################`);
    let show_me = document.querySelector(`.${destination}`);
    show_me.classList.remove('hidden');
    show_me.style.display = 'block';
}

function btns_manager(whereAmI) {
    if (home_page.style !== 'none') {
        console.log('I see home PAge');
    }
    if (question.style.display !== 'none') {
        console.log('I see question PAge');
    }
    if (answer.style.display !== 'none') {
        console.log('I see answer PAge');
    }
    if (add_page.style.display !== 'none') {
        console.log('I see add PAge');
    }
    if (admin_page.style.display != 'none') {
        console.log('I see admin PAge');
    }
}


btns_manager()