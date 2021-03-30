import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  ginecoAntecedentsContainer: {
    marginTop: "20px",
  },

  accordion: {
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingBottom: "20px"
  }
   
}));

const GinecoAntecedents = ({ expanded, handleChangeAccordion, register }) => {
  const classes = useStyles();

  return (
    <div className={classes.ginecoAntecedentsContainer}>
      {/* <Grid container spacing={2}> */}
      {/* <Grid item xs={12} lg={12}> */}
        <Accordion
          className={classes.accordion}
          square
          expanded={expanded === "panel2"}
          onChange={handleChangeAccordion("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography variant="h5">
              Antecedentes ginecoobstetricos
            </Typography>
          </AccordionSummary>
          {/* <AccordionDetails> */}
          <Grid container spacing={1}>
            <Grid item lg={3} md={4} xs={12}>
              <TextField
                name="ginecoAntecedents.menarca"
                label="Menarca"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }} 
              />
            </Grid>

            <Grid item lg={3} md={4} xs={12}>
              <TextField
                name="ginecoAntecedents.ritmoMenstrual"
                label="Ritmo menstrual"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }} 
              />
            </Grid>

            <Grid item lg={3} md={4} xs={12}>
              <TextField
                name="ginecoAntecedents.fum"
                label="FUM"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }} 
              />
            </Grid>

            <Grid item lg={3} md={4} xs={12}>
              <TextField
                name="ginecoAntecedents.mac"
                label="MAC"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }} 
              />
            </Grid>

            <Grid item lg={3} md={4} xs={12}>
              <TextField
                name="ginecoAntecedents.irs"
                label="IRS"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }} 
              />
            </Grid>

            <Grid item lg={3} md={4} xs={12}>
              <TextField
                name="ginecoAntecedents.gestas"
                label="Gestas"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }} 
              />
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                name="ginecoAntecedents.ultimoParto"
                label="Ultimo parto"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }} 
              />
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <TextField
                name="ginecoAntecedents.ultimoPap"
                label="Ultimo PAP"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }} 
              />
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
              <TextField
                name="ginecoAntecedents.estudiosComplementarios"
                label="Otros estudios complementarios"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                inputRef={register}
                InputLabelProps={{ shrink: true }} 
              />
            </Grid>
          </Grid>

          {/* </AccordionDetails> */}
        </Accordion>
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
};

export default GinecoAntecedents;
