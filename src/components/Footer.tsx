import React from "react";
import useState from "react-usestateref";
import emailjs from "@emailjs/browser";
import "./footer.css";

const Footer = () => {
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
    if (name === "location") setLocation(value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleCancel = () => {
    setSelectedService("");
    setName("");
    setEmail("");
    setMessage(" ");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailContent =
      name +
      " from " +
      location +
      "\n About " +
      selectedService +
      "\n Message: " +
      message +
      ".\n Phone:" +
      phone +
      "\n Email: " +
      email;

    const templateParams = {
      from_name: name,
      message: emailContent,
      customer_email: email,
      customer_phone: phone,
    };

    const serviceID = "default_service";
    const templateID = "template_k1fqtqp";
    const userID = "aJpaBhT-WGFzmjYaH";

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert(
          "Your message has been sent successfully. Await response from our team"
        );
      },
      (err) => {
        console.error("FAILED", err);
        alert("Your message has not been sent, please try again later");
      }
    );
  };
  return (
    <div id="footer">
      <div className="contact-form">
        <h3>Talk to us</h3>
        <p>Fill this form and we will get in touch with you</p>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <label htmlFor="service-select">Select a service:</label>
            <select
              id="service-select"
              value={selectedService}
              onChange={handleServiceChange}
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Solar Installation">Solar Installation</option>
              <option value="Electrical Wiring">Electrical Wiring</option>
              <option value="CCTV Installation">CCTV Installation</option>
              <option value="Computer Networking">Computer Networking</option>
              <option value="Partnership">Partner with us</option>
              <option value="Inquiry/Consultation">
                Inquiry or Consultation
              </option>
            </select>
          </div>
          <div className="fields">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="fields">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="fields">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="fields">
            <label htmlFor="location">Town:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="fields">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              placeholder="Type your message here"
              value={message}
              onChange={handleMessageChange}
            />
          </div>

          <div id="action-btns">
            <button type="button" onClick={handleCancel} id="cancel">
              Cancel
            </button>
            <button type="submit" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="contact-details">
        <p>
          Sunpro Power Systems is your trusted and qualified partner for Solar
          Installation, Electrical Solutions, CCTV and Network connections, and
          Solar Water Heating Systems
        </p>
        <div id="address">
          <div className="address">
            <img src="../call.png" alt="Call us" />
            <p>
              Call:
              <a href="tel:+254715476526" target="_blank">
                {" "}
                +254715 476 526
              </a>
            </p>
          </div>
          <div className="address">
            <img src="../whatsapp.png" alt="WhatsApp" />
            <p>
              Chat:
              <a href="https://wa.me/+254703304650" target="_blank">
                {" "}
                +254 703 304650
              </a>
            </p>
          </div>
          <div className="address">
            <img src="../email.png" alt="send us an email" />
            <p>
              Email:
              <a href="mailto:sunpro.kenya@gmail.com" target="_blank">
                {" "}
                sunpro.kenya@gmail.com
              </a>
            </p>
          </div>
          <div className="address">
            <img src="../location.png" alt="where to find us" />
            <p>Nairobi, Kenya</p>
          </div>
          <div className="address">
            <img src="../copyright.png" alt="copyrighted to" />
            <p>2024 - Sunpro Power Systems</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
