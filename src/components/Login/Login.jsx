import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={'input'}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} name={"rememberMe"} type={'checkbox'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData)=> {
        console.log(formData);
        props.login(formData)
    }
    return (<div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {login})(Login);