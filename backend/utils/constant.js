const DELIVERY_TYPES = [
  { label: "Door", value: "Door" },
  { label: "Godown", value: "Godown" },
  { label: "Office", value: "Office" },
];
const PAY_TYPES = [
  { label: "TBB", value: "TBB" },
  { label: "ToPay", value: "ToPay" },
  { label: "Paid", value: "Paid" },
  { label: "FOC", value: "FOC" },
];
const TO_BILLED = [
  { label: "Consignor", value: "Consignor" },
  { label: "Consignee", value: "Consignee" },
  { label: "Third party", value: "Third party" },
];
const SERVICE_TAX_BY = [
  { label: "Consignor", value: "Consignor" },
  { label: "Consignee", value: "Consignee" },
  { label: "NA", value: "NA" },
];
const PAY_MODE = [
  { label: "By Cash", value: "By Cash" },
  { label: "By Cheque", value: "By Cheque" },
  { label: "By NEFT/RTGS", value: "By NEFT/RTGS" },
  { label: "By Online banking", value: "By Online banking" },
];

const PAYMENT_MODES = [
  { label: "Cash", value: "Cash" },
  { label: "Cheque", value: "Cheque" },
  { label: "NEFT/RTGS", value: "NEFT/RTGS" },
  { label: "Online banking", value: "Online banking" },
];

const PRINTERS = [
  "Epson LQ-300+",
  "Epson LX-300+",
  "Epson LX-300+II",
  "TVS MPS 250 Champion",
];

module.exports = {
  DELIVERY_TYPES,
  PAYMENT_MODES,
  PAY_MODE,
  SERVICE_TAX_BY,
  TO_BILLED,
  PAY_TYPES,
  PRINTERS,
};
