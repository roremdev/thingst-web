import Card from '.'

export default {
    title: 'Components/Containers/Card',
    component: Card,
    args: {
        handleClick: () => {},
    },
}

export const Default = (args) => <Card {...args} />
