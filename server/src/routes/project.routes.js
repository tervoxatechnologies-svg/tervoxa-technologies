import express from 'express';
import { createProject, listProjects, updateProjectStatus } from '../controllers/project.controller.js';
import { requireAdmin, requireAuth } from '../middleware/auth.middleware.js';
import { projectStatuses, sanitizeProject, validateProject } from '../validators/project.validator.js';

const router = express.Router();
router.use(requireAuth);
router.get('/', listProjects);
router.post('/', (req, res, next) => {
  const project = sanitizeProject(req.body);
  const error = validateProject(project);
  if (error) return res.status(400).json({ message: error });
  req.project = project;
  return next();
}, createProject);
router.patch('/:id/status', requireAdmin, (req, res, next) => {
  const status = typeof req.body?.status === 'string' ? req.body.status : '';
  const adminNote = typeof req.body?.adminNote === 'string' ? req.body.adminNote.trim().slice(0, 2000) : '';
  if (!projectStatuses.has(status)) return res.status(400).json({ message: 'Please select a valid project status.' });
  req.projectUpdate = { status, adminNote };
  return next();
}, updateProjectStatus);

export default router;
