// src/routes/employeeRoutes.ts

import { Router } from 'express';
import {
  addEmployee,
  getEmployees,
  getEmployeeById,
  editEmployee,
  deleteEmployee,
} from '../controllers/empController'; // Adjust the path as necessary

const router = Router();

// Define the routes for employee management
router.post('/employees', addEmployee);               // Add a new employee
router.get('/employees', getEmployees);                // Get all employees
router.get('/employees/:id', getEmployeeById);        // Get an employee by ID
router.put('/employees/:id', editEmployee);           // Edit an employee by ID
router.delete('/employees/:id', deleteEmployee);      // Delete an employee by ID

export default router;
