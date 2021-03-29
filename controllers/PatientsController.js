import Patient from "../models/patients.js";
import mongoose from "mongoose";

export const fetchPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const fetchPatient = async (req, res) => {
  const { id: _id } = req.params;
  
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No patient with that id");

    const patient = await Patient.findById(_id);
    res.status(200).json(patient);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPatient = async (req, res) => {
  const patient = req.body;
  const newPatient = new Patient(patient);
  try {
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

export const updatePatient = async (req, res) => {
  const { id: _id } = req.params;
  const patient = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No patients with that id");

  const updatedPatient = await Patient.findByIdAndUpdate(_id, patient, {
    new: true,
  });

  res.json(updatedPatient);
};

export const deletePatient = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No patients with that id");

  await Patient.findByIdAndRemove(_id, (err, result) => {
    if (!err) {
      res.json(result);
    } else {
      console.log(err);
    }
  });
};
