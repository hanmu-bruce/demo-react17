import React from "react";
import { useParams } from "react-router-dom";

function Contact() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>Contact id: {params.id}</h2>
    </div>
  );
}

export default Contact;
