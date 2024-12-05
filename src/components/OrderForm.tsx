import React from "react";
import useState from "react-usestateref";
import emailjs from "@emailjs/browser";
import { Item } from "./items";
import "./orderForm.css";

interface OrderFormProps {
  selectedItem: Item;
  onClose: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ selectedItem, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [orderMessage, setOrderMessage] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerTown, setCustomerTown] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "orderConfig") setSelectedOption(event.target.value);
    if (name === "orderMessage") setOrderMessage(value);
    if (name === "customerName") setCustomerName(value);
    if (name === "customerEmail") setCustomerEmail(value);
    if (name === "customerPhone") setCustomerPhone(value);
    if (name === "customerTown") setCustomerTown(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailContent =
      "Customer name: " +
      customerName +
      "\n Customer location: " +
      customerTown +
      "\n Selected item: " +
      selectedItem.title +
      "\n Preferred configuration: " +
      selectedOption +
      "\n Order message: " +
      orderMessage +
      "\n Contact details:- \n  Tel:" +
      customerPhone +
      "\n  Email: " +
      customerEmail;

    const templateParams = {
      from_name: customerName,
      message: emailContent,
      customer_email: customerEmail,
      customer_phone: customerPhone,
    };

    const serviceID = "default_service";
    const templateID = "template_k1fqtqp";
    const userID = "aJpaBhT-WGFzmjYaH";

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert(
          "Your order has been sent successfully. Await response from our team"
        );
      },
      (err) => {
        console.error("FAILED", err);
        alert("Your order has not been sent, please try again later");
      }
    );
  };

  return (
    <div className="order-form" id="order-form">
      <div className="item">
        <h3>
          Item details:
          <br /> {selectedItem.title}
        </h3>
        <p>
          {selectedItem.cap} <br /> <br /> Fill the next form to order this item
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="configuration">
          <h3>System Configuration</h3>
          <div className="radio">
            <p>
              Select your preferred configuration: <br />
            </p>
            <label>
              <input
                type="radio"
                name="orderConfig"
                value={
                  selectedItem.priceDetails[0].desc +
                  " @ Ksh " +
                  selectedItem.priceDetails[0].price
                }
                checked={
                  selectedOption ===
                  selectedItem.priceDetails[0].desc +
                    " @ Ksh " +
                    selectedItem.priceDetails[0].price
                }
                onChange={handleInputChange}
              />
              {selectedItem.priceDetails[0].desc +
                " @ Ksh " +
                selectedItem.priceDetails[0].price}
            </label>

            <label>
              <input
                type="radio"
                name="orderConfig"
                value={
                  selectedItem.priceDetails[1].desc +
                  " @ Ksh " +
                  selectedItem.priceDetails[1].price
                }
                checked={
                  selectedOption ===
                  selectedItem.priceDetails[1].desc +
                    " @ Ksh " +
                    selectedItem.priceDetails[1].price
                }
                onChange={handleInputChange}
              />
              {selectedItem.priceDetails[1].desc +
                " @ Ksh " +
                selectedItem.priceDetails[1].price}
            </label>

            <label>
              <input
                type="radio"
                name="orderConfig"
                value={
                  selectedItem.priceDetails[2].desc +
                  " @ Ksh " +
                  selectedItem.priceDetails[2].price
                }
                checked={
                  selectedOption ===
                  selectedItem.priceDetails[2].desc +
                    " @ Ksh " +
                    selectedItem.priceDetails[2].price
                }
                onChange={handleInputChange}
              />
              {selectedItem.priceDetails[2].desc +
                " @ Ksh " +
                selectedItem.priceDetails[2].price}
            </label>
          </div>

          <label htmlFor="order-message"></label>
          <textarea
            id="order-message"
            name="orderMessage"
            placeholder="Type any additional message here"
            value={orderMessage}
            onChange={(e) => setOrderMessage(e.target.value)}
          />
        </div>
        <div className="personal-info">
          <h3>Personal Information</h3>
          <div className="info-detail">
            <label htmlFor="customer-name">Your name:</label>
            <input
              type="name"
              id="customer-name"
              name="customerName"
              value={customerName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="info-detail">
            <label htmlFor="customer-name">Email address:</label>
            <input
              type="email"
              id="customer-email"
              name="customerEmail"
              value={customerEmail}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="info-detail">
            <label htmlFor="customer-phone">Phone number:</label>
            <input
              type="phone"
              id="customer-phone"
              name="customerPhone"
              value={customerPhone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="info-detail">
            <label htmlFor="customer-county">Town:</label>
            <input
              type="text"
              id="customer-town"
              name="customerTown"
              value={customerTown}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="end-buttons">
            <button onClick={onClose} id="close">
              Cancel
            </button>
            <button type="submit" id="submit">
              Submit Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
