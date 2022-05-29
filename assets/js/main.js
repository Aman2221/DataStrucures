const isPalindrome = (e) => {
    var letters = [];
    var word='coc'
    var rword = "";

    for(var i = 0; i < word.length; i++){
        letters.push(word[i]);
    }

    for(var i=0; i < word.length; i++){
        rword += letters.pop();
    }

    if(rword === word){
        console.log("It is a Palindrome");
    }
    else{
        console.log('Not A Palindrome');
    }
}