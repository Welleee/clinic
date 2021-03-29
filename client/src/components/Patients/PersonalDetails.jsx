import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DatePicker from "../Helpers/DatePicker";

const useStyles = makeStyles((theme) => ({
  patientContainer: {
    marginTop: "20px",
  },

  paper: {
    flexGrow: 1,
    // marginTop: "40px",
    // padding: "10px 20px",
  },
  form: {
    padding: "20px",
  },

  buttons: {
    marginTop: "10px",
  },
}));

const PersonalDetails = ({ register, Controller, control, setValue, errors }) => {
  const classes = useStyles();

  const calculateAge = (birthdayDate) => {
    const today = new Date();
    const birthDate = new Date(birthdayDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setValue("age", age);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom style={{ marginBottom: "20px" }}>
        Datos personales del paciente
      </Typography>
      <Grid container spacing={1} className={classes.root} justify="flex-end">
        <Grid item xs={12} lg={3} md={3}>
          <TextField
            variant="outlined"
            required
            label="Nombre"
            inputRef={register({required: true})}
            name="firstName"
            fullWidth
            autoFocus
            InputLabelProps={{ shrink: true }}
            error={errors.firstName ? true : false}
          />
        </Grid>
        <Grid item xs={12} lg={3} md={3}>
          <TextField
            variant="outlined"
            required
            label="Apellido"
            inputRef={register({required: true})}
            name="lastName"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} lg={3} md={3}>
          <TextField
            variant="outlined"
            label="Direccion"
            inputRef={register}
            name="address"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} lg={3} md={3}>
          <TextField
            variant="outlined"
            label="Teléfono"
            inputRef={register}
            name="phone"
            type="number"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} lg={3} md={3}>
          <TextField
            variant="outlined"
            required
            label="DNI"
            inputRef={register({required: true})}
            name="dni"
            type="number"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} lg={3} md={3}>
          {/* <TextField
            variant="outlined"
            label="Fecha Nacimiento"
            inputRef={register}
            name="birthday"
            fullWidth
            // InputLabelProps={{ shrink: true }}  
          /> */}
          <DatePicker
            register={register}
            control={control}
            Controller={Controller}
            calculateAge={calculateAge}
          />
        </Grid>

        <Grid item xs={12} lg={3} md={3}>
          <TextField
            variant="outlined"
            label="Edad"
            inputRef={register}
            name="age"
            type="number"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} lg={3} md={3}>
          <TextField
            variant="outlined"
            label="Obra Social"
            inputRef={register}
            name="insurance"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalDetails;
