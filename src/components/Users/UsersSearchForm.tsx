import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
//import Button from '../common/StyledButton';
import { Filter } from '../../redux/users/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { Button } from 'antd';

const { Option } = Select;
interface UsersSearchFormValues {
  term: string;
  friend: string;
}

interface Props {
  onSearch: (filter: Filter) => void;
}

export const convertor = (friend: string) => {
  switch (friend) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return null;
  }
};

export const UsersSearchForm: FC<Props> = ({ onSearch }) => {
  const filter = useSelector((state: RootState) => state.usersPage.filter);

  const submit = (
    values: UsersSearchFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    onSearch({ term: values.term, friend: convertor(values.friend) });
    setSubmitting(false);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{ term: filter.term, friend: String(filter.friend) }}
      onSubmit={submit}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          {/* <Field type="text" name="term" /> */}
          <Input
            style={{ width: 160, marginRight: 10 }}
            placeholder="Enter username..."
            prefix={<SearchOutlined />}
            value={values.term}
            onChange={(value) => {
              setFieldValue('term', value.currentTarget.value);
            }}
          />
          {/* <Field as="select" name="friend">
            <option value="">All</option>
            <option value="true">Only followed</option>
            <option value="false">Only unfollowed</option>
          </Field> */}
          <Select
            value={values.friend}
            style={{ width: 160, marginRight: 10 }}
            onChange={(value) => {
              setFieldValue('friend', value);
            }}
          >
            <Option value="null">All</Option>
            <Option value="true">Only followed</Option>
            <Option value="false">Only unfollowed</Option>
          </Select>
          <Button type="primary" htmlType="submit" disabled={isSubmitting}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};
