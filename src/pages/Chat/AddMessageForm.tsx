import React, { FC } from 'react';
import s from './Chat.module.css';
import { Formik, Form, Field } from 'formik';
import { Button } from 'antd';
import { webSocket } from './Chat';

export const AddMessageForm: FC = () => {
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ message: '' }}
        onSubmit={(values, { resetForm }) => {
          webSocket.send(values.message);
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
            <Button type="primary" htmlType="submit">
              Sent
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
