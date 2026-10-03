import { Project } from '../models/project.model.js';

export async function createProject(req, res, next) {
  try {
    const project = await Project.create({ ...req.project, owner: req.user._id, companyName: req.user.companyName });
    return res.status(201).json({ ok: true, project });
  } catch (error) { return next(error); }
}

export async function listProjects(req, res, next) {
  try {
    const filter = req.user.role === 'admin' ? {} : { owner: req.user._id };
    const projects = await Project.find(filter).populate('owner', 'fullName email companyName').sort({ createdAt: -1 });
    return res.json({ ok: true, projects });
  } catch (error) { return next(error); }
}

export async function updateProjectStatus(req, res, next) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found.' });
    project.status = req.projectUpdate.status;
    project.adminNote = req.projectUpdate.adminNote;
    project.reviewedAt = new Date();
    if (project.status === 'completed') project.completedAt = new Date();
    await project.save();
    return res.json({ ok: true, project });
  } catch (error) { return next(error); }
}
