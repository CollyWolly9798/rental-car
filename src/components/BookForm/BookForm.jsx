import { Formik, Form, Field, ErrorMessage } from 'formik';
import LargeButton from '../LargeButton/LargeButton.jsx';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import styles from './BookForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

export default function BookForm() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Book your car now</h3>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ name: '', email: '', date: '', comment: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          toast.success('Your car has been successfully booked!');
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.fieldWrapper}>
              <label htmlFor="name" className={styles.label}>
                Name*
              </label>
              <Field className={styles.field} type="text" name="name" />
            </div>
            <ErrorMessage
              className={styles.error}
              name="name"
              component="div"
            />

            <div className={styles.fieldWrapper}>
              <label htmlFor="email" className={styles.label}>
                Email*
              </label>
              <Field className={styles.field} type="email" name="email" />
            </div>

            <ErrorMessage
              className={styles.error}
              name="email"
              component="div"
            />

            <div className={styles.fieldWrapper}>
              <label className={styles.date}>Booking date</label>
              <Field className={styles.fieldDate} type="date" name="date" />
            </div>

            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Comment</label>
              <Field
                className={styles.fieldText}
                as="textarea"
                name="comment"
              />
            </div>

            <LargeButton text="Send" type="submit" disabled={isSubmitting}>
              Submit
            </LargeButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
