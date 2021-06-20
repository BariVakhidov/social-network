import React, { FC } from 'react';
import s from './Chat.module.css';
import { Formik, Form, Field } from 'formik';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../redux/chat/thunk';
import { RootState } from '../../redux/redux-store';
import { StatusType } from '../../redux/chat/types';

export const AddMessageForm: FC = React.memo(() => {
    const { status } = useSelector((state: RootState) => state.chat);
    const dispatch = useDispatch();
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ message: '' }}
                onSubmit={(values, { resetForm }) => {
                    dispatch(sendMessage(values.message));
                    resetForm();
                }}
            >
                {({ isSubmitting, setFieldValue, values }) => (
                    <Form className={s.form}>
                        <Field
                            type="text"
                            name="message"
                            as="textarea"
                            placeholder="Enter your message..."
                        />
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={status !== StatusType.READY}
                        >
                            Sent
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
});
