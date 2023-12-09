export const API_BASE_PATH = window.env.API_BASE_PATH;
// export const API_BASE_PATH = "https://api.jaisantoshimaatransport.com/";

export const DELIVERY_TYPES = [
  { label: "Door", value: "Door" },
  { label: "Godown", value: "Godown" },
  { label: "Against Consignee Copy", value: "Against Consignee Copy" },
];
export const PAY_TYPES = [
  { label: "ToPay", value: "ToPay" },
  { label: "Paid", value: "Paid" },
  { label: "TBB", value: "TBB" },
  { label: "FOC", value: "FOC" },
];
export const TO_BILLED = [
  { label: "Consignor", value: "Consignor" },
  { label: "Consignee", value: "Consignee" },
];
export const SERVICE_TAX_BY = [
  { label: "Consignor", value: "Consignor" },
  { label: "Consignee", value: "Consignee" },
  { label: "Transporter", value: "Transporter" },
];
export const PAY_MODE = [
  { label: "By Cash", value: "By Cash" },
  { label: "By Cheque", value: "By Cheque" },
];

export const PAYMENT_MODES = [
  { label: "Cash", value: "Cash" },
  { label: "Cheque", value: "Cheque" },
  { label: "NEFT/RTGS", value: "NEFT/RTGS" },
  { label: "Online banking", value: "Online banking" },
];
