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
        <div className="mt-10 mb-10">
            <h3 className="fs-2 fw-bold mb-4">Letter Density</h3>
            {letterDensity.length > 0 ? letterDensityGraphEl 
            : <p className="fs-4">No characters found. Start typing to see letter density.</p>}
        </div>
    )
}