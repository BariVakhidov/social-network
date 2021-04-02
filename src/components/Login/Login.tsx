import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Formik, Form, Field, ErrorMessage, FormikErrors, FormikValues } from 'formik';
import { required } from '../../utils/validators/validators';
import { Redirect } from 'react-router';
import s from '../common/FormsControls/FormControl.module.css';
import cn from 'classnames';
import { LoginData } from '../../types/intefaces';
import { AppThunk, RootState } from '../../redux/redux-store';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

export interface LoginFormProps {
  login: (data: LoginData) => ThunkAction<Promise<string[] | undefined>,
  RootState,
  unknown,
  Action<string>>;
  isMobile: boolean;
  captchaURL: string | null;
}
const LoginForm: React.FC<LoginFormProps> = ({
  login,
  isMobile,
  captchaURL,
}) => {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '', captcha: '' }}
        validate={(values) => {
          const errors:FormikErrors<FormikValues>= {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
         const error = await login(values);
              if (error) {
                setFieldError('password', error.toString());
              }
              setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={cn(s.form, { [s.formM]: isMobile })}>
            <Field type="email" name="email" placeholder={'E-mail'} />
            <ErrorMessage name="email" component="div" className={s.error} />
            <Field type="password" name="password" placeholder={'password'} />
            <ErrorMessage
              name="password"
              component="div"
              className={s.formSummaryError}
            />
            <div>
              <Field type="checkbox" name="rememberMe" />
              remember me
            </div>
            {captchaURL ? (
              <>
                <img src={captchaURL} alt="captcha" />
                <Field
                  placeholder={'Captcha'}
                  name={'captcha'}
                  type={'input'}
                  component="input"
                  validate={[required]}
                />
              </>
            ) : null}
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

export interface LoginProps {
  isMobile: boolean;
}
const Login: React.FC<LoginProps> = ({ isMobile }) => {
  const { isAuth, captchaURL } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  if (isAuth) return <Redirect to="/profile" />;
  return (
    <>
      <LoginForm captchaURL={captchaURL} login={(data:LoginData)=> dispatch(login(data))} isMobile={isMobile} />
    </>
  );
};
export default Login
