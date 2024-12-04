import React, { ChangeEvent, FormEvent } from "react";
import useState from "react-usestateref";
import "./solarOrderForm.css";
import emailjs from "@emailjs/browser";

interface SystemDetails {
  name_type: string;
  size: string;
  quantity: string;
}

interface PersonalDetails {
  name: string;
  phone: string;
  email: string;
  location: string;
  message: string;
}

interface NewInstallationData {
  installationType: string;
  systemDetails: {
    inverter: SystemDetails;
    batteries: SystemDetails;
    solarPanels: SystemDetails;
  };
  budgetCategory: string;
  subCategory: string;
  personalDetails: PersonalDetails;
}

interface RepairMaintenanceData {
  systemSize: string;
  location: string;
  installer: string;
  installerCompanyName: string;
  installerContact: string;
  problemDescription: string;
}

interface NewInstallationFormProps {
  onSubmit: (data: NewInstallationData) => void;
}

interface RepairMaintenanceFormProps {
  onSubmit: (data: RepairMaintenanceData) => void;
}

const NewInstallationForm: React.FC<NewInstallationFormProps> = () => {
  const [installationType, setInstallationType] = useState<string>("");
  const [systemDetails, setSystemDetails] = useState({
    inverter: { name_type: "", size: "", quantity: "" },
    batteries: { name_type: "", size: "", quantity: "" },
    solarPanels: { name_type: "", size: "", quantity: "" },
  });
  const [budgetCategory, setBudgetCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const handleInstallationTypeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInstallationType(e.target.value);
  const handleSystemDetailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [key, field] = name.split(".");
    setSystemDetails((prevDetails) => ({
      ...prevDetails,
      [key]: {
        ...prevDetails[key as keyof typeof prevDetails],
        [field]: value,
      },
    }));
  };
  const handlePersonalDetailChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  const handleBudgetCategoryChange = (e: ChangeEvent<HTMLInputElement>) =>
    setBudgetCategory(e.target.value);
  const handleSubCategoryChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSubCategory(e.target.value);

  const generateEmailContent = (
    systemDetails: {
      inverter: { name_type: string; size: string; quantity: string };
      batteries: { name_type: string; size: string; quantity: string };
      solarPanels: { name_type: string; size: string; quantity: string };
    },
    personalDetails: {
      name: string;
      email: string;
      phone: string;
      location: string;
      message: string;
    }
  ) => {
    return `
    Service Request Details
    Name: ${personalDetails.name}
    Email: ${personalDetails.email}
    Phone: ${personalDetails.phone}
    Location: ${personalDetails.location}

    ${
      installationType === "bought"
        ? `
      Bought the following items:
        Inverter name: ${systemDetails.inverter.name_type}
        Inverter size: ${systemDetails.inverter.size} W
        Inverter quantity: ${systemDetails.inverter.quantity} units
        Battery name and type: ${systemDetails.batteries.name_type} 
        Battery size: ${systemDetails.batteries.size} V/Ah
        Battery quantity: ${systemDetails.batteries.quantity} units
        Panel name and type: ${systemDetails.solarPanels.name_type}
        Panel size: ${systemDetails.solarPanels.size} W
        Panel quantity: ${systemDetails.solarPanels.quantity} panels
      `
        : `
        New installation request:
        Budget: ${
          budgetCategory === "category4"
            ? "Above Ksh 1m"
            : `Ksh ${subCategory} max`
        } 
      `
    }
    Additional Message: ${personalDetails.message}
  `;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailContent = generateEmailContent(systemDetails, personalDetails);

    const templateParams = {
      from_name: personalDetails.name,
      message: emailContent,
      customer_email: personalDetails.email,
      customer_phone: personalDetails.phone,
    };

    const serviceID = "default_service";
    const templateID = "template_k1fqtqp";
    const userID = "aJpaBhT-WGFzmjYaH";

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert(
          "Your order submitted successfully. Await response from our team"
        );
      },
      (err) => {
        console.error("FAILED", err);
        alert("Your order has not been sent, please retry after some time");
      }
    );
  };

  return (
    <div id="formPage">
      <form onSubmit={handleSubmit}>
        <div id="installation-start">
          <input
            type="radio"
            id="start_from_scratch"
            value="start_from_scratch"
            checked={installationType === "start_from_scratch"}
            onChange={handleInstallationTypeChange}
          />
          <label htmlFor="start_from_scratch">I am starting from scratch</label>
          <input
            type="radio"
            id="bought"
            value="bought"
            checked={installationType === "bought"}
            onChange={handleInstallationTypeChange}
          />
          <label htmlFor="bought">I have bought the items</label>
        </div>
        {installationType === "bought" && (
          <>
            <div id="bought-details">
              <h4>Fill in the details of the items you have:</h4>
              <div className="bought-item" id="inverter-details">
                <label htmlFor="inverter-name" className="name">
                  Inverter name:
                  <input
                    type="text"
                    id="inverter-name"
                    placeholder="e.g Must 3kVA"
                    name="inverter.name_type"
                    value={systemDetails.inverter.name_type}
                    onChange={handleSystemDetailChange}
                  />
                </label>
                <label htmlFor="inverter-size" className="size">
                  Rating(Watts):
                  <input
                    type="text"
                    id="inverter-size"
                    name="inverter.size"
                    placeholder="e.g 3000"
                    value={systemDetails.inverter.size}
                    onChange={handleSystemDetailChange}
                  />
                </label>
                <label htmlFor="inverter-quantity" className="qty">
                  Quantity:
                  <input
                    type="text"
                    id="inverter-quantity"
                    name="inverter.quantity"
                    value={systemDetails.inverter.quantity}
                    onChange={handleSystemDetailChange}
                  />
                </label>
              </div>
              <div className="bought-item" id="battery-details">
                <label htmlFor="battery-name" className="name">
                  Battery name and type:
                  <input
                    type="text"
                    id="battery-name"
                    name="batteries.name_type"
                    placeholder="e.g Felicity Gel"
                    value={systemDetails.batteries.name_type}
                    onChange={handleSystemDetailChange}
                  />
                </label>
                <label htmlFor="battery-size" className="size">
                  Rating(V / Ah):
                  <input
                    type="text"
                    id="battery-size"
                    name="batteries.size"
                    placeholder="e.g 24/100"
                    value={systemDetails.batteries.size}
                    onChange={handleSystemDetailChange}
                  />
                </label>
                <label htmlFor="battery-quantity" className="qty">
                  Quantity:
                  <input
                    type="text"
                    id="battery-quantity"
                    name="batteries.quantity"
                    value={systemDetails.batteries.quantity}
                    onChange={handleSystemDetailChange}
                  />
                </label>
              </div>
              <div className="bought-item" id="panel-details">
                <label htmlFor="panel-name" className="name">
                  Panel name and type:
                  <input
                    type="text"
                    id="panel-name"
                    name="solarPanels.name_type"
                    placeholder="e.g Jinko monocrystalline"
                    value={systemDetails.solarPanels.name_type}
                    onChange={handleSystemDetailChange}
                  />
                </label>
                <label htmlFor="panel-size" className="size">
                  Rating(Watts):
                  <input
                    type="text"
                    id="panel-size"
                    name="solarPanels.size"
                    placeholder="e.g 575"
                    value={systemDetails.solarPanels.size}
                    onChange={handleSystemDetailChange}
                  />
                </label>
                <label htmlFor="panel-quantity" className="qty">
                  Quantity:
                  <input
                    type="text"
                    id="panel-quantity"
                    name="solarPanels.quantity"
                    value={systemDetails.solarPanels.quantity}
                    onChange={handleSystemDetailChange}
                  />
                </label>
              </div>
            </div>
          </>
        )}
        {installationType === "start_from_scratch" && (
          <>
            <div id="budget-cat">
              <h4>Let's work with your budget:</h4>
              <input
                type="radio"
                id="cat-one"
                value="category1"
                checked={budgetCategory === "category1"}
                onChange={handleBudgetCategoryChange}
              />
              <label htmlFor="cat-one">Ksh 50k to 250k</label>
              <input
                type="radio"
                id="cat-two"
                value="category2"
                checked={budgetCategory === "category2"}
                onChange={handleBudgetCategoryChange}
              />
              <label htmlFor="cat-two">Ksh 275k to 500k</label>
              <input
                type="radio"
                id="cat-three"
                value="category3"
                checked={budgetCategory === "category3"}
                onChange={handleBudgetCategoryChange}
              />
              <label htmlFor="cat-three">Ksh 550k to 1m</label>
              <input
                type="radio"
                id="cat-four"
                value="category4"
                checked={budgetCategory === "category4"}
                onChange={handleBudgetCategoryChange}
              />
              <label htmlFor="cat-four">Above Ksh 1m</label>
            </div>
            {budgetCategory === "category1" && (
              <div className="budget-subcat">
                <h4>Max:</h4>
                {[...Array(9)].map((_, i) => (
                  <>
                    <input
                      key={i}
                      id={(50 + i * 25).toString()}
                      type="radio"
                      value={(50 + i * 25).toString() + "k"}
                      checked={subCategory === (50 + i * 25).toString() + "k"}
                      onChange={handleSubCategoryChange}
                    />
                    <label htmlFor={(50 + i * 25).toString()}>
                      Ksh {50 + i * 25}k
                    </label>
                  </>
                ))}
              </div>
            )}
            {budgetCategory === "category2" && (
              <div className="budget-subcat">
                <h4>Max:</h4>
                {[...Array(10)].map((_, i) => (
                  <>
                    <input
                      key={i}
                      type="radio"
                      id={(275 + i * 25).toString()}
                      value={(275 + i * 25).toString() + "k"}
                      checked={subCategory === (275 + i * 25).toString() + "k"}
                      onChange={handleSubCategoryChange}
                    />
                    <label htmlFor={(275 + i * 25).toString()}>
                      Ksh {275 + i * 25}k
                    </label>
                  </>
                ))}
              </div>
            )}
            {budgetCategory === "category3" && (
              <div className="budget-subcat">
                <h4>Max:</h4>
                {[...Array(10)].map((_, i) => (
                  <>
                    <input
                      key={i}
                      type="radio"
                      id={(550 + i * 50).toString()}
                      value={(550 + i * 50).toString() + "k"}
                      checked={subCategory === (550 + i * 50).toString() + "k"}
                      onChange={handleSubCategoryChange}
                    />
                    <label htmlFor={(550 + i * 50).toString()}>
                      Ksh {550 + i * 50 === 1000 ? "1m" : 550 + i * 50 + "k"}
                    </label>
                  </>
                ))}
              </div>
            )}
          </>
        )}
        <div id="personal-info">
          <div id="details">
            <h4>Fill in your details:</h4>
            <label>
              Name:{" "}
              <input
                type="text"
                name="name"
                required
                value={personalDetails.name}
                onChange={handlePersonalDetailChange}
              />
            </label>
            <label>
              Phone:{" "}
              <input
                type="text"
                name="phone"
                required
                value={personalDetails.phone}
                onChange={handlePersonalDetailChange}
              />
            </label>
            <label>
              Email:{" "}
              <input
                type="email"
                name="email"
                placeholder="Optional"
                value={personalDetails.email}
                onChange={handlePersonalDetailChange}
              />
            </label>
            <label>
              Location:{" "}
              <input
                type="text"
                name="location"
                required
                value={personalDetails.location}
                onChange={handlePersonalDetailChange}
              />
            </label>
            <label>
              Message:{" "}
              <textarea
                name="message"
                placeholder="Additional message"
                value={personalDetails.message}
                onChange={handlePersonalDetailChange}
              ></textarea>
            </label>
          </div>
        </div>
        <div className="sub">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const RepairMaintenanceForm: React.FC<RepairMaintenanceFormProps> = () => {
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    systemSize: "",
    location: "",
    installer: "sunpro",
    installerCompanyName: "",
    installerContact: "",
    problemDescription: "",
  });

  const handleDetailChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const generateEmail = (details: {
    name: string;
    phone: string;
    email: string;
    location: string;
    systemSize: string;
    installer: string;
    installerCompanyName: string;
    installerContact: string;
    problemDescription: string;
  }) => {
    return `Repair and Maintenance Service
    Name: ${details.name}
    Phone: ${details.phone}
    Email: ${details.email}
    Location: ${details.location}
    Sytem size: ${details.systemSize}
    Installer: ${
      details.installer === "sunpro"
        ? "Sunpro"
        : details.installerCompanyName +
          " ( Contact: " +
          details.installerContact +
          " )"
    }
    Issue: ${details.problemDescription}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailContent = generateEmail(details);

    const templateParams = {
      from_name: details.name,
      message: emailContent,
      customer_email: details.email,
      customer_phone: details.phone,
    };

    const serviceID = "default_service";
    const templateID = "template_k1fqtqp";
    const userID = "aJpaBhT-WGFzmjYaH";

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert(
          "Your order submitted successfully. Await response from our team"
        );
      },
      (err) => {
        console.error("FAILED", err);
        alert("Your order has not been sent, please retry after some time");
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="details">
        <label>
          Your name:{" "}
          <input
            type="text"
            name="name"
            required
            value={details.name}
            onChange={handleDetailChange}
          />
        </label>
        <label>
          Phone number:{" "}
          <input
            type="text"
            name="phone"
            required
            value={details.phone}
            onChange={handleDetailChange}
          />
        </label>
        <label>
          Email address:{" "}
          <input
            type="email"
            name="email"
            placeholder="Optional"
            value={details.email}
            onChange={handleDetailChange}
          />
        </label>
        <label>
          System Rating:{" "}
          <input
            type="text"
            name="systemSize"
            placeholder="Optional"
            value={details.systemSize}
            onChange={handleDetailChange}
          />
        </label>
        <label>
          Location:{" "}
          <input
            type="text"
            name="location"
            value={details.location}
            onChange={handleDetailChange}
          />
        </label>
        <label>
          Installer:
          <select
            name="installer"
            value={details.installer}
            onChange={handleDetailChange}
          >
            <option value="sunpro">Sunpro</option>
            <option value="other">Other</option>
          </select>
        </label>
        {details.installer === "other" && (
          <>
            <label>
              Company Name:{" "}
              <input
                type="text"
                name="installerCompanyName"
                placeholder="Optional"
                value={details.installerCompanyName}
                onChange={handleDetailChange}
              />
            </label>
            <label>
              Contact Phone:{" "}
              <input
                type="text"
                name="installerContact"
                placeholder="Optional"
                value={details.installerContact}
                onChange={handleDetailChange}
              />
            </label>
          </>
        )}
        <label>
          Problem Detail:{" "}
          <textarea
            name="problemDescription"
            required
            placeholder="Describe the issue"
            value={details.problemDescription}
            onChange={handleDetailChange}
          ></textarea>
        </label>
      </div>
      <div className="sub">
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

const SolarOrderForm: React.FC = () => {
  const [serviceType, setServiceType] = useState<string>("new_installation");

  const handleServiceTypeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setServiceType(e.target.value);

  const handleNewInstallationSubmit = (data: NewInstallationData) => {
    console.log("New Installation Data:", data);
  };

  const handleRepairMaintenanceSubmit = (data: RepairMaintenanceData) => {
    console.log("Repair/Maintenance Data:", data);
  };

  return (
    <div id="mainForm">
      <h2>Solar Power System Order Form</h2>
      <hr />
      <h3>Fill in the form below to complete your request</h3>
      <div id="request-selection">
        <input
          type="radio"
          id="new_installation"
          value="new_installation"
          checked={serviceType === "new_installation"}
          onChange={handleServiceTypeChange}
        />
        <label htmlFor="new_installation">A new system installation</label>
        <input
          type="radio"
          id="repair_maintenance"
          value="repair_maintenance"
          checked={serviceType === "repair_maintenance"}
          onChange={handleServiceTypeChange}
        />
        <label htmlFor="repair_maintenance">
          Repair/Maintenance service on my system
        </label>
      </div>
      {serviceType === "new_installation" && (
        <NewInstallationForm onSubmit={handleNewInstallationSubmit} />
      )}
      {serviceType === "repair_maintenance" && (
        <RepairMaintenanceForm onSubmit={handleRepairMaintenanceSubmit} />
      )}
    </div>
  );
};

export default SolarOrderForm;
