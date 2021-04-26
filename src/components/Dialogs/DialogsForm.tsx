import s from "./Dialogs.module.css";
import {ErrorMessage, Field, Form, Formik, FormikErrors, FormikValues} from "formik";
import StyledButton from "../common/StyledButton";
import React from "react";
import {useDispatch} from "react-redux";
import {sendMessage} from "../../redux/dialogs/action-creators";
import {Message} from "../../types/intefaces";

type Props = {
    messagesData:Array<Message>
}
export const DialogsForm:React.FC<Props> = ({messagesData}) => {
    console.log(messagesData.length)
    const dispatch = useDispatch();
    return (
        <div className={s.sentMessage}>
            <Formik
                initialValues={{ message: ''}}
                validate={values => {
                    const errors:FormikErrors<FormikValues> = {};
                    if (!values.message) {
                        errors.message = 'Required';
                    } else if (values.message.length > 50) {
                        errors.message = 'Max length 50'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(sendMessage(values.message, messagesData.length + 1))
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="message" name="message" placeholder="New message" />
                        <ErrorMessage name="message" component="div" />
                        <StyledButton type="submit" disabled={isSubmitting}>
                            Отправить
                        </StyledButton>
                    </Form>
                )}
            </Formik>
        </div>
    )
}