import { Grid, Box, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Link from "@mui/material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";

const iconStyle = {
  width: 55,
  height: 55,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.dark",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.main",
  },
};

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "sp-SP",
    name: "Spanish",
  },
];

const CURRENCIES = [
  {
    code: "GBP",
    name: "British Pound",
    icon: "£",
  },
  {
    code: "EUR",
    name: "Euro",
    icon: "€",
  },
];
function Footer() {
  return (
    <Typography variant="footer" sx={{ display: "flex", bgcolor: "#FFD072" }}>
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              justifyContent="center"
              spacing={2}
              sx={{ height: 120, marginBottom: "auto" }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <FacebookIcon sx={{ color: "white" }} />
                </Box>
                <Box
                  component="a"
                  href="https://twitter.com/MUI_hq"
                  sx={iconStyle}
                >
                  <TwitterIcon sx={{ color: "white" }} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={8} md={3}>
            <Typography variant="h6" marked="left" gutterBottom>
              Currency
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: "100%" }}
            >
              {CURRENCIES.map((currency) => (
                <option value={currency.code} key={currency.code}>
                  {currency.name} {currency.icon}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}

export default Footer;
