import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  physicalExamContainer: {
    marginTop: "20px",
  },

  accordion: {
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingBottom: "20px",
  },
}));
const PhysicalExam = ({ register, handleChangeAccordion, expanded }) => {
  const classes = useStyles();

  return (
    <div className={classes.physicalExamContainer}>
      {/* <Grid container spacing={2}> */}
      {/* <Grid item xs={12} lg={12}> */}
        <Accordion
          className={classes.accordion}
          square
          expanded={expanded === "panel3"}
          onChange={handleChangeAccordion("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography variant="h5">Examen físico</Typography>
          </AccordionSummary>
          {/* <AccordionDetails> */}
          <Grid container spacing={1}>
            <Grid item lg={3} sm={12} md={3}>
              <TextField
                name="physicalExam.weight"
                label="Peso"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>

            <Grid item lg={3} sm={12} md={3}>
              <TextField
                name="physicalExam.size"
                label="Talla"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>

            <Grid item lg={3} sm={12} md={3}>
              <TextField
                name="physicalExam.imc"
                label="IMC"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>
            <Grid item lg={3} sm={12} md={3}>
              <TextField
                name="physicalExam.tv"
                label="TV"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>

            <Grid item lg={4} sm={12} md={4}>
              <TextField
                name="physicalExam.especuloscopia"
                label="Especuloscopía"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>
            

            <Grid item lg={4} sm={12} md={4}>
              <TextField
                name="physicalExam.colposcopia"
                label="Colposcopía"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>


            <Grid item lg={4} sm={12} md={4}>
              <TextField
                name="physicalExam.examenMamario"
                label="Examen Mamario"
                variant="outlined"
                fullWidth
                inputRef={register}
                InputLabelProps={{ shrink: true }}  
              />
            </Grid>

            <Grid item lg={12} sm={12} md={12}>
              <TextField
                name="physicalExam.observaciones"
                label="Observaciones"
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

export default PhysicalExam;
