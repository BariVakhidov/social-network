import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControls/FormsControl";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router";
import s from "../common/FormsControls/FormControl.module.css"
import cn from "classnames"

const LoginForm = (props) => {
    return (
        <div className={cn(s.form, {[s.formM]: props.isMobile})}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"email"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={"password"} component={Input}
                           validate={[required]}/>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <Field component={Input} name={"rememberMe"} type={'checkbox'}/><div>remember me</div>
                </div>
                {props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>}
                {props.captchaURL? <div>
                    <img src={props.captchaURL} alt="captcha" />
                    <Field placeholder={"Captcha"} name={"captcha"} type={"captcha"} component={Input}
                           validate={[required]}/>
                </div>:null}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>

    );
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)
    }
    if (props.isAuth) return <Redirect to='/profile'/>
    return (<div>
            <LoginReduxForm captchaURL={props.captchaURL} isMobile={props.isMobile} onSubmit={onSubmit}/>
        </div>
    );
};
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL,
        blackTheme: state.app.blackTheme
    }
}

export default connect(mapStateToProps, {login})(Login);