function printValue(){
    const div = document.getElementById('text-div')

}

function changeTheme(){

    if(document.body.className === 'light'){
        document.body.className = 'red'
    } else if(document.body.className === 'red'){
        document.body.className = 'dark';
    } else if(document.body.className === 'dark'){
        document.body.className = 'light';
    } else {
        document.body.className = 'red';
    }

    console.log(document.body.className)
}


function changeTheme2(){

    const styleLink = document.getElementById('main-style');
    console.log(styleLink.href)

    if (styleLink.href.includes('dark')) {
        styleLink.href = './style.css'
    } else {
        styleLink.href = './dark-style.css'
    }

}

function changeTheme3(){

    const mainContainer = document.querySelector('.main');
    console.log(mainContainer);
    mainContainer.classList.toggle('dark');

}