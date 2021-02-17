import React from "react";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router";
import s from "../common/FormsControls/FormControl.module.css"
import cn from "classnames"


const LoginForm = (props) => {
    return (
        <div >
           {/* <form onSubmit={props.handleSubmit}>
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
            </form>*/}
            <Formik
                initialValues={{ email: '', password: '', captcha: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting,setFieldError }) => {
                        props.login(values)
                            .then((error) => {
                                    if (error) {
                                        setFieldError("password", error)
                                    }
                                })
                            .finally(() => {
                                setSubmitting(false);
                            });
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={cn(s.form, {[s.formM]: props.isMobile})}>
                        <Field type="email" name="email" placeholder={"E-mail"} />
                        <ErrorMessage name="email" component="div" className={s.error}/>
                        <Field type="password" name="password" placeholder={"password"} />
                        <ErrorMessage name="password" component="div" className={s.formSummaryError}/>
                        <div><Field type="checkbox" name="rememberMe" />remember me</div>
                        {props.captchaURL? <>
                            <img src={props.captchaURL} alt="captcha" />
                            <Field placeholder={"Captcha"} name={"captcha"} type={"input"} component="input"
                                   validate={[required]}/>
                        </>:null}
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                        <h1>Test auth data:</h1>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </Form>
                )}
            </Formik>
        </div>

    );
};
/*
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
*/

const Login = (props) => {
    /*const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)
    }*/
    if (props.isAuth) return <Redirect to='/profile'/>
    return (<>
            <LoginForm captchaURL={props.captchaURL} login={props.login} isMobile={props.isMobile}/>
        </>
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