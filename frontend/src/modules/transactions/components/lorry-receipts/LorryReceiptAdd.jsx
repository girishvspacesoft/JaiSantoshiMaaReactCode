import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Button,
  Paper,
  Divider,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Dialog, LoadingSpinner } from "../../../../ui-controls";
import TransactionDetails from "./TransactionDetails";
import {
  base64ToObjectURL,
  validateNumber,
  validatePhoneNumber,
} from "../../../../services/utils";

import {
  DELIVERY_TYPES,
  PAY_TYPES,
  TO_BILLED,
  SERVICE_TAX_BY,
  PAY_MODE,
} from "../../../../services/constants";
import {
  createLorryReceipt,
  downloadLorryReceipt,
  selectIsLoading,
} from "./slice/lorryReceiptSlice";

const initialState = {
  branch: "",
  lrNo: "",
  date: new Date(),
  invoiceNo: "",
  eWayBillNo: "",
  foNum: "",
  consignor: null,
  consignorAddress: "",
  consignorPhone: "",
  consignee: null,
  consigneeAddress: "",
  consigneePhone: "",
  from: "",
  to: "",
  totalFreight: 0,
  hamali: 0,
  deliveryCharges: 0,
  lrCharges: 10,
  total: 0,
  materialCost: 0,
  deliveryType: null,
  serviceTaxBy: null,
  payType: null,
  toBilled: null,
  collectAt: null,
  payMode: null,
  bankName: "",
  chequeNo: "",
  chequeDate: null,
  remark: "",
  transactions: [],
};

const initialErrorState = {
  branch: {
    invalid: false,
    message: "",
  },
  date: {
    invalid: false,
    message: "",
  },
  consignor: {
    invalid: false,
    message: "",
  },
  consignorAddress: {
    invalid: false,
    message: "",
  },
  consignorPhone: {
    invalid: false,
    message: "",
  },
  from: {
    invalid: false,
    message: "",
  },
  consignee: {
    invalid: false,
    message: "",
  },
  consigneeAddress: {
    invalid: false,
    message: "",
  },
  consigneePhone: {
    invalid: false,
    message: "",
  },
  to: {
    invalid: false,
    message: "",
  },
  totalFreight: {
    invalid: false,
    message: "",
  },
  lrCharges: {
    invalid: false,
    message: "",
  },
  payType: {
    invalid: false,
    message: "",
  },
  payMode: {
    invalid: false,
    message: "",
  },
  bankName: {
    invalid: false,
    message: "",
  },
  chequeNo: {
    invalid: false,
    message: "",
  },
  chequeDate: {
    invalid: false,
    message: "",
  },
  transactionDetails: {
    invalid: false,
    message: "",
  },
};

