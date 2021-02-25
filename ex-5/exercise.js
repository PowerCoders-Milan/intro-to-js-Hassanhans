// Example
var insertWord = prompt('Please enter your word')
alert(insertWord + ' Have ' + insertWord.length + ' numbers of characters')


alert('Can I have two different words')
var insertWord2 =  prompt( 'Please enter your word')
var insertWord3 = prompt( 'Please enter your second word')

if (insertWord2.length > insertWord3.length){
    alert(insertWord2 + ' word is the longest with ' + insertWord3.length + ' number of characters ')
}
 else if (insertWord3.length > insertWord2.length){
    alert(insertWord3 + ' word is the longest with' + insertWord2.length + 'number of character')
}