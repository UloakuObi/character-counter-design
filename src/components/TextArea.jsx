import React from "react"
import { getLetterFreq, getWordCount, getSentenceCount } from "../utils";

export default function TextArea() {

    // Set text in state
    const [text, setText] = React.useState("")
    const [excludeSpaces, setExcludeSpaces] = React.useState(false)

    // Count characters (with and without space)
    let textCount;

    if (excludeSpaces) {
        textCount = text.split(" ").join("").split("").length
    } else {
        textCount = text.split("").length
    }
    
    console.log(`Text Count: ${textCount}`)

    // Count words
    const wordCount = getWordCount(text)
    console.log(`Word Count: ${wordCount}`)

    // Count sentences
    const sentenceCount = getSentenceCount(text)
    console.log(`Sentence Count: ${sentenceCount}`)

    const letterDensity = getLetterFreq(text)

    // console.log(letterDensity)

    return (
        <>
            <label htmlFor="text" className="sr-only">Enter your text:</label>
            <textarea 
                    id="text" 
                    name="text" 
                    onChange={e => setText(e.target.value)}
                    placeholder="Start typing here… (or paste your text)"></textarea>

            <label>
                <input type="checkbox" name="excludeSpaces"
                       onChange={e => setExcludeSpaces(e.target.checked)} 
                />
                Exclude Spaces
            </label>
        </>
    )
}