import React from 'react'
import TextArea from './components/TextArea'
import DisplayCountBox from './components/DisplayCountBox'
import DensityGraph from './components/DensityGraph';
import Title from './components/Title';
import Logo from './components/Logo';
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
    <main className='flow'>
      <Logo/>
      <Title/>
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
      <DensityGraph text={text}/>
    </main>
    )
}
