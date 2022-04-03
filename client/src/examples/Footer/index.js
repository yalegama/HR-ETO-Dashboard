
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer() {
  return (
    <VuiBox
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      direction="row"
      component="footer"
      py={2}
      pb={0}
    >
      <VuiBox item xs={12} sx={{ textAlign: "center" }}>
        <VuiTypography
          variant="button"
          sx={{ textAlign: "center", fontWeight: "400 !important" }}
          color="white"
        >
          @ 2021 Made by &nbsp;&nbsp;{" "}
          
          <VuiTypography
            ml="2px"
            mr="2px"
            component="a"
            variant="button"
            href="#"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
          >
            Nadun Yalegama
          </VuiTypography>
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

export default Footer;
