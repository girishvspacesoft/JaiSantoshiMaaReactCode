export const API_BASE_PATH = window.env.API_BASE_PATH;
// export const API_BASE_PATH = "https://api.jaisantoshimaatransport.com/";

export const DELIVERY_TYPES = [
  { label: "Door", value: "Door" },
  { label: "Godown", value: "Godown" },
  { label: "Office", value: "Office" },
];
export const PAY_TYPES = [
  { label: "TBB", value: "TBB" },
  { label: "ToPay", value: "ToPay" },
  { label: "Paid", value: "Paid" },
  { label: "FOC", value: "FOC" },
];
export const TO_BILLED = [
  { label: "Consignor", value: "Consignor" },
  { label: "Consignee", value: "Consignee" },
  { label: "Third party", value: "Third party" },
];
export const SERVICE_TAX_BY = [
  { label: "Consignor", value: "Consignor" },
  { label: "Consignee", value: "Consignee" },
  { label: "NA", value: "NA" },
];
export const PAY_MODE = [
  { label: "By Cash", value: "By Cash" },
  { label: "By Cheque", value: "By Cheque" },
  { label: "By NEFT/RTGS", value: "By NEFT/RTGS" },
  { label: "By Online banking", value: "By Online banking" },
];

export const PAYMENT_MODES = [
  { label: "Cash", value: "Cash" },
  { label: "Cheque", value: "Cheque" },
  { label: "NEFT/RTGS", value: "NEFT/RTGS" },
  { label: "Online banking", value: "Online banking" },
];
