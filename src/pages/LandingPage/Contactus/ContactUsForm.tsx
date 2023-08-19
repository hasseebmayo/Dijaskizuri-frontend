import React, { FormEvent, useState } from "react";
import Button from "../../../components/Button/Button";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsForm = () => {
  const [recapchaValue, setRecaptchaValue] = useState<string | null>();
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmition = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!recapchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    console.log("submit");
  };
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="contact-us-form">
      <h2>Kontaktirajte nas</h2>
      <form onSubmit={handleSubmition}>
        <input
          placeholder="Ime in priimek"
          name="name"
          value={data.name}
          onChange={onChange}
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={onChange}
          required
        />
        <input
          placeholder="Zadeva"
          name="subject"
          value={data.subject}
          onChange={onChange}
          required
        />
        <textarea
          placeholder="Sporočilo"
          name="message"
          value={data.message}
          onChange={onChange}
          required
        ></textarea>
        <ReCAPTCHA
          sitekey="6LctVLAnAAAAAFSzAp9gPaDplOmbNZzAAP51cvGL"
          onChange={(val: string | null) => {
            setRecaptchaValue(val);
          }}
        />
        <div className="form-btn">
          <Button text="Pošlji" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
