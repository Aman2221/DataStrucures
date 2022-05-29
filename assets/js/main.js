document.querySelector('#palindromeForm').addEventListener('submit', (e)=> {
    e.preventDefault();
    let letter = [];
    let word = document.querySelector('#userInput').value;
    let card = document.querySelector('.card-content');
    let p = document.createElement('p');
    let reversUserInput = '';

    for(var i = 0;i< word.length;i++){
        letter.push(word[i]);
    }

    for(var i = 0;i< word.length;i++){
        reversUserInput += letter.pop();
    }

    if(reversUserInput === word){
        p.innerText = 'Yes, It is a Palindrome';
        p.classList.add('success')
        card.appendChild(p)
        document.querySelector('#userInput').value = ''
        setTimeout(() => {
            p.innerText= ''
        },1000)
    }

    else{
        p.innerText = 'It is not a palindrome !, Try Again';
        p.classList.add('fail')
        card.appendChild(p)
        document.querySelector('#userInput').value = ''
        setTimeout(() => {
            p.innerText= ''
        },1000)
    }

})