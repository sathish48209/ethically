import React, { useMemo } from "react";
import {
  Chip,
  IconButton,
  TextField,
  Typography,
  Stack,
  InputAdornment,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ParkIcon from "@mui/icons-material/Park";
import SearchIcon from "@mui/icons-material/Search";
import { MaterialReactTable } from "material-react-table";

const data = [
  {
    id: "E939490",
    name: "Heather Morales",
    email: "heathermorales@microsoft.com",
    status: "3Risks",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4bCSBiL3114mq9BSIZmJ3Rq6huVNeW053516pM5IhIZeNtVGvSWtaXrE12AJUSSHij0&usqp=CAU",
  },
  {
    id: "E939490",
    name: "Heather Morales",
    email: "heathermorales@microsoft.com",
    status: "Active",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU",
  },
  {
    id: "E939490",
    name: "Heather Morales",
    email: "heathermorales@microsoft.com",
    status: "Pending Approval",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DLCX8WkTXBhPLEdDSurXmr66XlwIpa_EuY4cpUS9WxexK-piyps9ivFHtbnltBgDq7g&usqp=CAU",
  },
  {
    id: "E939490",
    name: "Heather Morales",
    email: "heathermorales@microsoft.com",
    status: "Pending Approval",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rj-rdgVS9fcu6o9TmvcP66B99FR2uV6piA&usqp=CAU",
  },
  {
    id: "E939490",
    name: "Heather Morales",
    email: "heathermorales@microsoft.com",
    status: "Active",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGvMK24_mE5lWbP0MMj9Jw0uaFpOYfkmXlg&usqp=CAU",
  },
];

const EmployeeDetails = () => {
  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.name, //simple recommended way to define a column
        header: "Employee Info",
        muiTableHeadCellProps: { sx: { fontSize: "0.7rem" } }, //custom props
        // Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              alt="avatar"
              height={30}
              src={row.original.avatar}
              loading="lazy"
              style={{ borderRadius: "50%" }}
            />
            {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" sx={{ fontWeight: "700" }}>
                {renderedCellValue}
              </Typography>
              <Typography variant="caption">{row.original.email}</Typography>
            </Box>
          </Box>
        ),
      },
      {
        accessorFn: (row) => row.id, //alternate way
        muiTableHeadCellProps: { sx: { fontSize: "0.7rem" } },
        header: "Employee ID",
      },
      {
        accessorFn: (row) => row.status, //alternate way
        muiTableHeadCellProps: { sx: { fontSize: "0.7rem" } },
        header: "Status",
        Cell: ({ renderedCellValue }) => (
          <Chip
            label={renderedCellValue}
            size="small"
            // color={renderedCellValue === "Active" ? "sucess" : "warning"}
            color="warning"
            variant="outlined"
          />
        ),
      },
    ],
    []
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ height: "100vh" }}>
        <Typography
          sx={{ fontWeight: "600", fontSize: "1.3rem", my: 2 }}
          variant="body2"
        >
          Good morning Heather,
        </Typography>

        <Box sx={{ display: "flex", gap: "1rem", mb: 2 }}>
          <Card sx={{ padding: "1rem", maxWidth: "8rem" }}>
            <Box>
              <Typography
                sx={{ fontSize: "0.9rem", fontWeight: "900", margin: 0 }}
                color="text.secondary"
                gutterBottom
              >
                Active employees
              </Typography>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "900",
                  fontColor: "#333",
                  margin: 0,
                }}
                color="text.secondary"
                gutterBottom
              >
                45
              </Typography>
            </Box>
          </Card>
          <Card sx={{ padding: "1rem", flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <Box sx={{ alignSelf: "center" }}>
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "0.9rem", fontWeight: "900", margin: 0 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    TC02 emission
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "2rem",
                        fontWeight: "900",
                        margin: 0,
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      3.5
                    </Typography>
                    <span
                      sx={{
                        fontSize: "0.25rem !important",
                        fontWeight: "300 !important",
                        alignSelf: "center",
                      }}
                    >
                      per employee
                    </span>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <Box sx={{ alignSelf: "center" }}>
                  <IconButton>
                    <MessageIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "0.9rem", fontWeight: "900", margin: 0 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Kms shared
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "2rem",
                        fontWeight: "900",
                        margin: 0,
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      13K
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <Box sx={{ alignSelf: "center" }}>
                  <IconButton>
                    <ParkIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "0.9rem", fontWeight: "900", margin: 0 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Forest area needed
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "2rem",
                        fontWeight: "900",
                        margin: 0,
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      140
                    </Typography>
                    <span
                      sx={{
                        fontSize: "0.25rem !important",
                        fontWeight: "300 !important",
                        alignSelf: "center",
                      }}
                    >
                      hectares
                    </span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Card sx={{ padding: "0.7rem", background: "#dce775" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ fontSize: "0.9rem", fontWeight: "900", margin: 0 }}
                color="text.secondary"
                gutterBottom
              >
                Share this link to the employees for Signing up
              </Typography>
              <Chip
                label="https://mui.com/material-ui/react-chip/"
                color="secondary"
                // variant="outlined"
              />
            </Box>
          </Card>
        </Box>

        <Box>
          <Card>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              p={2}
            >
              <Typography
                variant="button"
                sx={{
                  fontWeight: "600",
                  fontSize: "0.75rem",
                }}
              >
                {"Employees List"}
              </Typography>
              <TextField
                size="small"
                placeholder="Search Employees"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <MaterialReactTable
              columns={columns}
              data={data}
              enableRowSelection={false}
              initialState={{ density: "compact" }}
              enableTopToolbar={false}
              /* muiSearchTextFieldProps={{
                placeholder: "Search All Props",
                sx: { minWidth: "18rem" },
                variant: "outlined",
              }} */
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default EmployeeDetails;
