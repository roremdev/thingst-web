import Navbar from './'

export default {
    title: 'Components/Containers/Navbar',
    component: Navbar,
    args: {
        handleClick: () => {},
    },
}

export const Default = (args) => <Navbar {...args} />
