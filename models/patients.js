import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const patientSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    index: true,
  },

  lastName: {
    type: String,
    required: true,
    index: true,
  },

  age: {
    type: Number,
  },

  address: {
    type: String,
  },

  phone: {
    type: String,
  },

  dni: {
    type: String,
    required: true,
    unique: true,
  },

  birthday: {
    type: String,
  },

  insurance: {
    type: String,
  },

  personalAntecedents: {
    familiarAntecedents: String,
    personalAntecedents: String,
    quirurgicAntecedents: String,
    drugs: String,
    habits: String,
    alergies: String,
  },

  ginecoAntecedents: {
    menarca: String,
    ritmoMenstrual: String,
    fum: String,
    mac: String,
    irs: String,
    gestas: String,
    ultimoParto: String,
    ultimoPap: String,
    estudiosComplementarios: String,
  },

  physicalExam: {
    weight: String,
    size: String,
    imc: String,
    tv: String,
    especuloscopia: String,
    colposcopia: String,
    examenMamario: String,
    observaciones: String,
  },

  treatment: String,
  //Motivos de la consulta
  reasonsConsult: String,
});

//Export the model
const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
