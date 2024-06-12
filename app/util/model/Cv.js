const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
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
    templateId: {
      type: String,
      default: "Dev Resume 1",
    },
    skills: [
      {
        label: { type: String, required: true },
        selected: { type: Boolean, default: false },
      },
    ],

    education: [
      {
        institutionName: {
          type: String,
          required: true,
        },
        degreeName: {
          type: String,
          required: true,
        },
        fieldOfStudy: {
          type: String,
          required: true,
        },
        graduationYear: {
          type: String,
          required: true,
        },
        currentlyStudying: {
          type: Boolean,
        },
      },
    ],
    experience: [
      {
        companyName: {
          type: String,
          required: true,
        },
        startDate: {
          type: String,
          required: true,
        },
        endDate: {
          type: String,
        },
        currentlyWorking: {
          type: Boolean,
          default: false,
        },
        jobTitle: {
          type: String,
          required: true,
        },
        responsibilities: {
          type: String,
          required: true,
        },
        achievements: {
          type: String,
        },
      },
    ],
    optimizeResume: [
      {
        extractedCvText: {
          parsedText: String,
          fileName: String,
        },
        jobDesc: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Resume || mongoose.model("Resume", resumeSchema);
