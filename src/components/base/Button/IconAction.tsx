export default ({ handleClick, children }) => (
    <button
        aria-label="Button Icon"
        className="icon h-12 w-12 p-1.5 flex justify-center items-center rounded-lg hover:bg-primary-soft hover:cursor-pointer ease-out transition-colors duration-300"
        onClick={handleClick}
    >
        {children}
    </button>
)
