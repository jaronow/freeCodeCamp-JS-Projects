// Palindrome elements
const palindromInputField = document.querySelector('[name="word"]')
const submitPalindromeBtn = document.querySelector('[name="check-palindrom"]')
let palindromeResponse = document.getElementById('palindrom-response')

// Palindrome event listener for click and pressing enter
submitPalindromeBtn.addEventListener('click', checkWord)
palindromInputField.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    checkWord()
  }
  return
})

// function the checks the input word or words
function checkWord() {
  let stringToVerify = document.querySelector('[name="word"]').value
  if (stringToVerify != '') {
    if (palindrome(stringToVerify)) {
      palindromeResponse.innerHTML = `Yes, ${stringToVerify} is a Palindrome`
      palindromeResponse.style.visibility = 'visible'
      palindromeResponse.style.color = 'white'
    } else {
      palindromeResponse.innerHTML = `NO, ${stringToVerify} isn't Palindrome`
      palindromeResponse.style.visibility = 'visible'
      palindromeResponse.style.color = 'red'
    }
  }
  document.querySelector('[name="word"]').value = ''
}

// function to check if input is Palindrome or not
function palindrome(str) {
  // regex to replace anything not a letter or number
  const regEx = /([^a-z0-9]+)/gi
  // create the string to check from input
  const stringToCheck = str.replace(regEx, '').toLowerCase()
  // create the reverse of the input string
  const reverseString = stringToCheck.split('').reverse().join('')
  // check if both input string and reverse string match or not
  if (stringToCheck != reverseString) {
    return false
  } else {
    return true
  }
}

// Roman Numeral Elements

const numberConvertInputField = document.querySelector('[name="num"]')
const numberConvertBtn = document.querySelector('[name="convert-num"]')
const numeralConvertInputField = document.querySelector('[name="numeral"]')
const numeralConvertBtn = document.querySelector('[name="convert-numeral"]')
let convertResponse = document.getElementById('convert-response')

// convert number to Roman Numeral event listener for click and pressing enter

numberConvertBtn.addEventListener('click', checkNumber)
numberConvertInputField.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    checkNumber()
  }
  return
})

// convert Roman Numeral to number event listener for click and pressing enter

numeralConvertBtn.addEventListener('click', checkNumeral)
numeralConvertInputField.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    checkNumeral()
  }
  return
})

// function to check if valid number submitted and display results

function checkNumber() {
  let numberToConvert = document.querySelector('[name="num"]').value
  if (numberToConvert <= 0) {
    convertResponse.innerHTML = 'Please Input Number Greater Than 0'
  } else {
    const convertedNum = convertToRoman(numberToConvert)
    convertResponse.innerHTML = `${convertedNum}`
    convertResponse.style.visibility = 'visible'
  }
  document.querySelector('[name="num"]').value = ''
}

// function to check if valid numeral submitted and display results

function checkNumeral() {
  let numeralToConvert = document.querySelector('[name="numeral"]').value
  if (!convertToNumber(numeralToConvert)) {
    convertResponse.innerHTML = 'Please enter valid Roman Numeral'
    convertResponse.style.visibility = 'visible'
  } else {
    const converted = convertToNumber(numeralToConvert)
    convertResponse.innerHTML = `${converted}`
    convertResponse.style.visibility = 'visible'
  }
  document.querySelector('[name="numeral"]').value = ''
}

// function to convert number to roman numeral
function convertToRoman(num) {
  // key of roman numerals
    const romanKey = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    let roman = ''
    // loop to match submitted number to key
    for (let i in romanKey) {
        while (num >= romanKey[i]) {
          // sets the roman numeral based on the key and submitted num
            roman += i
            num -= romanKey[i]
        }
    }
    return roman
}

function convertToNumber(roman) {
  const string = roman.toUpperCase()
  const validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/
  const token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g
  const romanKey = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  let number = 0
  let m
  if (!(string && validator.test(string))) {
    return false
  }
  while (m = token.exec(string)) {
    number += romanKey[m[0]]
  }
  return number
}

// Caesars Cipher Elements

const cipherInputField = document.querySelector('[name="cipher"]')
const cipherBtn = document.querySelector('[name="cipher-submit"]')
let cipherResponse = document.getElementById('cipher-response')

// Caesars Cipher event listener for click and enter button

cipherInputField.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    startCipher()
  }
  return
})

cipherBtn.addEventListener('click', startCipher)

// function to grab the cipher to encode/decode and make sure its in uppercase

function startCipher() {
  let cipherCode = document.querySelector('[name="cipher"]').value
  cipherCode = cipherCode.toUpperCase()
  let message = rot13(cipherCode)
  cipherResponse.innerHTML = `${message}`
  cipherResponse.style.visibility = 'visible'
  document.querySelector('[name="cipher"]').value = ''
}

// function to decode cipher and return it

function rot13(str) {
  let message = []
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i)
    if (char < 65 || char > 90) {
      message.push(str[i])
    } else if (char < 78) {
      message.push(String.fromCharCode(char + 13))
    } else {
      message.push(String.fromCharCode(char - 13))
    }
  }
  return message.join('')
}

// Telephone Number Validator elements

const phoneInputField = document.querySelector('[name="phone"]')
const phoneBtn = document.querySelector('[name="phone-submit"]')
let phoneResonse = document.getElementById('phone-response')

// Telephone Number Validator event listener for click and enter button

phoneInputField.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    validatePhone()
  }
  return
})

phoneBtn.addEventListener('click', validatePhone)

// function to submit ph# to validate and display response

function validatePhone() {
  let phoneNum = document.querySelector('[name="phone"]').value
  if (telephoneCheck(phoneNum)) {
    phoneResonse.innerHTML = `${phoneNum} is VALID`
    phoneResonse.style.color = 'white'
    phoneResonse.style.visibility = 'visible'
  } else {
    phoneResonse.innerHTML = `${phoneNum} is INVALID!!!`
    phoneResonse.style.color = 'red'
    phoneResonse.style.visibility = 'visible'
  }
  document.querySelector('[name="phone"]').value = ''
}

// function that validates format of submitted phone number

function telephoneCheck(str) {
  // regex to check ph# for correct formatting
  const regEx = /^(1[\s-]?)?(\([1-9]\d\d\)|[1-9]\d\d)[\s-]?[1-9]\d\d[\s-]?\d{4}$/g
  // test ph# format and return true or false
  return regEx.test(str)
}
