//import { checkMail } from "../utils";

export const inputArray = [
  {
    label: "",
    type: "text",
    name: "productName",
    placeholder: "Product Name",
    _id: "product_name",
    errorMessage: "Product Name is required",
    // pattern: "^[a-zA-Z0-9]{3,16}$",
    required: true,
  },
  {
    label: "",
    type: "text",
    name: "firstName",
    placeholder: "First Name",
    _id: "first_name",
    errorMessage: "First name must be at least 3 characters",
    pattern: "^[a-zA-Z0-9]{3,16}$",
    required: true,
  },
  {
    label: "",
    type: "text",
    name: "lastName",
    placeholder: "Last Name",
    _id: "last_name",
    errorMessage: "Last name must be at least 3 characters",
    pattern: "^[a-zA-Z0-9]{3,16}$",
    required: true,
  },
  {
    label: "",
    type: "email",
    name: "email",
    placeholder: "Email Address",
    _id: "email",
    errorMessage: "Please enter a valid email",
    required: true,
  },
  {
    label: "",
    type: "tel",
    name: "phoneNo",
    placeholder: "Phone Number",
    _id: "phoneNo",
    errorMessage: "Invalid Phone",
    pattern: "^[0-9]{10,16}$",
    required: true,
  },
  {
    label: "",
    type: "text",
    name: "address",
    placeholder: "Addresss [City, Country]",
    _id: "address",
    errorMessage: "Invalid Address",
    // pattern: "^[a-zA-Z0-9]{3,16}$",
    required: true, 
  },
];

export const checkboxArray = [
  {
    name: "productType",
    _id: "sass",
    text: "Sass",
  },
  {
    name: "productType",
    _id: "b2b",
    text: "B2B",
  },
  {
    name: "productType",
    _id: "b2c",
    text: "B2C",
  },
  {
    name: "productType",
    _id: "mobile_app",
    text: "Mobile App",
  },
  {
    name: "productType",
    _id: "web_app",
    text: "Web App",
  },
  {
    name: "productType",
    _id: "websites",
    text: "Websites",
  },
  {
    name: "productType",
    _id: "one_pager",
    text: "One Pager",
  },
  {
    name: "productType",
    _id: "others",
    text: "Others",
  },
  {
    name: "serviceType",
    _id: "product_documentation",
    text: "Product Documentation",
  },
  {
    name: "serviceType",
    _id: "ui_ux_design",
    text: "UI/UX Design",
  },
  {
    name: "serviceType",
    _id: "brand_identity_design",
    text: "Brand Identity Design",
  },
];

