import mongoose, { Schema, Document, Model } from "mongoose";

// Interface for the document
export interface AIOutputModel extends Document {
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: Date;
}

// Define schema for AIOutput
const AIOutputSchema: Schema<AIOutputModel> = new Schema({
  formData: { type: String },
  aiResponse: { type: String },
  templateSlug: { type: String, required: true },
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Check if model already exists to avoid re-registering in development
const AIOutput: Model<AIOutputModel> = mongoose.model<AIOutputModel>(
  "AIOutput",
  AIOutputSchema
);

export default AIOutput;
