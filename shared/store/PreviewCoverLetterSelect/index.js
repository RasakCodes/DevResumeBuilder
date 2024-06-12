import create from "zustand";

const useCoverLetterStore = create((set) => ({
  selectedTemplateIndex: 0,
  coverLetterData: {},
  setSelectedTemplateIndex: (index) => set({ selectedTemplateIndex: index }),
  setcoverLetterData: (data) => set({ coverLetterData: data }),
}));

export default useCoverLetterStore;
