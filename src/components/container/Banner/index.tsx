import InputSearch from '@baseComponents/Input/Search'
import IconAction from '@baseComponents/Button/IconAction'

export default () => {
    const handleClick = () => {
        console.log('handleClick')
    }

    return (
        <header className="px-6 md:px-[184px] py-12 flex justify-between items-center">
            <InputSearch />
            <IconAction handleClick={handleClick}>
                <div className="bg-filter w-full h-full"></div>
            </IconAction>
        </header>
    )
}
