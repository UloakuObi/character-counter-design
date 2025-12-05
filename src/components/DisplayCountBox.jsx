import React from "react"
import DisplayCount from "./DisplayCount";

export default function DisplayCountBox({ textCount, wordCount, sentenceCount, excludeSpaces}) {
    // const {textCount, wordCount, sentenceCount} = React.useContext(CountContext)

    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {excludeSpaces ? 
                <DisplayCount variant="text" count={textCount} excludeSpaces={excludeSpaces}/> 
                : <DisplayCount variant="text" count={textCount}/>}
            <DisplayCount variant="word" count={wordCount}/>
            <DisplayCount variant="sentence" count={sentenceCount}/>
        </div>
    )
}