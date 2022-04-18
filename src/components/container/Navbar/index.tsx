import IconAction from '@baseComponents/Button/IconAction'
import ButtonIcon from '@baseComponents/Button/ButtonIcon'

export default ({ handleClick }) => (
    <header className="px-6 md:px-[184px] pt-12 pb-3 flex justify-between items-center bg-white border-b-2 border-b-gray-soft">
        <div className="logo"></div>
        <div className="grid grid-cols-2 gap-2">
            <ButtonIcon>
                <div className="bg-dollar w-full h-full"></div>
            </ButtonIcon>
            <IconAction handleClick={handleClick}>
                <div className="bg-car w-full h-full"></div>
            </IconAction>
        </div>
    </header>
)
