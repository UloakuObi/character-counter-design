export default function DisplayCount({count, variant}) {

    let display;
    let bgImg;

    if (variant==="text") {
        display = "Text Characters"
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

    return (
        <div className={`${bgImg} display-count-box rounded-lg`}>
            <h2>{count}</h2>
            <p>{display}</p>
        </div>
    )
}
