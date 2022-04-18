import IconAction from './IconAction'

export default {
    title: 'Components/Base/Button/IconAction',
    component: IconAction,
    args: {
        onClick: () => {
            console.log('clicked')
        },
    },
}

export const ButtonCar = (args) => (
    <IconAction {...args}>
        <div className="bg-car w-full h-full"></div>
    </IconAction>
)
export const ButtonFilter = (args) => (
    <IconAction {...args}>
        <div className="bg-filter w-full h-full"></div>
    </IconAction>
)
