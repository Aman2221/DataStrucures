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

//Stack 

var Stack = function(){
    this.count = 0;
    this.storage = [];

    this.size = function(){
        return this.count;
    }

    this.push = function(value){
       
       this.storage[this.count] = value;
       this.count++;
       return value
    }

    this.pop = function(){
        if(this.count === 0){
            return 'undefined'
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result
    }

    this.peek = function(){
        var result = this.storage[this.count-1];
        return result;
    }
}

var myStack = new Stack();

// console.log('Initial Size of Stack : ',myStack.size());
// console.log(myStack.push(1))
// console.log(myStack.push('Aman'))
// console.log('Size of Stack : ',myStack.size());
// console.log('last element in the stack is : ',myStack.peek());
// console.log('removing last element from the stack : ',myStack.pop());
// console.log('Size of Stack : ',myStack.size());\

// import React from 'react'

function mySet(){
    this.collection = [];

    this.has = function(value){
        return this.collection.indexOf(value) !== -1;
    }

    this.add = function(value){
        if(!this.has(value)){
            this.collection.push(value);
            return true
        }
        return false
    }

    this.remove = function(value){
        if(this.has(value)){
            var index = this.collection.indexOf(value);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    this.size = function(){
        return this.collection.length
    }

    this.values = function(){
        return this.collection
    }

    this.union = function(otherSet){
        var firstSet = otherSet;
        var unionSet = new Set();
        this.collection.forEach(element => {
            return unionSet.add(element);
        });

        firstSet.forEach(element => {
            return unionSet.add(element);
        });
        return unionSet;
    }

    this.intersection = function(otherSet){
        var firstSet = this.collection;
        var intersection = new Set();
        firstSet.forEach(element => {
            if(otherSet.has(element)){
                return intersection.add(element)
            }
        });
        return intersection;
    }

    this.difference = function(otherSet){
        var firstSet = this.collection;
        var difference = new Set();
        firstSet.forEach(element => {
            if(!otherSet.has(element)){
                return difference.add(element)
            }
        });
        return difference;
    }

    this.subset = function(otherSet){
        var firstSet = this.collection;
        return firstSet.every(value => otherSet.has(value));
    }
}

var myNewSet = new mySet();
var interSectionSet = new mySet([1,2,3,5]);
console.log(myNewSet.size());
console.log(myNewSet.add(1));
console.log(myNewSet.add('asman','Aman'));
console.log(myNewSet.add('Aman'));
console.log(myNewSet.add(2));

console.log(myNewSet.size());
console.log(myNewSet.values());
// console.log(myNewSet.remove('asman'));
console.log('Union :',myNewSet.union([1,2,4,'a']));
console.log('Intersection :',myNewSet.intersection(new Set([1,2,4,5])));
console.log('Difference :',myNewSet.difference(new Set([1,2,4,5])));
console.log('is Subset :',myNewSet.subset(new Set([1,2,4,5,'asman','Aman'])));