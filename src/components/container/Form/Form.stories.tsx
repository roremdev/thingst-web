import Form from '.'
import Input from '@baseComponents/Input'
import Button from '@baseComponents/Button'

export default {
    title: 'Components/Containers/Form',
    component: Form,
    args: {
        onclick: () => {
            console.log('clicked')
        },
    },
}

export const Login = ({ onclick }) => (
    <Form title="Login">
        <div>
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
        </div>
        <div className="form-submit">
            <Button text="Enter" handleClick={onclick} />
            <a href="#">
                <b>Register</b>
            </a>
        </div>
    </Form>
)
export const Register = ({ onclick }) => (
    <Form title="Register">
        <div>
            <Input label="Full name" type="text" />
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
        </div>
        <div className="form-submit">
            <Button text="Enter" handleClick={onclick} />
            <a href="#">
                <b className="text-gray-bold">Register</b>
            </a>
        </div>
    </Form>
)
