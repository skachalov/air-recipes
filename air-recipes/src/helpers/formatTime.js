export default function formatTime(time) {
    return time / 60 <= 60
        ? `${formatNumber(time / 60)} min`
        : `${formatNumber(time / 60 / 60)} hours`
}

function formatNumber(number) {
    return Number.isInteger(number)
        ? number
        : number.toFixed(1)
}