// Helper functions

// Count Characters
export function getCharacterCount(text, excludeSpaces) {
     // Count characters (with and without space)
     let textCount;

     if (excludeSpaces) {
         textCount = text.split(" ").join("").split("").length
     } else {
         textCount = text.split("").length
     }

     return textCount
}

// Cleanup text
export function getCleanText(text) {
    const re = /[\s,\.!?:;"()-]+/g

    // Replace unwanted character to clean up text
    const cleanText = text.replaceAll(re, " ").replaceAll(/[']/g, "")
    const splitText = cleanText.trim().split(" ") // Split on whitespace
    const finalText = splitText.filter(word => (word != "")) // Filter off empty strings
    return finalText
}

// Count Words
export function getWordCount(text) {
    const cleanText = getCleanText(text)
    return cleanText.length
}


// export function getWordCount(text) {
//     const re = /[\s,\.!?:;"()-]+/g

//     // Replace unwanted character to clean up text
//     const cleanText = text.replaceAll(re, " ").replaceAll(/[']/g, "")
//     const splitText = cleanText.trim().split(" ") // Split on whitespace
//     const finalText = splitText.filter(word => (word != "")) // Filter off empty strings
//     return finalText.length
// }

// Count Sentences
export function getSentenceCount(text) {
    const re = /[\.?!]/g

    // const cleanText = text.replaceAll(/[\s!]+/g, " ")
    // const splitText = cleanText.trim().split(re)
    const splitText = text.trim().split(re)
    const finalText = splitText.filter(word => (word != ""))
    return finalText.length
}



// Character freq count for letter density graph
export function getLetterFreq(text) {
    const cleanText = getCleanText(text)
    const textArray = cleanText.join("").toUpperCase().split("")

    const LetterFreq = {}  

    // loop through an array of words and count unique letters
    textArray.forEach(letter => {
        if (LetterFreq[letter]) {
            LetterFreq[letter]++
        } else {
            LetterFreq[letter] = 1
        }
    })

    // Sort the letters by their count values
    const sortedDesc = Object.fromEntries(
        Object.entries(LetterFreq).sort((a, b) => b[1] - a[1])
      )
    
    return sortedDesc

}

export function getLetterDensity(text) {
    const letterfreq = getLetterFreq(text)
    
    const sumText = Object.values(letterfreq).reduce((total, current) => current + total, 0)
    
    const density = Object.values(letterfreq).map((freq) => {
      const density = ((freq/sumText) * 100).toFixed(2)
      return [freq, density]
      
    })
    
    const letterDensity = []
    const keys = Object.keys(letterfreq)
    
    keys.forEach((_, idx) => {
      letterDensity.push({
        letter: keys[idx],
        count: density[idx][0],
        percentage: density[idx][1]})
    }) 
    
    return letterDensity
  }
  

// Calculate Reading Time
export function getReadTime(text) {
    const averageWPM = 200
    const wordCount = getWordCount(text)
    const readTime = Math.ceil(wordCount / averageWPM)

    if(readTime === 0) {
        return `0 minute`
    } else if (readTime <= 1) {
        return `<${readTime} minute`
    } else {
        return `<${readTime} minutes`
    }
}
