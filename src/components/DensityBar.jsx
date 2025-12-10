export default function DensityBar({letter, count, percentage}) {
    return (
        <div className="flex items-center justify-between gap-1 density-bar">
            <p className="letter">{letter}</p>
            <progress max="100" value={Number(percentage)}>{percentage}</progress>
            <p className="count">{`${count} (${percentage}%)`}</p>
        </div>
    )
}