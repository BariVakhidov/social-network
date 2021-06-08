import React, {FC} from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '../common/StyledButton';
import { Filter } from '../../redux/users/types';

interface UsersSearchFormValues {
  term: string;
  friend: string
}

interface Props {
  onSearch: (filter: Filter) => void;
}

const convertor = (friend: string) => {
  switch (friend) {
    case "true": 
      return true
    case "false":
      return false
    default: 
      return null
  }
}

export const UsersSearchForm: FC<Props> = ({onSearch}) => {
  const submit = (
    values: UsersSearchFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    onSearch({term: values.term, friend: convertor(values.friend)});
    setSubmitting(false);
  };

  return (
    <Formik initialValues={{ term: '', friend: ''}} onSubmit={submit}>
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" />
          <Field as="select" name="friend">
              <option value="">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
          </Field>
          <Button type="submit" disabled={isSubmitting}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};
