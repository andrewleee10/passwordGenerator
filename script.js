
//PROMPTS FOR PASSWORD
document.getElementById('generate').addEventListener('click', () => {
  let length = prompt('How long would you like your password? (min 8 char, max 128 char)')
  let lowerCase = confirm('Inlcude lowercase letters?')
  let upperCase = confirm('Include uppercase letters?')
  let numbers = confirm('Include numbers?')
  let symbols = confirm('Include symbols?')
  
  console.log(length, lowerCase, upperCase, numbers, symbols)

// SETTING VARIABLES FOR EMPTY STRINGS
  let charSet = ''
  let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz'
  let upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numberSet = '1234567890'
  let symbolSet = '!@#$%^&*()'

  let newPass = ''

// LOGIC
  if(lowerCase) {
    charSet += lowerAlpha
  }
  if(upperCase) {
    charSet += upperAlpha
  }
  if(numbers) {
    charSet += numberSet
  }
  if(symbols) {
    charSet += symbolSet
  }

  console.log(charSet)

// GENERATING RANDOM PASSWORD
  for (let i=0; i<length; i++) {
      newPass += charSet[Math.floor(Math.random() * charSet.length)]
  }

  console.log(newPass)

  // DISPLAYING NEW PASSWORD
  let placeholder = document.getElementById('password').placeholder = newPass
})



