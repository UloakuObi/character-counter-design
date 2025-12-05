import React from "react"
import LimitReachedPopup from "./LimitReachedPopup";
import { getReadTime } from "../utils";

export default function TextArea({text, setText, excludeSpaces, setExcludeSpaces, textCount}) {
    // Set state values
    const [hasLimit, setHasLimit] = React.useState(false)
    const [limitValue, setLimitValue] = React.useState(null)

    const readingTime = getReadTime(text)   

    const limitReached = (Number(limitValue) != 0) && (Number(textCount) + 1 > Number(limitValue))
    // console.log(Number(textCount))
    // console.log(Number(limitValue))
    // console.log(limitReached)

    //console.log(`Text Count: ${textCount}`)

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

            {limitReached &&  <LimitReachedPopup limitValue={limitValue}/>}

            <div className="flex flex-col md:flex-row justify-between gap-2 mt-3">
                <div className="flex flex-col md:flex-row gap-2 lg:gap-6">
                    <label className="checkbox">
                        <input className="checkbox" type="checkbox" name="excludeSpaces"
                            onChange={e => setExcludeSpaces(e.target.checked)} 
                        />
                        <span className="custom"></span>
                        Exclude Spaces
                    </label>

                    <div className="flex content-center gap-3">
                        <label className="checkbox">
                            <input className="checkbox" type="checkbox" name="hasLimit"
                                onChange={e => setHasLimit(e.target.checked)} 
                            />
                            <span className="custom"></span>
                            Set Character Limit
                        </label>

                        <label htmlFor="characterLimit" className="sr-only">Enter Character Limit</label>
                        {hasLimit && <input type="text" 
                                            name="characteLimit" 
                                            id="characterLimit" 
                                            className="limitbox"
                                            onChange={(e) => setLimitValue(e.target.value)}/>}
                    </div>
                </div>
                <p>Approx. reading time: {readingTime}</p>
            </div>
           
        </>
    )
}