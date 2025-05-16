import fs from 'node:fs'

const dictionary = fs.readFileSync('dictionary.txt', 'utf8').split('\n')

const awesome = "bishhhhhh"
const cipher = "enpiadh"

function checkifwordisvalid (word) {      
  const length = word.length

  if (length !== 7) {
    return false
  }


  for (let i = 0; i < length; i++) {
    const currentletter = word[i]

    if (cipher.includes(currentletter) === false) {
      return false
    }
  }
  return true
}

for (const word of dictionary) {
  // if (word.length != 5 && word.legnth != 8 && word.length != 9) {
  //   continue
  // }

  // if (word.length != 9){
  //   continue
  // }

  if (word.includes("i") === false) {
    continue
  }

  if (word.startsWith("he") === false) {
    continue
  }

  // const firstletter = word[0] 
  // if (firstletter != "c") {
  //   continue
  // }

  if (checkifwordisvalid(word)) {
    console.log(word)
  }
}
