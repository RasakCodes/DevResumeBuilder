"use client";
import { create } from "zustand";
import axios from "axios";

const getSingleUserCv = create((set) => ({
  data: null,
  fetchData: async (id) => {
    try {
      const response = await axios.get(`/api/User/Cv/getAllUserCv/${id}`);
      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }
      const data = response.data.message;
      set({ data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

export default getSingleUserCv;
