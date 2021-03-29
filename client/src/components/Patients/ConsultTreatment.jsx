import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  consultTreatmentContainer: {
    marginTop: "20px",
  },

  accordion: {
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingBottom: "20px",
  },
}));

const ConsultTreatment = ({ expanded, handleChangeAccordion, register }) => {
  const classes = useStyles();

  return (
    <div className={classes.consultTreatmentContainer}>
      <Accordion
        className={classes.accordion}
        square
        expanded={expanded === "panel4"}
        onChange={handleChangeAccordion("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant="h5">Consulta y tratamiento</Typography>
        </AccordionSummary>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              name="reasonsConsult"
              label="Motivos de la consulta / Enfermedad actual"
              multiline
              rows={3}
              variant="outlined"
              fullWidth
              inputRef={register}
              InputLabelProps={{ shrink: true }} 
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="treatment"
              label="Tratamiento / Seguimiento"
              multiline
              rows={8}
              variant="outlined"
              fullWidth
              inputRef={register}
              InputLabelProps={{ shrink: true }} 
            />
          </Grid>
        </Grid>
      </Accordion>
    </div>
  );
};

export default ConsultTreatment;
