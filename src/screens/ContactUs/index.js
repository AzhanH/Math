import React from 'react';
import ContactUsView from '../../views/ContactUsView';
import useContactUseModelView from '../../viewmodels/useContatcUsModelView';

const ContactUs = () => {
  const {states, functions, refs} = useContactUseModelView();
  const {initialValues, validationSchema, loading} = states;
  const {lastNameRef, emailRef, phoneRef, subjectRef, commentsRef} = refs;
  const {
    onSubmitEmail,
    onSubmitFirstName,
    onSubmitLastName,
    onSubmitPhone,
    onPressSendFeedback,
    onSubmitSubject,
  } = functions;
  return (
    <ContactUsView
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmitEmail={onSubmitEmail}
      onSubmitFirstName={onSubmitFirstName}
      onSubmitLastName={onSubmitLastName}
      onSubmitPhone={onSubmitPhone}
      onSubmitSubject={onSubmitSubject}
      lastNameRef={lastNameRef}
      emailRef={emailRef}
      phoneRef={phoneRef}
      subjectRef={subjectRef}
      onPressSendFeedback={onPressSendFeedback}
      commentsRef={commentsRef}
      loading={loading}
    />
  );
};
export default ContactUs;
