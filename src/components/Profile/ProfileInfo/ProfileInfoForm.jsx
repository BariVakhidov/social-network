import s from "./ProfileInfo.module.css";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Preloader from "../../common/Preloader/Preloader";
import {useState} from "react";
import StyledButton from "../../common/StyledButton";


const ProfileInfoForm = ({contacts, deactivateEditMode, profile, updateProfile}) => {

    const [isFetching, setFetching] = useState(false);
    const capitalizeFirstLetter = (string) => {
        return string[0].charAt(0).toLowerCase() + string[0].slice(1) + "." + string[1].charAt(0).toLowerCase() + string[1].slice(1);
    };

    return (
        <Formik
            initialValues={{
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                fullName: profile.fullName,
                userId: profile.userId,
                aboutMe: profile.aboutMe || "",
                contacts: {...contacts}
            }}
            onSubmit={(values, {setSubmitting, setFieldError}) => {
                setFetching(true);
                updateProfile(values, profile.userId)
                    .then(
                        (errors) => {
                            if (errors) {
                                errors.map(error => {
                                    let errorSplit = error.split(/[()]/g);
                                    let errorMessage = errorSplit[0];
                                    let errorField = capitalizeFirstLetter(errorSplit[1].split(/\W+/));
                                    debugger
                                    setFieldError(errorField, errorMessage);
                                    return error;
                                });
                            } else
                                deactivateEditMode();
                        })
                    .finally(() => {
                        setSubmitting(false);
                        setFetching(false);
                    });
            }}
        >
            {({isSubmitting}) => (
                <Form className={s.form}>
                    <div className={s.inputs}>
                        <div className={s.fields}>
                            <FormikField type={"text"} name={"fullName"} title={"Full name"}/>
                            <FormikField type={"text"} name={"aboutMe"}  title={"About me"} />
                            <FormikField type={"checkbox"}  name={"lookingForAJob"} title={"Looking for a job"} />
                            <FormikField type={"text"} name={"lookingForAJobDescription"} title={"Job Description"}/>
                        </div>
                        <div className={s.fields}>{Object.keys(contacts).map(key => {
                            return <FormikField key={key} type={"text"} name={"contacts." + key} title={key}/>
                        })}</div>
                    </div>
                    <div className={s.formButtons}>
                        <StyledButton className={s.formButton} type="submit" disabled={isSubmitting}>
                            Save
                        </StyledButton>
                        <StyledButton className={s.formButton} onClick={deactivateEditMode}>
                            Cancel
                        </StyledButton>
                    </div>
                    <div>{isFetching && <Preloader/>}</div>
                </Form>
            )}
        </Formik>
    )
};
const FormikField = ({name, type, title}) => {
    return (
        <div className={s.formEl}>
            <div className={s.fieldTitle}>{title.concat(":")}</div>
            <div className={s.field}>
                <Field type={type} name={name} className={s.fieldEl}/>
                <ErrorMessage name={name} component="div" className={s.error}/>
            </div>
        </div>
    )
}
export default ProfileInfoForm;