// Palindrome elements
const palindromInputField = document.querySelector('[name="word"]')
const submitPalindromeBtn = document.querySelector('[name="check-palindrom"]')
let response = document.getElementById('palindrom-response')

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
      response.innerHTML = `Yes, ${stringToVerify} is a Palindrome`
      response.style.visibility = 'visible'
      response.style.color = 'white'
    } else {
      response.innerHTML = `NO, ${stringToVerify} isn't Palindrome`
      response.style.visibility = 'visible'
      response.style.color = 'red'
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
