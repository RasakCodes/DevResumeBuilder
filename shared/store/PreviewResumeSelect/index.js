import create from "zustand";

const useResumeStore = create((set) => ({
  selectedTemplateIndex: 0,
  resumeData: {},
  setSelectedTemplateIndex: (index) => set({ selectedTemplateIndex: index }),
  setResumeData: (data) => set({ resumeData: data }),
}));

export default useResumeStore;
