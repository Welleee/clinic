import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  personalAntecedentsContainer: {
    marginTop: "20px",
  },

  accordion: {
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingBottom: "20px"
  }
   
}));

const PersonalAntecedents = ({ expanded, handleChangeAccordion, register }) => {
  const classes = useStyles();

  return (
    <div className={classes.personalAntecedentsContainer}>
      {/* <Grid container spacing={2}> */}
      {/* <Grid item xs={12} lg={12}> */}
        <Accordion
          className={classes.accordion}
          square
          expanded={expanded === "panel1"}
          onChange={handleChangeAccordion("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="h5">
              Antecedentes personales y familiares
            </Typography>
          </AccordionSummary>
          {/* <AccordionDetails> */}
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                name="personalAntecedents.familiarAntecedents"
                label="Antecedentes patológicos familiares"
                multiline
                rows={2}
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="personalAntecedents.personalAntecedents"
                label="Antecedentes patológicos personales"
                multiline
                rows={2}
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="personalAntecedents.quirurgicAntecedents"
                label="Antecedentes quirúrgicos"
                multiline
                rows={2}
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="personalAntecedents.drugs"
                label="Fármacos"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="personalAntecedents.habits"
                label="Hábitos"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="personalAntecedents.alergies"
                label="Alergias"
                variant="outlined"
                fullWidth
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

export default PersonalAntecedents;
