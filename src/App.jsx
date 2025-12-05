import React from 'react'
import TextArea from './components/TextArea'
import DisplayCountBox from './components/DisplayCountBox'
import { getLetterFreq, 
        getWordCount, 
        getSentenceCount, 
        getCharacterCount } from "./utils";

export default function App() {
  // State Values
  const [text, setText] = React.useState("")
  const [excludeSpaces, setExcludeSpaces] = React.useState(false)

  const textCount = getCharacterCount(text, excludeSpaces)
  // Count words
  const wordCount = getWordCount(text)
  //console.log(`Word Count: ${wordCount}`)

  // Count sentences
  const sentenceCount = getSentenceCount(text)
  //console.log(`Sentence Count: ${sentenceCount}`)

  const letterDensity = getLetterFreq(text)
  // console.log(letterDensity)

  return (
    <>
      <h1>This is the main App!</h1>
      <TextArea 
        text={text} 
        setText={setText}
        excludeSpaces={excludeSpaces}
        setExcludeSpaces={setExcludeSpaces}
        textCount={textCount}
      /> 

      <DisplayCountBox 
        textCount={textCount}
        wordCount={wordCount}
        sentenceCount={sentenceCount}
        excludeSpaces={excludeSpaces}
      />
    </>
    )
}



// Analyze your text in real-time.

// Start typing here… (or paste your text)

// Exclude Spaces
// Set Character Limit

// Approx. reading time: <!-- Insert number --> minutes

// <!-- Insert number -->
// Total Characters

// <!-- Insert number -->
// Word Count

// <!-- Insert number -->
// Sentence Count

// Letter Density
// No characters found. Start typing to see letter density.