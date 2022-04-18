import ButtonIcon from './ButtonIcon'

export default {
    title: 'Components/Base/Button/ButtonIcon',
    component: ButtonIcon,
    args: {
        vector: 'dollar',
        onClick: () => {
            console.log('clicked')
        },
    },
    argTypes: {
        vector: {
            description: 'Coin vector name',
            control: {
                type: 'select',
            },
            options: ['dollar', 'euro'],
        },
    },
}

export const ButtonDollar = () => (
    <ButtonIcon>
        <div className="bg-dollar w-full h-full"></div>
    </ButtonIcon>
)
