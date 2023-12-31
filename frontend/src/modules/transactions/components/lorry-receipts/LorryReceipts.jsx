import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  DataGrid,
  GridToolbarContainer,
  useGridApiRef,
} from "@mui/x-data-grid";
import {
  IconButton,
  Alert,
  Stack,
  FormControl,
  Button,
  TextField,
  InputAdornment,
  Autocomplete,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  LoadingSpinner,
  Dialog as CustomDialog,
  SendEmail,
} from "../../../../ui-controls";
import {
  base64ToObjectURL,
  downloadFile,
  getFormattedDate,
  isSuperAdminOrAdmin,
} from "../../../../services/utils";
import { checkAuth } from "../../../../router/RequireAuth";
import {
  deleteLorryReceipt,
  downloadLorryReceipt,
  getArticles,
  getBranches,
  getCustomers,
  getLorryReceiptsWithCount,
  getPlaces,
  selectIsLoading,
  setSearch as onSearch,
} from "./slice/lorryReceiptSlice";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { setBranch } from "../../../user/slice/userSlice";

const LorryReceipts = () => {
  const columns = [
    { field: "_id", headerName: "Id" },
    {
      field: "lrNo",
      headerName: "LR no.",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "consignorName",
      headerName: "Consignor",
      flex: 1,
    },
    { field: "from", headerName: "From", flex: 1 },
    {
      field: "consigneeName",
      headerName: "Consignee",
      flex: 1,
    },
    { field: "to", headerName: "To", flex: 1 },
    { field: "payType", headerName: "Pay type", flex: 1 },
    {
      field: "total",
      headerName: "Grand total",
      type: "number",
      flex: 1,
      renderCell: (params) => {
        return <strong>₹ {params.row.total}</strong>;
      },
    },
    {
      field: "actions",
      headerName: "Action",
      sortable: false,
      minWidth: 180,
      flex: 1,
      renderCell: (params) => {
        const triggerView = (e) => {
          e.stopPropagation();
          setViewLRId({ ...params.row, download: false });
        };

        const triggerDownload = (e) => {
          e.stopPropagation();
          setViewLRId({ ...params.row, download: true });
        };

        const triggerEmail = (e) => {
          e.stopPropagation();
          setIsOpenEmail(true);
          setSelectedLR({ ...params.row });
        };

        const triggerEdit = (e) => {
          e.stopPropagation();
          return navigateToEdit(params.row._id);
        };
        const triggerDelete = (e) => {
          e.stopPropagation();
          return removeLorryReceipt(params.row._id);
        };
        return (
          <>
            <IconButton size="small" onClick={triggerDownload} color="primary">
              <DownloadIcon />
            </IconButton>
            <IconButton size="small" onClick={triggerView} color="primary">
              <VisibilityIcon />
            </IconButton>
            <IconButton size="small" onClick={triggerEmail} color="primary">
              <EmailIcon />
            </IconButton>
            <IconButton size="small" onClick={triggerEdit} color="primary">
              <EditIcon />
            </IconButton>
            {isSuperAdminOrAdmin() ? (
              <IconButton size="small" onClick={triggerDelete} color="error">
                <DeleteIcon />
              </IconButton>
            ) : null}
          </>
        );
      },
    },
  ];

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isLoading = useSelector(selectIsLoading);

  const [branches, setbranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [httpError, setHttpError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [viewLRId, setViewLRId] = useState("");
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [selectedLR, setSelectedLR] = useState(null);
  const { search: searchData } = useSelector(
    ({ lorryreceipt }) => lorryreceipt
  );
  const apiRef = useGridApiRef();
  const dispatch = useDispatch();

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 100,
  });
  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    total: 0,
  });

  useEffect(() => {
    dispatch(getBranches())
      .then(({ payload = {} }) => {
        const { message } = payload?.data || {};
        if (message) {
          setHttpError(message);
        } else {
          setHttpError("");
          setbranches(payload?.data);
          if (payload?.data?.length) {
            const filteredBranch = payload?.data?.find?.(
              (branch) => branch._id === user.branch
            );
            setSelectedBranch(filteredBranch);
          }
        }
      })
      .catch(() => {
        setHttpError(
          "Something went wrong! Please try later or contact Administrator."
        );
      });

    dispatch(getArticles());
    dispatch(getCustomers());
    dispatch(getPlaces());
  }, []);

  const fetchData = () => {
    const requestObject = {
      branch: selectedBranch._id,
      pagination: {
        limit: paginationModel.pageSize ? paginationModel.pageSize : 100,
        page: paginationModel.page + 1,
      },
      search: searchData,
    };
    dispatch(getLorryReceiptsWithCount(requestObject))
      .then(({ payload = {} }) => {
        const { message } = payload?.data || {};
        if (message) {
          setHttpError(message);
        } else {
          setPageState((currState) => {
            return {
              ...currState,
              isLoading: false,
              data: payload?.data.lorryReceipts?.map?.((lr) => ({
                ...lr,
                date: getFormattedDate(new Date(lr.date)),
                total: lr.total?.toFixed?.(2),
              })),
              total: payload?.data.count,
            };
          });
          setHttpError("");
        }
      })
      .catch((error) => {
        setHttpError(error.message);
      });
  };

  useEffect(() => {
    if (selectedBranch?._id) {
      fetchData();
    }
  }, [
    selectedBranch,
    paginationModel.page,
    paginationModel.pageSize,
    searchData,
  ]);

  useEffect(() => {
    if (viewLRId) {
      dispatch(
        downloadLorryReceipt({
          id: viewLRId._id,
          email: "",
          user: user?.employee?.name || "",
        })
      )
        .then(({ payload = {} }) => {
          const { message } = payload?.data || {};
          if (message) {
            setHttpError(message);
          } else {
            const fileURL = base64ToObjectURL(payload?.data.file);
            const selectedLR = pageState.data?.find?.(
              (lr) => lr._id === viewLRId._id
            );
            if (fileURL) {
              if (viewLRId.download) {
                const name = selectedLR.lrNo + ".pdf";
                downloadFile(fileURL, name);
              } else {
                window.open(fileURL, "_blank");
              }
            }
          }
        })
        .catch((error) => {
          setHttpError(error.message);
        });
    }
  }, [viewLRId]);

  useEffect(() => {
    if (sendEmail && emailAddress && selectedLR) {
      setIsOpenEmail(false);
      dispatch(
        downloadLorryReceipt({
          id: selectedLR._id,
          email: emailAddress,
          user: user?.employee?.name || "",
        })
      )
        .then(({ payload = {} }) => {
          const { message } = payload?.data || {};
          if (message) {
            setHttpError(message);
          }
          setSendEmail(false);
          setSelectedLR(null);
        })
        .catch((error) => {
          setHttpError(error.message);
          setSelectedLR(null);
        });
    }
  }, [sendEmail, emailAddress, selectedLR]);

  const onSearchChange = (e) => {
    dispatch(onSearch(e.target.value));
  };

  const handleSendEmail = (email) => {
    setSendEmail(true);
    setEmailAddress(email);
  };

  const handleAddLR = () => {
    if (checkAuth("Sales/Purchase", "LorryReceipt", "write")) {
      navigate("/transactions/lorryReceipts/addLorryReceipt", {
        state: selectedBranch,
      });
    }
  };

  const navigateToEdit = (id) => {
    if (checkAuth("Sales/Purchase", "LorryReceipt", "write")) {
      navigate("/transactions/lorryReceipts/editLorryReceipt", {
        state: { lrId: id },
      });
    }
  };

  const removeLorryReceipt = (id) => {
    if (checkAuth("Sales/Purchase", "LorryReceipt", "write")) {
      setSelectedId(id);
      setIsDialogOpen(true);
    }
  };

  const handleDialogClose = (e) => {
    setIsDialogOpen(true);
    if (e.target.value === "true") {
      dispatch(deleteLorryReceipt(selectedId))
        .then(({ payload = {} }) => {
          const { message } = payload?.data || {};
          if (message) {
            setHttpError(message);
          } else {
            fetchData();
          }
          setIsDialogOpen(false);
        })
        .catch(() => {
          setHttpError(
            "Something went wrong! Please try later or contact Administrator."
          );
        });
    } else {
      setSelectedId("");
    }
    setIsDialogOpen(false);
  };

  const branchChangeHandler = (e, value) => {
    setSelectedBranch(value);
    setPaginationModel({
      page: 0,
      pageSize: 100,
    });
    dispatch(setBranch(value._id));
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="inner-wrap">
        {isDialogOpen && (
          <CustomDialog
            isOpen={true}
            onClose={handleDialogClose}
            title="Are you sure?"
            content="Do you want to delete the lorry receipt?"
            warning
          />
        )}

        <div className="page_head">
          <h1 className="pageHead">Lorry receipts</h1>
          <div className="page_actions">
            <FormControl
              size="small"
              sx={{ width: "230px", marginRight: "5px" }}
            >
              <Autocomplete
                disablePortal
                size="small"
                name="branch"
                className="multi-select"
                options={branches}
                value={selectedBranch || null}
                onChange={branchChangeHandler}
                disabled={!isSuperAdminOrAdmin()}
                getOptionLabel={(branch) => branch.name}
                openOnFocus
                renderInput={(params) => (
                  <TextField {...params} label="Select branch" fullWidth />
                )}
              />
            </FormControl>
            <Button
              variant="contained"
              size="small"
              type="button"
              color="primary"
              className="ml6"
              onClick={handleAddLR}
            >
              Add a lorry receipt
            </Button>
          </div>
        </div>

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
            <Alert severity="error">{httpError}</Alert>
          </Stack>
        )}

        <div style={{ width: "100%" }}>
          <DataGrid
            apiRef={apiRef}
            autoHeight
            density="compact"
            rows={pageState.data}
            rowCount={pageState.total}
            loading={pageState.isLoading}
            pageSizeOptions={[100]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            paginationMode="server"
            columns={columns}
            getRowId={(row) => row._id}
            sx={{ backgroundColor: "primary.contrastText" }}
            initialState={{
              ...columns,
              columns: {
                columnVisibilityModel: {
                  _id: false,
                },
              },
            }}
            disableSelectionOnClick
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            components={{
              Toolbar: () => (
                <GridToolbarContainer
                  sx={{
                    gap: "6px",
                    mb: "10px",
                    justifyContent: "end",
                    border: "none",
                  }}
                >
                  <TextField
                    variant="standard"
                    placeholder="Search..."
                    autoFocus={!!searchData}
                    onChange={onSearchChange}
                    value={searchData}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchOutlined />
                        </InputAdornment>
                      ),
                    }}
                  />
                </GridToolbarContainer>
              ),
            }}
          />
          <SendEmail
            isOpen={isOpenEmail}
            setIsOpen={setIsOpenEmail}
            handleEmailClose={() => {
              setIsOpenEmail(false);
              setSelectedLR(null);
            }}
            handleSendEmail={(email) => handleSendEmail(email)}
            contentBody=""
          />
        </div>
      </div>
    </>
  );
};

export default LorryReceipts;
