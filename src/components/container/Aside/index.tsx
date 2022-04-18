import IconAction from '@baseComponents/Button/IconAction'
import Form from '@containerComponents/Form'
import Input from '@baseComponents/Input'
import Button from '@baseComponents/Button'

export default ({ handleClick }) => (
    <aside className="aside aside_hidden">
        <IconAction handleClick={handleClick}>
            <div className="bg-cross icon w-[18px] h-[18px]"></div>
        </IconAction>
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
    </aside>
)
