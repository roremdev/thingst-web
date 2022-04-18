import Input from '.'

export default {
    title: 'Components/Base/Input',
    component: Input,
    args: {
        label: 'Input',
    },
}

export const Text = ({ label }) => <Input label={label} type="text" />
export const Password = ({ label }) => <Input label={label} type="password" />
