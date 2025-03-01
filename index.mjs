import { dictionary } from './dictionary.mjs'
const awesome = "bishhhhhh"
const letters = "icekndp"

function words (word) {      
  const length = word.length

  for (let i = 0; i < length; i++) {
    const currentletter = word[i]

    if (letters.includes(currentletter) == false) {
      return false
    }
  }
  return true
}

for (const word of dictionary) {
  // if (word.length != 5 && word.legnth != 8 && word.length != 9) {
  //   continue
  // }

  if (word.length <= 4 && word.length <= 12){
    continue
  }

  if (word.includes("p") == false) {
    continue
  }

  // const firstletter = word[0] 
  // if (firstletter != "c") {
  //   continue
  // }

  if (words(word)) {
    console.log(word)
  }
}
