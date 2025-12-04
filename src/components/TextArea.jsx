import React from "react"
import { getLetterFreq, getWordCount, getSentenceCount } from "../utils";

export default function TextArea() {

    // Set text in state
    const [text, setText] = React.useState("")
    const [excludeSpaces, setExcludeSpaces] = React.useState(false)
    const [hasLimit, setHasLimit] = React.useState(false)
    const [limitValue, setLimitValue] = React.useState(null)

    const readingTime = `0 minute`

    // Count characters (with and without space)
    let textCount;

    if (excludeSpaces) {
        textCount = text.split(" ").join("").split("").length
    } else {
        textCount = text.split("").length
    }
    
    //console.log(`Text Count: ${textCount}`)

    // Count words
    const wordCount = getWordCount(text)
    //console.log(`Word Count: ${wordCount}`)

    // Count sentences
    const sentenceCount = getSentenceCount(text)
    //console.log(`Sentence Count: ${sentenceCount}`)

    const letterDensity = getLetterFreq(text)
    // console.log(letterDensity)

    function clearLimitValue() {
        if (!hasLimit) {
            setLimitValue(null)
        }}

    React.useEffect(() => clearLimitValue(), [hasLimit])


    return (
        <>
            <label htmlFor="text" className="sr-only">Enter your text:</label>
            <textarea 
                    id="text" 
                    name="text" 
                    onChange={e => setText(e.target.value)}
                    placeholder="Start typing here… (or paste your text)"
                    maxLength={limitValue}></textarea>

            <div>
                <div>
                    <label>
                        <input type="checkbox" name="excludeSpaces"
                            onChange={e => setExcludeSpaces(e.target.checked)} 
                        />
                        Exclude Spaces
                    </label>

                    <label>
                        <input type="checkbox" name="hasLimit"
                            onChange={e => setHasLimit(e.target.checked)} 
                        />
                        Set Character Limit
                    </label>

                    <label htmlFor="characterLimit" className="sr-only">Enter Character Limit</label>
                    {hasLimit && <input type="text" 
                                        name="characteLimit" 
                                        id="characterLimit" 
                                        onChange={(e) => setLimitValue(e.target.value)}/>}
                </div>
                <p>Approx. reading time: {readingTime}</p>
            </div>
        </>
    )
}