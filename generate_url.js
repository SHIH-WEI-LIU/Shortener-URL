// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateUrl function
function generateUrl() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  // create a collection to store things user picked up
  let collection = []
  let arrayLowerCaseLetters = lowerCaseLetters.split('')
  let arrayUpperCaseLetters = upperCaseLetters.split('')
  let arrayNumbers = numbers.split('')
  collection = collection.concat(arrayLowerCaseLetters).concat(arrayUpperCaseLetters).concat(arrayNumbers)



  // start generating url
  let shortUrl = ''
  for (let i = 0; i < 5; i++) {
    shortUrl += sample(collection)
  }

  // return the generated url
  return shortUrl
}


// export generateUrl function for other files to use
module.exports = generateUrl
