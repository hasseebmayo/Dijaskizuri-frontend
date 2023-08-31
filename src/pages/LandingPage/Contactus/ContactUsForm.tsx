import React, { FormEvent, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUsForm: React.FC = () => {
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  console.log(isLoading);

  const sendEmail = (data: FormData) => {
    return axios.post("https://dijaskizuri.si//api/contact-us", data);
  };

  const handleSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    setIsLoading(true);

    try {
      await sendEmail(formData);
      setSuccessMessage(true);
      setRecaptchaValue(null);
      setIsLoading(false);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="contact-us-form">
      <h2>Kontaktirajte nas</h2>
      <form onSubmit={handleSubmission}>
        <input
          placeholder="Ime in priimek"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Zadeva"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
        <textarea
          placeholder="Sporočilo"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <ReCAPTCHA
          sitekey="6LctVLAnAAAAAFSzAp9gPaDplOmbNZzAAP51cvGL"
          onChange={(val: string | null) => {
            setRecaptchaValue(val);
          }}
        />
        {successMessage && (
          <p className="success-message">
            Your query is submitted successfully.
          </p>
        )}
        <div className="form-btn">
          <Button text="Pošlji" type="submit" disabled={isLoading} />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
