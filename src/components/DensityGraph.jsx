import DensityBar from "./DensityBar"
import { getLetterDensity } from "../utils"

export default function DensityGraph({text}) {
    const letterDensity = getLetterDensity(text)

    const letterDensityGraphEl = letterDensity.map((letterObj, idx) => (
        <DensityBar key={idx}
                    letter={letterObj.letter} 
                    count={letterObj.count} 
                    percentage={letterObj.percentage}/>
    ))
    return (
        <>
            {letterDensityGraphEl}
        </>
    )
}