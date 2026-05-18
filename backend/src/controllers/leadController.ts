import { Response } from "express";
import Lead from "../models/Lead";
import { AuthRequest } from "../middlewares/auth";

export const createLead = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { name, email, status, source } = req.body;

    const lead = await Lead.create({
      name,
      email,
      status,
      source,
      userId: req.user?.id,
    });

    res.status(201).json(lead);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getLeads = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { status, source, search, sort, page = "1", limit = "10" } = req.query;

    const query: any = { userId: req.user?.id };

    if (status) query.status = status;
    if (source) query.source = source;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const sortOptions: any = {};
    if (sort === "Oldest") sortOptions.createdAt = 1;
    else sortOptions.createdAt = -1; // Default to Latest

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    const leads = await Lead.find(query).sort(sortOptions).skip(skip).limit(limitNum);
    const total = await Lead.countDocuments(query);

    res.json({
      leads,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getLeadById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const lead = await Lead.findOne({ _id: req.params.id, userId: req.user?.id });
    if (!lead) {
      res.status(404).json({ message: "Lead not found" });
      return;
    }
    res.json(lead);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateLead = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const lead = await Lead.findOneAndUpdate(
      { _id: req.params.id, userId: req.user?.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!lead) {
      res.status(404).json({ message: "Lead not found" });
      return;
    }
    res.json(lead);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteLead = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const lead = await Lead.findOneAndDelete({ _id: req.params.id, userId: req.user?.id });
    if (!lead) {
      res.status(404).json({ message: "Lead not found" });
      return;
    }
    res.json({ message: "Lead removed" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
