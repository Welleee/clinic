import express from 'express';
import { fetchPatients, fetchPatient, createPatient, updatePatient, deletePatient } from '../controllers/PatientsController.js'


const router = express.Router();

router.get('/', fetchPatients)
router.get('/:id', fetchPatient);
router.post('/', createPatient)
router.patch('/:id', updatePatient)
router.delete('/:id', deletePatient)


export default router;