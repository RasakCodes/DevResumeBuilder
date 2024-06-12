const mongoose = require("mongoose");
const coverLetterSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
    email: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    summary: {
      type: String,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    isAiGenerate: {
      type: Boolean,
      default: false,
    },
    jobInfo: {
      companyName: {
        type: String,
      },
      companyAddress: {
        type: String,
      },
      companyCity: {
        type: String,
      },
      jobDescription: {
        type: String,
      },
    },

    extractedCvText: {
      parsedText: String,
      fileName: String,
    },
    result: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.models.coverLetter ||
  mongoose.model("coverLetter", coverLetterSchema);
