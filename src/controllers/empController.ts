// src/controllers/EmployeeController.ts

import { Request, Response } from 'express';
import Employee from '../models/Employee'; // Import the model

// Add a new employee
export const addEmployee = async (req: Request, res: Response) => {
  try {
    const newEmployee = await Employee.create(req.body); // No need for EmployeeType
    res.status(201).json(newEmployee);
  } catch (error: unknown) { // Specify the type of error
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

// Get all employees
export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

// Get an employee by ID
export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

// Edit an employee by ID
export const editEmployee = async (req: Request, res: Response) => {
  try {
    const [updated] = await Employee.update(req.body, {
      where: { id: req.params.id },
    });
    const updatedEmployee = await Employee.findByPk(req.params.id);
    if (updatedEmployee ) { 
      
      res.json(updatedEmployee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

// Delete an employee by ID
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const deleted = await Employee.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
