"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

const TaxBracketForm = ({ profile, onRefresh }) => {
  const [formData, setFormData] = useState({
    year: "",
    lower_bound: 0,
    upper_bound: null,
    base_tax: 0,
    marginal_rate: 0,
    medicare_levy: 0.02,
    exempt: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("tax_brackets").insert([
      {
        user_id: profile.id,
        year: formData.year,
        lower_bound: formData.lower_bound,
        upper_bound: formData.upper_bound,
        base_tax: formData.base_tax,
        marginal_rate: formData.marginal_rate,
        medicare_levy: formData.medicare_levy,
        exempt: formData.exempt,
      },
    ]);

    if (error) {
      console.error("Error adding tax bracket:", error);
    } else {
      onRefresh();
      setFormData({
        year: "",
        lower_bound: 0,
        upper_bound: null,
        base_tax: 0,
        marginal_rate: 0,
        medicare_levy: 0.02,
        exempt: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-4">
      <input
        type="text"
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Tax Year"
        required
        className="border border-gray-300 rounded p-2 w-full"
      />
      <input
        type="number"
        name="lower_bound"
        value={formData.lower_bound}
        onChange={handleChange}
        placeholder="Lower Bound"
        required
        className="border border-gray-300 rounded p-2 w-full"
      />
      <input
        type="number"
        name="upper_bound"
        value={formData.upper_bound || ""}
        onChange={handleChange}
        placeholder="Upper Bound (leave empty for no limit)"
        className="border border-gray-300 rounded p-2 w-full"
      />
      <input
        type="number"
        name="base_tax"
        value={formData.base_tax}
        onChange={handleChange}
        placeholder="Base Tax"
        required
        className="border border-gray-300 rounded p-2 w-full"
      />
      <input
        type="number"
        name="marginal_rate"
        value={formData.marginal_rate}
        onChange={handleChange}
        placeholder="Marginal Rate"
        required
        className="border border-gray-300 rounded p-2 w-full"
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          name="exempt"
          checked={formData.exempt}
          onChange={handleChange}
          className="mr-2"
        />
        <label>Exempt from Tax</label>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add Tax Bracket
      </button>
    </form>
  );
};

export default TaxBracketForm;
