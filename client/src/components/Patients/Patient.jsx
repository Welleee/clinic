import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import PersonalAntecedents from "./PersonalAntecedents";
import GinecoAntecedents from "./GinecoAntecedents";
import PersonalDetails from "./PersonalDetails";
import PhysicalExam from "./PhysicalExam";
import ConsultTreatment from "./ConsultTreatment";
import SnackBar from "../Helpers/SnackBar";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: "20px",
    marginBottom: "40px",
  },

  paper: {
    flexGrow: 1,
  },

  form: {
    padding: "20px",
  },

  buttons: {
    marginTop: "10px",
  },
}));

const Patient = () => {
  const classes = useStyles();
  let history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    errors,
    control,
    setValue,
  } = useForm();
  const [expanded, setExpanded] = React.useState("panel1");
  const { id } = useParams();
  const [patient, setPatient] = useState({});
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
    history.push("/");
  };

  const handleChangeAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const onSubmit = async (data) => {
    if (id) {
      await axios.patch(`/patients/${id}`, data).then(() => {
        reset();
        // history.push("/");
        setOpenSnackBar(true);
      });
    } else {
      await axios.post("/patients", data).then(() => {
        reset();
        // history.push("/");
        setOpenSnackBar(true);
      });
    }
  };

  const fetchPatient = async () => {
    await axios.get(`/patients/${id}`).then((response) => {
      // console.log(response.data);
      setPatient(response.data);
    });
  };

  useEffect(() => {
    if (id) {
      fetchPatient();
    }
  }, []);

  useEffect(() => {
    if (patient) {
      reset({
        firstName: patient.firstName,
        lastName: patient.lastName,
        address: patient.address,
        phone: patient.phone,
        dni: patient.dni,
        birthday: patient.birthday,
        age: patient.age,
        insurance: patient.insurance,
        personalAntecedents: {
          familiarAntecedents:
            patient?.personalAntecedents?.familiarAntecedents,
          personalAntecedents:
            patient?.personalAntecedents?.personalAntecedents,
          quirurgicAntecedents:
            patient?.personalAntecedents?.quirurgicAntecedents,
          drugs: patient?.personalAntecedents?.drugs,
          habits: patient?.personalAntecedents?.habits,
          alergies: patient?.personalAntecedents?.alergies,
        },
        ginecoAntecedents: {
          menarca: patient?.ginecoAntecedents?.menarca,
          ritmoMenstrual: patient?.ginecoAntecedents?.ritmoMenstrual,
          fum: patient?.ginecoAntecedents?.fum,
          mac: patient?.ginecoAntecedents?.mac,
          irs: patient?.ginecoAntecedents?.irs,
          gestas: patient?.ginecoAntecedents?.gestas,
          ultimoParto: patient?.ginecoAntecedents?.ultimoParto,
          ultimoPap: patient?.ginecoAntecedents?.ultimoPap,
          estudiosComplementarios:
            patient?.ginecoAntecedents?.estudiosComplementarios,
        },
        physicalExam: {
          weight: patient?.physicalExam?.weight,
          size: patient?.physicalExam?.size,
          imc: patient?.physicalExam?.imc,
          tv: patient?.physicalExam?.tv,
          especuloscopia: patient?.physicalExam?.especuloscopia,
          colposcopia: patient?.physicalExam?.colposcopia,
          examenMamario: patient?.physicalExam?.examenMamario,
          observaciones: patient?.physicalExam?.observaciones,
        },
        reasonsConsult: patient.reasonsConsult,
        treatment: patient.treatment,
      });
    }
  }, [patient]);

  return (
    <div className={classes.formContainer}>
      <Paper className={classes.paper}>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Grid container spacing={2} justify="flex-end">
            <Grid item xs={12}>
              <PersonalDetails
                register={register}
                Controller={Controller}
                control={control}
                setValue={setValue}
                errors={errors}
              />
            </Grid>

            <Grid item xs={12}>
              <PersonalAntecedents
                register={register}
                expanded={expanded}
                handleChangeAccordion={handleChangeAccordion}
              />
            </Grid>

            <Grid item xs={12}>
              <GinecoAntecedents
                register={register}
                expanded={expanded}
                handleChangeAccordion={handleChangeAccordion}
              />
            </Grid>

            <Grid item xs={12}>
              <PhysicalExam
                register={register}
                expanded={expanded}
                handleChangeAccordion={handleChangeAccordion}
              />
            </Grid>

            <Grid item xs={12}>
              <ConsultTreatment
                register={register}
                expanded={expanded}
                handleChangeAccordion={handleChangeAccordion}
              />
            </Grid>

            <Grid item className={classes.buttons}>
              <Button variant="contained" onClick={reset}>
                Limpiar
              </Button>
            </Grid>

            <Grid item className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  history.push("/");
                }}
              >
                Cancelar
              </Button>
            </Grid>

            <Grid item className={classes.buttons}>
              <Button color="primary" variant="contained" type="sumbit">
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <SnackBar
        openSnackBar={openSnackBar}
        handleCloseSnackBar={handleCloseSnackBar}
        message={
          id
            ? "Paciente actualizado correctamente!"
            : "Paciente agregado correctamente!"
        }
      />
    </div>
  );
};

export default Patient;
