export default ({ title, children }) => {
    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <form>
            <h3>{title}</h3>
            {children}
        </form>
    )
}
