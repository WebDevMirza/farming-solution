import { Form } from "react-router-dom";

const ContactForm = () => {
  return (
    <>
      <div className="space-y-2 mb-3">
        <p className="text-2xl font-bold">Send A Message</p>
        <hr />
        <p>Your email address will not be published</p>
      </div>
      <Form action="/contacts/thankyou" method="POST">
        <div className="my-form flex flex-col space-y-2">
          <div className="flex gap-4">
            <input type="text" name="firstName" id="firstName" placeholder="Enter Your First Name" required />
            <input type="text" name="lastName" id="lastName" placeholder="Enter Your Last Name" required />
          </div>
          <input type="email" name="email" id="email" placeholder="Enter Your Email" required />
          <input type="text" name="subject" id="subject" placeholder="Subject ......" required />
          <textarea name="message" id="message" cols={30} rows={5} placeholder="Your Message ...." required></textarea>
          <button
            className="bg-appdarkgreen w-fit text-white px-8 py-2 font-medium text-xl uppercase rounded tracking-wider"
            type="submit"
          >
            Send message
          </button>
        </div>
      </Form>
    </>
  );
};

const contactAction = async ({ request }: { request: Request }) => {
  const data = await request.formData();

  const submission = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    subject: data.get("subject"),
    message: data.get("message"),
  };

  console.log(submission);

  return submission;
};

export default ContactForm;
export { contactAction };
