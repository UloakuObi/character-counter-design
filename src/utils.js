// Helper functions


// Count Words
export function getWordCount(text) {
    const re = /[\s,\.!?:;"()-]+/g

    // Replace unwanted character to clean up text
    const cleanText = text.replaceAll(re, " ").replaceAll(/[']/g, "")
    const splitText = cleanText.trim().split(" ") // Split on whitespace
    const finalText = splitText.filter(word => (word != "")) // Filter off empty strings
    return finalText.length
}

// Count Sentences
export function getSentenceCount(text) {
    const re = /[\.?]/g

    const cleanText = text.replaceAll(/[\s!]+/g, " ")
    const splitText = cleanText.trim().split(re)
    const finalText = splitText.filter(word => (word != ""))
    return finalText.length
}

// Character freq count for letter density graph
export function getLetterFreq(text) {
    const textArray = text.toUpperCase().split(" ").join("").split("")

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
