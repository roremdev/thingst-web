import Button from '.'

export default {
    title: 'Components/Base/Button',
    component: Button,
    args: {
        text: 'Button',
        onClick: () => {
            console.log('clicked')
        },
    },
}

export const ButtonPrimary = (args) => <Button {...args} />
