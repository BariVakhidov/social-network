import s from "./ProfileInfo.module.css";
import {Formik, Form, Field, ErrorMessage} from 'formik';


const ProfileInfoForm = ({contacts, deactivateEditMode, profile, updateProfile}) => {
    return (
        <Formik
            initialValues={{
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                fullName: profile.fullName,
                userId: profile.userId,
                aboutMe: profile.aboutMe || "",
                contacts: {...contacts}
                /*facebook: contacts.facebook || "",
                github: contacts.github || "",
                instagram: contacts.instagram || "",
                mainLink: contacts.mainLink || "",
                twitter: contacts.twitter || "",
                vk: contacts.vk || "",
                website: contacts.website || "",
                youtube: contacts.youtube || ""*/
            }}
            /*  validate={values => {
                  const errors = {};
                  if (!values.email) {
                      errors.email = 'Required';
                  } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                      errors.email = 'Invalid email address';
                  }
                  return errors;
              }}*/
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    console.log(values);
                    updateProfile(values, profile.userId)
                    /*let {lookingForAJob, lookingForAJobDescription, fullName, userId, aboutMe, ...contacts} = values;
                    updateProfile({lookingForAJob, lookingForAJobDescription, fullName, userId, aboutMe, contacts}, profile.userId);*/
                    deactivateEditMode();
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({isSubmitting}) => (
                <Form className={s.form}>
                    <div className={s.inputs}>
                        <div>
                            <div className={s.formEl}>
                                <div>fullName:</div>
                                <Field type="fullName" name="fullName"/>
                                <ErrorMessage name="fullName" component="div"/>
                            </div>
                            <div className={s.formEl}>
                                <div>aboutMe:</div>
                                <Field type="aboutMe" name="aboutMe"/>

                            </div>
                            <div className={s.formEl}>
                                <div>lookingForAJob:</div>
                                <Field type="checkbox" name="lookingForAJob"/></div>
                            <div className={s.formEl}>
                                <div>lookingForAJobDescription:</div>
                                <Field type="lookingForAJobDescription" name="lookingForAJobDescription"/></div>
                        </div>
                        <div>{Object.keys(contacts).map(key => {
                            return <div className={s.formEl} key={key}>
                                <div>{key}:</div>
                                <Field type="text" name= {"contacts."+key}/></div>
                        })}</div>
                    </div>
                    <div className={s.formButtons}>
                            <button className={s.formButton} type="submit" disabled={isSubmitting}>
                                Save
                            </button>
                            <button className={s.formButton} onClick={deactivateEditMode}>
                                Cancel
                            </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
};

export default ProfileInfoForm;