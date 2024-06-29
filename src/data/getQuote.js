import counterImage from "@/images/resource/featured-image-10.jpg";
import featuredImage from "@/images/resource/featured-image-9.jpg";

const getQuote = {
  featuredImage,
  featuredTitle: "our Values & Strategy",
  text: "Lorem Ipsum is simply proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.",
  count: 345600,
  counterTitle: "projects was completed successfully",
  counterImage,
  formTitle: "Get a free quote ",
  inputs: [
    {
      name: "username",
      type: "text",
      placeholder: "Vaše ime",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Vaš e-mail",
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Broj telefona",
    },
  ],
};

export default getQuote;

export const getQuoteTwo = {
  title: "Tu smo uvijek da Vam pomognemo",
  text: "Slobodno nam pošaljite e-mail ili se obratite putem telefona.",
  address: "Banja Luka, BIH",
  email: "info@megaplan.events",
  phone: "065 806 555",
  inputs: [
    {
      type: "text",
      name: "username",
      placeholder: "Vaše ime",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Vaš e-mail",
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Broj telefona",
    },
    {
      type: "text",
      name: "subject",
      placeholder: "Tema",
    },
    {
      name: "message",
      placeholder: "Napišite poruku",
    },
  ],
};

export const getQuoteThree = {
  title: "Still stuck ask directly",
  inputs: [
    {
      type: "text",
      name: "username",
      placeholder: "Your Name",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email Address",
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Phone Number",
    },
    {
      type: "text",
      name: "subject",
      placeholder: "Subject",
    },
    {
      name: "message",
      placeholder: "Write Message",
    },
  ],
};
