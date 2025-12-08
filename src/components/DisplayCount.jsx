export default function DisplayCount({count, variant, excludeSpaces}) {

    let display;
    let bgImg;

    if (variant==="text") {
        display = "Text Characters"
        bgImg = "text-count"
    }

    if (variant==="text" && excludeSpaces) {
        display = "Text Characters (no space)"
        bgImg = "text-count"
    }

    if (variant==="word") {
        display = "Word Count"
        bgImg = "word-count"
    }
    
    if (variant==="sentence") {
        display = "Sentence Count"
        bgImg = "sentence-count"
    }

    function formatCount(n) {
        return String(n).padStart(2, "0");
      }

    return (
        <div className={`${bgImg} display-count-box rounded-lg`}>
            <div className="display-count">
                <h2 className=" fs-1 font-bold leading-none">{formatCount(count)}</h2>
                <p className="font-normal">{display}</p>
            </div>
        </div>
    )
}
