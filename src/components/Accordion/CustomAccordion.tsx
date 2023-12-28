import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./Accordion.css";
 import Drop from "../Drop/Drop";

var icon = <CreditCardIcon />;
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<RadioButtonUncheckedIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgb(246,249,250)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v9/card-default.svg"
            style={{ height: "25px", width: "auto" }}
          ></img>
          <Typography sx={{ fontWeight: 700, paddingLeft: "0.5em" }}>
            {" "}
            Credit/Debit Card
          </Typography>
          <div className="logosforcreditcard">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg"
              style={{ height: "25px", width: "auto" }}
            ></img>
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg"
              style={{ height: "25px", width: "auto" }}
            ></img>
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/card-amex.svg"
              style={{ height: "25px", width: "auto" }}
            ></img>
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/card-dinersclub.svg"
              style={{ height: "25px", width: "auto" }}
            ></img>
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/card-rupay.svg"
              style={{ height: "25px", width: "auto" }}
            ></img>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="Credit-card-details">
              <div className="name">
                <p className="nameoncard"> Name on card</p>
              </div>
              <div>
                <input placeholder="Name on card" className="input-box"></input>
              </div>
              <div className="card-number">
                <p className="cardnumber"> Card number</p>
              </div>

              <div>
                <input
                  placeholder="1234 5678 9012 3456"
                  className="input-box"
                ></input>
              </div>
              <div className="logosforcredit">
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg"
                  style={{ height: "25px", width: "auto" }}
                ></img>
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg"
                  style={{ height: "25px", width: "auto" }}
                ></img>
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v9/card-amex.svg"
                  style={{ height: "25px", width: "auto" }}
                ></img>
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v9/card-dinersclub.svg"
                  style={{ height: "25px", width: "auto" }}
                ></img>
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v9/card-rupay.svg"
                  style={{ height: "25px", width: "auto" }}
                ></img>
              </div>
              <div className="row expiry-cvv">
                <div className="col-6 expiry">
                  <div className="expiry">
                    <div className="expiry-date">
                      <p className="edate">Expiry date </p>
                    </div>
                    <div>
                      <input
                        placeholder="MM/YY"
                        className="input-box-2"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="col-6 expiry">
                  <div className="expiry">
                    <div className="expiry-date">
                      <p className="edate"> CVC/CVV </p>
                    </div>
                    <div>
                      <input placeholder="CVC" className="input-box-2"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v9/common-upi.svg"
            style={{ height: "25px", width: "auto" }}
          ></img>

          <Typography sx={{ fontWeight: 700, paddingLeft: "0.5em" }}>
            UPI
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="row">
              <div className="col-5">
                <div>
                  <p>
                    Enter your UPI ID / VPA and make payment on your UPI app.
                  </p>
                </div>
                <div className="expiry">
                  <div className="expiry-date">
                    <p className="edate"> UPI ID/VPA </p>
                  </div>
                  <div className="input-upi">
                    <input
                      placeholder="UPI ID /VPA"
                      className="input-box-3"
                    ></input>
                  </div>
                  <button className="makepayment" type="submit">
                    <p className="makepaymenttext">Make Payment </p>
                  </button>
                </div>
              </div>
              <div className="col-2 ordiv">
                <div className="divforor">
                  <p className="ortext">OR</p>
                </div>
              </div>
              <div className="col-5">
                <div>
                  <p>
                    Scan QR code to complete your UPI payment on your mobile
                    device.
                  </p>
                </div>
                <div>
                  <img src="data:image/png;base64,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"></img>
                </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v9/common-onlinebanking-in.svg"
            style={{ height: "25px", width: "auto" }}
          ></img>
          <Typography sx={{ fontWeight: 700, paddingLeft: "0.5em" }}>
            Net Banking
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="netbanking">
              <p className="netbanking-deatils">
                In order to complete your transaction, we will transfer you over
                to Adyen's secure servers.
              </p>
              <Drop />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <AccountBalanceIcon />
          <Typography sx={{ fontWeight: 700, paddingLeft: "0.5em" }}>
            Mobile Wallets
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="mobilewallet">
              <p>
                In order to complete your transaction, we will transfer you over
                to Adyen's secure servers.
              </p>
              <Drop />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}