// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

var encryptThis = function(text) {
    // We concatenate a space at the end of the text so we can use it as marker in the for loop to create a new array arrmsg. When it detects a space in the if condition, it will use the splice function to push the elements to the array using the indices i and j
    text = text.concat(' ')
    // console.log(msg.slice(0,5))
    // console.log(msg.slice(6,11))

    arrmsg = []
    let j = 0
    for(i=0; i<=text.length-1; i++){
        if(text[i] == ' '){
            arrmsg.push(text.slice(j,i))
            j = i + 1
        }
    }
    // We create another array encryptmsg and use the for loop to create a new string with ASCII character. Then we convert it to a string and use the replace function to omit all the commas
    encryptmsg = []
    for(i=0; i<=arrmsg.length-1; i++){
        firstchar = arrmsg[i].charCodeAt(0)
        char2 = arrmsg[i][arrmsg[i].length-1]
        midstring = arrmsg[i].substring(2,arrmsg[i].length-1)
        lastchar = arrmsg[i][1]
        encryptmsg.push(`${firstchar}${char2}${midstring}${lastchar}`)
    }
    encryptmsg = encryptmsg.toString()
    const finalmsg = encryptmsg.replace(/,/g, ' ');
    console.log(finalmsg);

}
encryptThis('hello world')
console.log('=====')
encryptThis('Hello')
console.log('=====')
encryptThis('good')
console.log('=====')
encryptThis('All we hear is radio ga ga Radio goo goo Radio ga ga All we hear is radio ga ga Radio blah blah Radio whats new Radio someone still loves you')