// Palindrome elements
const palindromInputField = document.querySelector('[name="word"]')
const submitPalindromeBtn = document.querySelector('[name="check-palindrom"]')
let palindromeResponse = document.getElementById('palindrom-response')

// Palindrome event listener for click and pressing enter
submitPalindromeBtn.addEventListener('click', checkWord)
palindromInputField.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    checkWord()
  } else {
    return
  }
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
  } else {
    return
  }
})

// convert Roman Numeral to number event listener for click and pressing enter

numeralConvertBtn.addEventListener('click', checkNumeral)
numeralConvertInputField.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    checkNumeral()
  } else {
    return
  }
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
