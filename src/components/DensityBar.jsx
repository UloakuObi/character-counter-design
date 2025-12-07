export default function DensityBar({letter, count, percentage}) {
    return (
        <div className="flex items-center justify-between gap-1 density-bar">
            <p className="letter">{letter}</p>
            <progress className="rounded-xl" max="100" value={percentage}>{percentage}</progress>
            <p className="count">{`${count} (${percentage}%)`}</p>
        </div>
    )
}