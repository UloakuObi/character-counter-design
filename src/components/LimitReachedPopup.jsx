import infoIcon from "/assets/images/icon-info.svg"

export default function({ limitValue }) {
    return (
        <div className="flex content-center gap-2 mt-3">
            <img src={infoIcon} alt=""/>
            <small className="red-highlight">Limit reached! Your text exceeds {limitValue} characters.</small>
        </div>
    )
}