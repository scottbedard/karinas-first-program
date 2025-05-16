// 379,212 <- original two dictionaries
// 379,869 <- mit
// 381,193 <- some random github repo
// 387,978 <- university of michigan
// 621,122 <- kaggle

import fs from 'node:fs'

const dictionary = fs.readFileSync('dictionary.txt', 'utf8').split('\n')

// const add = fs.readFileSync('add.txt', 'utf8').split('\n')

// const combined = add
//   .concat(dictionary)
//   .filter(str => str.match(/^[a-zA-Z]+$/))
//   .sort()
//   .map(str => str.toLowerCase())

// const unique = [...new Set(combined)]

// fs.writeFileSync('combined.txt', unique.join('\n'))

const cipher = "enpiadh"

const wordLength = 8

const requiredLetters = 'i'

const forbiddenLetters = ''

const startsWith = 'pi'

function checkifwordisvalid (word) {      
  const length = word.length

  for (let i = 0; i < length; i++) {
    const currentletter = word[i]

    if (cipher.includes(currentletter) === false) {
      return false
    }
  }

  return true
}

for (const word of dictionary) {
  if (wordLength && word.length !== wordLength){
    continue
  }

  if (startsWith && !word.startsWith(startsWith)){
    continue
  }

  let hasRequiredLetters = true

  for (const letter of requiredLetters.split('')){
    if (!word.includes(letter)){
      hasRequiredLetters = false
      break
    }
  }

  if (!hasRequiredLetters) {
    continue
  }

  let hasForbiddenLetters = false

  for (const letter of forbiddenLetters.split('')){
    if (word.includes(letter)){
      hasForbiddenLetters = true
      break
    }
  }

  if (hasForbiddenLetters) {
    continue
  }

  if (checkifwordisvalid(word)) {
    console.log(word)
  }
}