const LorryReceiptAdd = () => {
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector((state) => state.user);
  const { articles, customers, branches, places } = useSelector(
    ({ lorryreceipt }) => lorryreceipt
  );

  const [lorryReceipt, setLorryReceipt] = useState({
    ...initialState,
    branch: user.branch ? user.branch : branches[0]?._id,
  });
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [httpError, setHttpError] = useState("");
  const [open, setOpen] = useState(false);
  const [lrNo, setLrNo] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToLorryReceipts = useCallback(() => {
    navigate("/transactions/lorryReceipts");
  }, [navigate]);

  // useEffect(() => {
  //   const branch =
  //     branches.find(({ _id }) => _id === lorryReceipt.branch) || branches[0];
  //   if (branch) {
  //     dispatch(getLRNumber(branch?.abbreviation || "BRN")).then(
  //       ({ payload }) => {
  //
  //           setLorryReceipt((currState) => {
  //             return {
  //               ...currState,
  //               lrNo: payload?.data,
  //             };
  //           });
  //         }
  //       }
  //     );
  // }, [lorryReceipt.branch]);

  useEffect(() => {
    const err = Object.keys(formErrors);
    if (err.length) {
      const input = document.querySelector(`input[name=${err[0]}]`);

      input?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  }, [formErrors]);

  useEffect(() => {
    if (httpError) {
      const input = document.getElementById(`alertError`);
      input?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  }, [httpError]);

  useEffect(() => {
    let totalFreight = 0;
    if (lorryReceipt.transactions.length) {
      lorryReceipt.transactions.forEach((transaction) => {
        totalFreight += +transaction.freight;
      });
    }
    setLorryReceipt((currentState) => {
      return {
        ...currentState,
        totalFreight: totalFreight,
      };
    });
  }, [lorryReceipt.transactions]);

  useEffect(() => {
    const total =
      +lorryReceipt.totalFreight +
      +lorryReceipt.deliveryCharges +
      +lorryReceipt.lrCharges +
      +lorryReceipt.hamali;
    setLorryReceipt((currentState) => {
      return {
        ...currentState,
        total: total,
      };
    });
  }, [
    lorryReceipt.totalFreight,
    lorryReceipt.deliveryCharges,
    lorryReceipt.lrCharges,
    lorryReceipt.hamali,
  ]);

  const resetButtonHandler = () => {
    setLorryReceipt(initialState);
    setHttpError("");
    setFormErrors(initialErrorState);
  };

  const backButtonHandler = () => {
    goToLorryReceipts();
  };

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLorryReceipt((currState) => {
      return {
        ...currState,
        [name]: value,
      };
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    goToLorryReceipts();
  };
  const submitHandler = (e, isSaveAndPrint, isWithoutAmount = false) => {
    e.preventDefault();
    if (!validateForm(lorryReceipt)) {
      const updatedLR = lorryReceipt;
      updatedLR.consignor = updatedLR.consignor?._id || null;
      updatedLR.consignee = updatedLR.consignee?._id || null;
      if (updatedLR.deliveryType) {
        updatedLR.deliveryType = updatedLR.deliveryType.value;
      }
      if (updatedLR.payType) {
        updatedLR.payType = updatedLR.payType.value;
      }
      if (updatedLR.toBilled) {
        updatedLR.toBilled = updatedLR.toBilled.value;
      }
      if (updatedLR.collectAt) {
        updatedLR.collectAt = updatedLR.collectAt.value;
      }
      if (updatedLR.serviceTaxBy?.value) {
        updatedLR.serviceTaxBy = updatedLR.serviceTaxBy?.value;
      }
      updatedLR.transactions?.forEach?.((transaction) => {
        transaction.article = transaction.article.label;
        transaction.rateType = transaction.rateType.label;
      });
      if (updatedLR.payMode) {
        updatedLR.payMode = updatedLR.payMode.value;
      }
      if (updatedLR.branch) {
        updatedLR.branchCode =
          branches.find?.(({ _id }) => updatedLR.branch === _id)
            ?.abbreviation || "BRN";
      }
      dispatch(createLorryReceipt(updatedLR))
        .then(({ payload = {} }) => {
          const { message, lrNo } = payload?.data || {};
          if (message) {
            setHttpError(message);
          } else {
            if (isSaveAndPrint) {
              if (payload?.data._id) {
                dispatch(
                  downloadLorryReceipt({
                    id: payload?.data._id,
                    email: "",
                    isWithoutAmount,
                  })
                )
                  .then(({ payload = {} }) => {
                    const fileURL = base64ToObjectURL(payload?.data?.file);
                    if (fileURL) {
                      const winPrint = window.open(fileURL, "_blank");
                      winPrint.focus();
                      winPrint.print();
                      setHttpError("");
                      setFormErrors(initialErrorState);
                      setLorryReceipt(initialState);
                    }
                  })
                  .catch((e) => {
                    setHttpError(e.message);
                  });
              }
            } else {
              setHttpError("");
              setFormErrors(initialErrorState);
              setLorryReceipt(initialState);
            }
            setLrNo(lrNo);
            handleClickOpen();
          }
        })
        .catch((error) => {
          setHttpError(error.message);
        });
    }
  };

  const saveAndPrint = (e, type) => {
    e.preventDefault();
    submitHandler(e, true, type);
  };

  const validateForm = (formData) => {
    const errors = { ...initialErrorState };
    if (formData.branch.trim() === "") {
      errors.branch = { invalid: true, message: "Branch is required" };
    }
    if (!formData.consignor && !formData.consignorName) {
      errors.consignor = { invalid: true, message: "Consignor is required" };
    }
    if (!formData.consignorAddress) {
      errors.consignorAddress = {
        invalid: true,
        message: "Consignor address is required",
      };
    }
    if (formData.from.trim() === "") {
      errors.from = { invalid: true, message: "From is required" };
    }
    if (!formData.consignee && !formData.consigneeName) {
      errors.consignee = { invalid: true, message: "Consignee is required" };
    }
    if (!formData.consigneeAddress) {
      errors.consigneeAddress = {
        invalid: true,
        message: "Consignee address is required",
      };
    }
    if (formData.to === "") {
      errors.to = { invalid: true, message: "To is required" };
    }
    if (!formData.transactions.length) {
      errors.transactionDetails = {
        invalid: true,
        message: "At lease 1 transaction is required",
      };
    }
    if (!formData.lrCharges) {
      errors.lrCharges = {
        invalid: true,
        message: "LR charges are required",
      };
    }
    if (!formData.payType) {
      errors.payType = {
        invalid: true,
        message: "Payment type is required",
      };
    }
    if (!formData.payMode && formData.payType === "Paid") {
      errors.payMode = {
        invalid: true,
        message: "Payment mode is required",
      };
    }
    if (
      formData.payType &&
      formData.payType.value &&
      formData.payType.value === "Paid" &&
      formData.payMode &&
      formData.payMode.value === "By Cheque"
    ) {
      if (!formData.bankName) {
        errors.bankName = {
          invalid: true,
          message: "Bank name is required",
        };
      }
      if (!formData.chequeNo) {
        errors.chequeNo = {
          invalid: true,
          message: "Cheque no is required",
        };
      }
      if (!formData.chequeDate) {
        errors.chequeDate = {
          invalid: true,
          message: "Cheque date is required",
        };
      }
    }
    let validationErrors = false;
    for (const key in errors) {
      if (errors[key].invalid === true) {
        validationErrors = true;
      }
    }
    if (validationErrors) {
      setFormErrors(errors);
    }
    return validationErrors;
  };

  const dateInputChangeHandler = (name, date) => {
    setLorryReceipt((currState) => {
      return {
        ...currState,
        [name]: new Date(date),
      };
    });
  };

  const consignorChangeHandler = (e, value) => {
    if (value) {
      if (typeof value === "object") {
        setLorryReceipt((currState) => {
          return {
            ...currState,
            consignor: value,
            consignorName: value.label,
            consignorAddress: value.address,
            from: value.city,
            consignorPhone: value.telephone,
          };
        });
      }
    } else {
      setLorryReceipt((currState) => {
        return {
          ...currState,
          consignor: null,
          consignorName: "",
          consignorAddress: "",
          consignorPhone: "",
          from: "",
        };
      });
    }
  };

  const consigneeChangeHandler = (e, value) => {
    if (value) {
      if (typeof value === "object") {
        setLorryReceipt((currState) => {
          return {
            ...currState,
            consignee: value,
            consigneeName: value.label,
            consigneeAddress: value.address,
            to: value.city,
            consigneePhone: value.telephone,
          };
        });
      }
    } else {
      setLorryReceipt((currState) => {
        return {
          ...currState,
          consignee: null,
          consigneeName: "",
          consigneeAddress: "",
          consigneePhone: "",
          to: "",
        };
      });
    }
  };

  const autocompleteChangeListener = (e, option, name) => {
    setLorryReceipt((currState) => {
      return {
        ...currState,
        [name]: option,
      };
    });
  };

  useEffect(() => {
    setLorryReceipt((currState) => {
      return {
        ...currState,
        payMode: null,
        bankName: "",
        chequeNo: "",
        chequeDate: null,
      };
    });
  }, [lorryReceipt.payType]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="inner-wrap">
        <h1 className="pageHead">Add a lorry receipt</h1>
        {httpError !== "" && (
          <Stack
            sx={{
              width: "100%",
              margin: "0 0 30px 0",
              border: "1px solid red",
              borderRadius: "4px",
            }}
            spacing={2}
          >
            <Alert id="alertError" severity="error">
              {httpError}
            </Alert>
          </Stack>
        )}
        <form action="" onSubmit={submitHandler} id="lorryReceiptForm">
          <Paper sx={{ padding: "20px", marginBottom: "20px" }}>
            <div className="grid grid-6-col">
              <div className="grid-item">
                <FormControl
                  fullWidth
                  size="small"
                  error={formErrors.branch.invalid}
                >
                  <InputLabel id="branch">Branch</InputLabel>
                  <Select
                    labelId="branch"
                    name="branch"
                    label="Branch"
                    value={lorryReceipt.branch}
                    onChange={inputChangeHandler}
                    inputProps={{
                      readOnly:
                        user &&
                        user.type &&
                        user.type.toLowerCase() !== "superadmin" &&
                        user.type.toLowerCase() !== "admin",
                    }}
                  >
                    {branches.length > 0 &&
                      branches.map((branch) => (
                        <MenuItem
                          key={branch._id}
                          value={branch._id}
                          className="menuItem"
                        >
                          {branch.name}
                        </MenuItem>
                      ))}
                  </Select>
                  {formErrors.branch.invalid && (
                    <FormHelperText>{formErrors.branch.message}</FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="LR no."
                    value={lorryReceipt.lrNo}
                    onChange={inputChangeHandler}
                    name="lrNo"
                    id="lrNo"
                    inputProps={{
                      readOnly: true,
                    }}
                    disabled
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date"
                      inputFormat="DD/MM/YYYY"
                      value={lorryReceipt.date}
                      onChange={dateInputChangeHandler.bind(null, "date")}
                      renderInput={(params) => (
                        <TextField name="date" size="small" {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Invoice no"
                    value={lorryReceipt.invoiceNo}
                    onChange={inputChangeHandler}
                    name="invoiceNo"
                    id="invoiceNo"
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="E-Way bill no"
                    value={lorryReceipt.eWayBillNo}
                    onChange={inputChangeHandler}
                    name="eWayBillNo"
                    id="eWayBillNo"
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="FO no."
                    value={lorryReceipt.foNum}
                    onChange={inputChangeHandler}
                    name="foNum"
                    id="foNum"
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl
                  fullWidth
                  size="small"
                  error={formErrors.consignor.invalid}
                >
                  <Autocomplete
                    id="consignor"
                    freeSolo
                    autoSelect
                    size="small"
                    name="consignor"
                    options={customers}
                    value={lorryReceipt.consignor}
                    onChange={(e, value) => consignorChangeHandler(e, value)}
                    openOnFocus
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Consignor"
                        error={formErrors.consignor.invalid}
                        fullWidth
                      />
                    )}
                  />
                  {formErrors.consignor.invalid && (
                    <FormHelperText>
                      {formErrors.consignor.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl
                  fullWidth
                  error={formErrors.consignorAddress.invalid}
                >
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Consignor address"
                    value={lorryReceipt.consignorAddress}
                    error={formErrors.consignorAddress.invalid}
                    onChange={inputChangeHandler}
                    name="consignorAddress"
                    id="consignorAddress"
                  />
                  {formErrors.consignorAddress.invalid && (
                    <FormHelperText>
                      {formErrors.consignorAddress.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl
                  fullWidth
                  error={formErrors.consignorPhone.invalid}
                >
                  <TextField
                    size="small"
                    type="number"
                    variant="outlined"
                    label="Consignor phone"
                    value={lorryReceipt.consignorPhone}
                    error={formErrors.consignorPhone.invalid}
                    onChange={inputChangeHandler}
                    onInput={validatePhoneNumber}
                    name="consignorPhone"
                    id="consignorPhone"
                  />
                  {formErrors.consignorPhone.invalid && (
                    <FormHelperText>
                      {formErrors.consignorPhone.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth error={formErrors.from.invalid}>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="From"
                    error={formErrors.from.invalid}
                    value={lorryReceipt.from}
                    onChange={inputChangeHandler}
                    name="from"
                    id="from"
                  />
                  {formErrors.from.invalid && (
                    <FormHelperText>{formErrors.from.message}</FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl
                  fullWidth
                  size="small"
                  error={formErrors.consignee.invalid}
                >
                  <Autocomplete
                    id="consignee"
                    freeSolo
                    autoSelect
                    size="small"
                    name="consignee"
                    options={customers}
                    value={lorryReceipt.consignee}
                    onChange={(e, value) => consigneeChangeHandler(e, value)}
                    openOnFocus
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Consignee"
                        error={formErrors.consignee.invalid}
                        fullWidth
                      />
                    )}
                  />
                  {formErrors.consignee.invalid && (
                    <FormHelperText>
                      {formErrors.consignee.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl
                  fullWidth
                  error={formErrors.consigneeAddress.invalid}
                >
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Consignee address"
                    value={lorryReceipt.consigneeAddress}
                    error={formErrors.consigneeAddress.invalid}
                    onChange={inputChangeHandler}
                    name="consigneeAddress"
                    id="consigneeAddress"
                  />
                  {formErrors.consigneeAddress.invalid && (
                    <FormHelperText>
                      {formErrors.consigneeAddress.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl
                  fullWidth
                  error={formErrors.consigneePhone.invalid}
                >
                  <TextField
                    size="small"
                    type="number"
                    variant="outlined"
                    label="Consignee phone"
                    value={lorryReceipt.consigneePhone}
                    error={formErrors.consigneePhone.invalid}
                    onChange={inputChangeHandler}
                    onInput={validatePhoneNumber}
                    name="consigneePhone"
                    id="consigneePhone"
                  />
                  {formErrors.consigneePhone.invalid && (
                    <FormHelperText>
                      {formErrors.consigneePhone.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth error={formErrors.to.invalid}>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="To"
                    error={formErrors.to.invalid}
                    value={lorryReceipt.to}
                    onChange={inputChangeHandler}
                    name="to"
                    id="to"
                  />
                  {formErrors.to.invalid && (
                    <FormHelperText>{formErrors.to.message}</FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
            </div>
          </Paper>
        </form>
        <h2 className="mb20">Transactions details</h2>
        {formErrors.transactionDetails.invalid && (
          <p className="error">{formErrors.transactionDetails.message}</p>
        )}
        <Paper sx={{ padding: "20px", marginBottom: "20px" }}>
          <TransactionDetails
            articles={articles}
            lorryReceipt={lorryReceipt}
            setLorryReceipt={setLorryReceipt}
          />
          <Divider sx={{ margin: "20px 0" }} />
          <form action="" onSubmit={submitHandler} id="lorryReceiptForm">
            <div className="grid grid-7-col">
              <div className="grid-item">
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Total freight"
                    value={lorryReceipt.totalFreight}
                    name="totalFreight"
                    id="totalFreight"
                    InputProps={{
                      readOnly: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          &#8377;
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Delivery charges"
                    value={lorryReceipt.deliveryCharges}
                    name="deliveryCharges"
                    id="deliveryCharges"
                    onChange={inputChangeHandler}
                    onInput={validateNumber}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          &#8377;
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth error={formErrors.lrCharges.invalid}>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="LR charges"
                    value={lorryReceipt.lrCharges}
                    error={formErrors.lrCharges.invalid}
                    name="lrCharges"
                    id="lrCharges"
                    onChange={inputChangeHandler}
                    onInput={validateNumber}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          &#8377;
                        </InputAdornment>
                      ),
                    }}
                  />
                  {formErrors.lrCharges.invalid && (
                    <FormHelperText>
                      {formErrors.lrCharges.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Hamali"
                    value={lorryReceipt.hamali}
                    name="hamali"
                    id="hamali"
                    onChange={inputChangeHandler}
                    onInput={validateNumber}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          &#8377;
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    type="number"
                    variant="outlined"
                    label="Total"
                    value={lorryReceipt.total}
                    name="total"
                    id="total"
                    InputProps={{
                      readOnly: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          &#8377;
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </div>
            </div>
          </form>
        </Paper>
        <form action="" onSubmit={submitHandler} id="lorryReceiptForm">
          <h2 className="mb20">Billing details</h2>
          <Paper sx={{ padding: "20px", marginBottom: "20px" }}>
            <div className="grid grid-6-col">
              <div className="grid-item">
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Material cost"
                    value={lorryReceipt.materialCost}
                    onChange={inputChangeHandler}
                    onInput={validateNumber}
                    name="materialCost"
                    id="materialCost"
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth size="small">
                  <Autocomplete
                    id="deliveryType"
                    disablePortal
                    autoSelect
                    autoHighlight={true}
                    size="small"
                    name="deliveryType"
                    options={DELIVERY_TYPES}
                    value={lorryReceipt.deliveryType}
                    onChange={(e, value) =>
                      autocompleteChangeListener(e, value, "deliveryType")
                    }
                    openOnFocus
                    renderInput={(params) => (
                      <TextField {...params} label="Delivery type" fullWidth />
                    )}
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl
                  fullWidth
                  size="small"
                  error={formErrors.payType.invalid}
                >
                  <Autocomplete
                    id="payType"
                    disablePortal
                    autoSelect
                    autoHighlight={true}
                    size="small"
                    name="payType"
                    options={PAY_TYPES}
                    value={lorryReceipt.payType}
                    onChange={(e, value) =>
                      autocompleteChangeListener(e, value, "payType")
                    }
                    openOnFocus
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Pay type"
                        error={formErrors.payType.invalid}
                        fullWidth
                      />
                    )}
                  />
                  {formErrors.payType.invalid && (
                    <FormHelperText>
                      {formErrors.payType.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth size="small">
                  <Autocomplete
                    id="toBilled"
                    disablePortal
                    autoSelect
                    autoHighlight={true}
                    size="small"
                    name="toBilled"
                    options={TO_BILLED}
                    value={lorryReceipt.toBilled}
                    onChange={(e, value) =>
                      autocompleteChangeListener(e, value, "toBilled")
                    }
                    openOnFocus
                    renderInput={(params) => (
                      <TextField {...params} label="To billed" fullWidth />
                    )}
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth size="small">
                  <Autocomplete
                    id="collectAt"
                    disablePortal
                    autoSelect
                    autoHighlight={true}
                    size="small"
                    name="collectAt"
                    options={places}
                    value={lorryReceipt.collectAt}
                    onChange={(e, value) =>
                      autocompleteChangeListener(e, value, "collectAt")
                    }
                    openOnFocus
                    renderInput={(params) => (
                      <TextField {...params} label="Collect at" fullWidth />
                    )}
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth size="small">
                  <Autocomplete
                    id="serviceTaxBy"
                    disablePortal
                    autoSelect
                    autoHighlight={true}
                    size="small"
                    name="serviceTaxBy"
                    options={SERVICE_TAX_BY}
                    value={lorryReceipt.serviceTaxBy}
                    onChange={(e, value) =>
                      autocompleteChangeListener(e, value, "serviceTaxBy")
                    }
                    openOnFocus
                    renderInput={(params) => (
                      <TextField {...params} label="Service tax by" fullWidth />
                    )}
                  />
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth error={formErrors.payMode.invalid}>
                  <Autocomplete
                    id="payMode"
                    disablePortal
                    autoSelect
                    autoHighlight={true}
                    size="small"
                    name="payMode"
                    options={PAY_MODE}
                    value={lorryReceipt.payMode}
                    disabled={lorryReceipt.payType?.value !== "Paid"}
                    onChange={(e, value) =>
                      autocompleteChangeListener(e, value, "payMode")
                    }
                    openOnFocus
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Pay mode"
                        error={formErrors.payMode.invalid}
                        fullWidth
                      />
                    )}
                  />
                  {formErrors.payMode.invalid && (
                    <FormHelperText>
                      {formErrors.payMode.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth error={formErrors.bankName.invalid}>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Bank name"
                    value={lorryReceipt.bankName}
                    onChange={inputChangeHandler}
                    error={formErrors.bankName.invalid}
                    disabled={lorryReceipt.payMode?.value !== "By Cheque"}
                    name="bankName"
                    id="bankName"
                  />
                  {formErrors.bankName.invalid && (
                    <FormHelperText>
                      {formErrors.bankName.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth error={formErrors.chequeNo.invalid}>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Cheque no"
                    value={lorryReceipt.chequeNo}
                    onChange={inputChangeHandler}
                    error={formErrors.chequeNo.invalid}
                    disabled={lorryReceipt.payMode?.value !== "By Cheque"}
                    name="chequeNo"
                    id="chequeNo"
                  />
                  {formErrors.chequeNo.invalid && (
                    <FormHelperText>
                      {formErrors.chequeNo.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth error={formErrors.chequeDate.invalid}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date"
                      inputFormat="DD/MM/YYYY"
                      value={lorryReceipt.chequeDate}
                      onChange={dateInputChangeHandler.bind(null, "chequeDate")}
                      error={formErrors.chequeDate.invalid}
                      disabled={lorryReceipt.payMode?.value !== "By Cheque"}
                      renderInput={(params) => (
                        <TextField
                          name="date"
                          size="small"
                          {...params}
                          error={formErrors.chequeDate.invalid}
                        />
                      )}
                    />
                  </LocalizationProvider>
                  {formErrors.chequeDate.invalid && (
                    <FormHelperText>
                      {formErrors.chequeDate.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="grid-item">
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    variant="outlined"
                    label="Remark"
                    value={lorryReceipt.remark}
                    onChange={inputChangeHandler}
                    name="remark"
                    id="remark"
                  />
                </FormControl>
              </div>
            </div>
          </Paper>
        </form>

        {open && (
          <Dialog
            isOpen={true}
            onClose={handleClose}
            title="Success"
            content={`LR ${lrNo} generated successfully.`}
            success
          />
        )}
        <Paper sx={{ padding: "20px", marginBottom: "20px" }}>
          <div className="right">
            <Button
              variant="outlined"
              size="medium"
              onClick={backButtonHandler}
            >
              Back
            </Button>
            <Button
              variant="outlined"
              size="medium"
              onClick={resetButtonHandler}
              className="ml6"
            >
              Reset
            </Button>
            <Button
              variant="contained"
              size="medium"
              type="submit"
              color="primary"
              form="lorryReceiptForm"
              className="ml6"
            >
              Save
            </Button>
            <Button
              variant="contained"
              size="medium"
              type="button"
              color="primary"
              form="lorryReceiptForm"
              className="ml6"
              onClick={saveAndPrint}
            >
              Save &amp; Print
            </Button>

            <Button
              variant="contained"
              size="medium"
              type="button"
              color="primary"
              form="lorryReceiptForm"
              className="ml6"
              onClick={(e) => saveAndPrint(e, true)}
            >
              Save &amp; Print w/o Amount
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default LorryReceiptAdd;