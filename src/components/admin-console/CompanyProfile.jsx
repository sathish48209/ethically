import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Divider, Stack } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const captionStyles = {
  fontSize: ".95rem",
  fontWeight: 600,
};

const valueStyles = {
  fontSize: "1.1rem",
};

const CompanyProfile = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "0.5rem",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Company Profile
            </Typography>
          </Grid>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 4, mb: 2 }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Company Information
            </Typography>
            <Button
              variant="outlined"
              sx={{ textTransform: "capitalize", fontWeight: 600 }}
            >
              Edit details
            </Button>
          </Stack>

          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="caption" sx={captionStyles}>
                Company Name
              </Typography>
              <Typography variant="subtitle1" sx={valueStyles}>
                Ethically
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" sx={captionStyles}>
                No. of employees
              </Typography>
              <Typography variant="subtitle1" sx={valueStyles}>
                342
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" sx={captionStyles}>
                Website
              </Typography>
              <Typography variant="subtitle1" sx={valueStyles}>
                www.dotethically.com
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" sx={captionStyles}>
                Industry
              </Typography>
              <Typography variant="subtitle1" sx={valueStyles}>
                Information Technology
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" sx={captionStyles}>
                Address
              </Typography>
              <Typography variant="subtitle1" sx={valueStyles}>
                77 Lower Camden Street, Dublin D02 XE80,Ireland
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 3, mb: 2 }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Primary Contact
            </Typography>
            <Button
              variant="outlined"
              sx={{ textTransform: "capitalize", fontWeight: 600 }}
            >
              Edit details
            </Button>
          </Stack>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="caption" sx={captionStyles}>
                Name
              </Typography>
              <Typography variant="subtitle1" sx={valueStyles}>
                Bharath
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" sx={captionStyles}>
                Offical Email ID
              </Typography>
              <Typography variant="subtitle1" sx={valueStyles}>
                bharathnatarajan@outlook.com
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" sx={captionStyles}>
                Contact No.
              </Typography>
              <Typography variant="subtitle1" sx={valueStyles}>
                +353 15566512
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default CompanyProfile;
