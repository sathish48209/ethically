import React, { useMemo } from "react";
import {
  Chip,
  TextField,
  Typography,
  Stack,
  InputAdornment,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TablePagination from "@mui/material/TablePagination";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import { green, brown, grey } from "@mui/material/colors";

function createData(id, name, email, avatar) {
  return { id, name, email, avatar };
}

const rows = [
  createData(
    "E939490",
    "Heather Morales",
    "heathermorales@microsoft.com",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4bCSBiL3114mq9BSIZmJ3Rq6huVNeW053516pM5IhIZeNtVGvSWtaXrE12AJUSSHij0&usqp=CAU"
  ),
  createData(
    "E939490",
    "Heather Morales",
    "heathermorales@microsoft.com",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEJcABb9jKdtNRg7y9egskdQ--Kllp7yG0kJP4Ravuo1L5ljoj0_NROdg6sew2YQNh_A&usqp=CAU"
  ),
  createData(
    "E939490",
    "Heather Morales",
    "heathermorales@microsoft.com",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DLCX8WkTXBhPLEdDSurXmr66XlwIpa_EuY4cpUS9WxexK-piyps9ivFHtbnltBgDq7g&usqp=CAU"
  ),
  createData(
    "E939490",
    "Heather Morales",
    "heathermorales@microsoft.com",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rj-rdgVS9fcu6o9TmvcP66B99FR2uV6piA&usqp=CAU"
  ),
  createData(
    "E939490",
    "Heather Morales",
    "heathermorales@microsoft.com",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGvMK24_mE5lWbP0MMj9Jw0uaFpOYfkmXlg&usqp=CAU"
  ),
];

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

const statsCountProps = {
  fontWeight: 900,
  fontSize: "2rem",
  color: "text.primary",
  gutterBottom: true,
  sx: {
    lineHeight: 1.2,
    m: 0,
  },
};

const statsLabelStyles = {
  fontSize: "0.9rem",
  fontWeight: "700",
  margin: 0,
};

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
              <Typography sx={{ ...statsLabelStyles }} gutterBottom>
                Active employees
              </Typography>
              <Typography {...statsCountProps}>45</Typography>
            </Box>
          </Card>
          <Card sx={{ padding: "1rem", flex: 1 }}>
            <Stack flexDirection="row" alignItems="center">
              <Stack flexDirection="row" gap={2} flexGrow={1}>
                <Box sx={{ alignSelf: "center" }}>
                  <Avatar sx={{ bgcolor: green[200] }}>
                    <FavoriteBorderOutlinedIcon
                      sx={{
                        color: green[800],
                      }}
                    />
                  </Avatar>
                </Box>
                <Box>
                  <Typography sx={{ ...statsLabelStyles }} gutterBottom>
                    TC02 emission
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Stack flexDirection="row" gap={0.75} alignItems="flex-end">
                      <Typography {...statsCountProps}>3.5</Typography>
                      <Typography variant="caption" sx={{ mb: 0.5 }}>
                        per employee
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
              <Stack flexDirection="row" gap={2} flexGrow={1}>
                <Box sx={{ alignSelf: "center" }}>
                  <Avatar sx={{ bgcolor: brown[200] }}>
                    <MessageOutlinedIcon
                      sx={{
                        color: brown[800],
                      }}
                    />
                  </Avatar>
                </Box>
                <Box>
                  <Typography sx={{ ...statsLabelStyles }} gutterBottom>
                    Kms shared
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography {...statsCountProps}>13K</Typography>
                  </Box>
                </Box>
              </Stack>
              <Stack flexDirection="row" gap={2} flexGrow={1}>
                <Box sx={{ alignSelf: "center" }}>
                  <Avatar sx={{ bgcolor: grey[300] }}>
                    <ParkOutlinedIcon
                      sx={{
                        color: grey[800],
                      }}
                    />
                  </Avatar>
                </Box>
                <Box>
                  <Typography sx={{ ...statsLabelStyles }} gutterBottom>
                    Forest area needed
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Stack flexDirection="row" gap={0.75} alignItems="flex-end">
                      <Typography {...statsCountProps}>140</Typography>
                      <Typography variant="caption" sx={{ mb: 0.5 }}>
                        hectares
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </Stack>
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
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Employee Info</TableCell>
                    <TableCell>Employee ID</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" size="small">
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
                            src={row.avatar}
                            loading="lazy"
                            style={{ borderRadius: "50%" }}
                          />
                          {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: "700" }}
                            >
                              {row.name}
                            </Typography>
                            <Typography variant="caption">
                              {row.email}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell size="small">{row.id}</TableCell>
                      <TableCell size="small">
                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                          endIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={5}
              page={0}
              // onPageChange={handleChangePage}
              // onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default EmployeeDetails;
