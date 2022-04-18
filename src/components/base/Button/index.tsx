export default ({ handleClick, text, color = '#4C566A' }) => (
    <button
        aria-label="Button"
        className="text-white justify-self-center"
        style={{
            backgroundColor: color,
        }}
        onClick={handleClick}
    >
        {text}
    </button>
)
