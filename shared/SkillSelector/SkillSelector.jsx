import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import WINDOW from "../lib/mockWindow";

const SkillSelector = ({ skills, savedData, loading }) => {
  const [skillChange, setSkillChange] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    let updatedSkills = [];

    if (skills === undefined) {
      savedData?.skills.forEach((savedSkill) => {
        updatedSkills.push({
          label: savedSkill.label,
          selected: true,
        });
      });
    } else if (!loading && savedData?.skills && skills) {
      updatedSkills = skills.map((skill) => ({
        label: skill,
        selected: !!savedData.skills.find(
          (savedSkill) => savedSkill.label === skill
        ),
      }));

      savedData.skills.forEach((savedSkill) => {
        if (!skills.includes(savedSkill.label)) {
          updatedSkills.push({
            label: savedSkill.label,
            selected: true,
          });
        }
      });
    }

    setSkillChange(updatedSkills);
  }, [savedData, loading, skills]);

  useEffect(() => {
    const selected = skillChange.filter((skill) => skill.selected);
    WINDOW.localStorage.setItem("skills", JSON.stringify(selected));
  }, [skillChange]);

  const toggleSkill = (skillLabel) => {
    setSkillChange((current) =>
      current.map((skill) =>
        skill.label === skillLabel
          ? { ...skill, selected: !skill.selected }
          : skill
      )
    );
  };

  const addSkill = () => {
    if (newSkill && !skillChange.some((skill) => skill.label === newSkill)) {
      setSkillChange((current) => [
        ...current,
        { label: newSkill, selected: true },
      ]);
      setNewSkill("");
    }
  };

  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-bold leading-7 text-accent mb-3">Skills</h2>
      <div className="flex items-center gap-x-2">
        <span>Job Title</span>
        <span className="border px-3 py-2 bg-slate-400 w-auto flex-auto rounded-full">
          {savedData?.jobTitle}
        </span>
      </div>
      <div className="flex items-center gap-x-2 mb-3">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add new skill"
          className="border px-3 py-2 rounded-full w-full"
        />
        <button
          onClick={addSkill}
          className="bg-[#F9E547] text-black px-3 py-2 rounded-full"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-2 h-[200px] overflow-y-auto">
        {skillChange.map((skill, index) => (
          <span
            key={index}
            onClick={() => toggleSkill(skill.label)}
            className={`flex h-8 px-5 items-center justify-center space-x-2.5 rounded-full cursor-pointer ${
              skill.selected
                ? "bg-[#F9E547] text-black border-0"
                : "bg-white border border-black"
            }`}
          >
            {skill.label}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mt-5 border p-4 shadow mb-4 h-[200px] overflow-y-auto">
        {skillChange
          .filter((skill) => skill.selected)
          .map((skill, index) => (
            <div
              onClick={() => toggleSkill(skill.label)}
              key={index}
              className="flex items-center justify-between h-8 px-5 space-x-2.5 rounded-full bg-[#F9E547] relative cursor-pointer"
            >
              <span className="text-black">{skill.label}</span>
              {skill.selected && <X size={16} className="text-red-400 ml-2" />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkillSelector;
