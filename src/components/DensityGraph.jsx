import { useState } from "react"
import DensityBar from "./DensityBar"
import { getLetterDensity } from "../utils"

export default function DensityGraph({text}) {
    const letterDensity = getLetterDensity(text)

    const [showAll, setShowAll] = useState(false);

    const letterDensityGraphEl = letterDensity.map((letterObj, idx) => (
        <DensityBar key={idx}
                    letter={letterObj.letter} 
                    count={letterObj.count} 
                    percentage={letterObj.percentage}/>
    ))

    const visibleBars = showAll ? letterDensityGraphEl  : letterDensityGraphEl .slice(0, 5);

    return (
        <div className="mt-10 mb-10">
            <h3 className="fs-2 fw-bold mb-4">Letter Density</h3>
            {visibleBars.length > 0 ? visibleBars 
            : <p className="fs-4">No characters found. Start typing to see letter density.</p>}

            {letterDensityGraphEl.length > 5 && (
                    <button className="mt-4"
                        onClick={() => setShowAll(prev => !prev)}
                    >
                    {showAll ? 
                    (<>
                        See less <i className="bi bi-chevron-up"></i>
                    </> 
                    ) : (
                    <>
                        See more <i className="bi bi-chevron-down"></i>
                    </>)
                    }
                    </button>
                )}
        </div>
    )
}