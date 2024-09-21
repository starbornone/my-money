"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

const TaxPresetSelector = ({ onApplyPreset }) => {
  const [presets, setPresets] = useState([]);
  const [selectedPreset, setSelectedPreset] = useState("");

  useEffect(() => {
    const fetchPresets = async () => {
      const { data, error } = await supabase
        .from("tax_bracket_presets")
        .select("*");

      if (error) {
        console.error("Error fetching presets:", error);
      } else {
        setPresets(data);
      }
    };

    fetchPresets();
  }, []);

  const handleApplyPreset = async () => {
    if (!selectedPreset) return;

    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();
    if (sessionError || !session) {
      console.error("User is not authenticated:", sessionError);
      return;
    }

    const userId = session.user.id;

    const { data: presetData, error } = await supabase
      .from("tax_bracket_presets")
      .select("*")
      .eq("name", selectedPreset);

    if (error) {
      console.error("Error fetching preset tax brackets:", error);
      return;
    }

    if (presetData.length > 0) {
      const brackets = presetData[0].tax_brackets;

      const newBrackets = brackets.map((bracket) => ({
        user_id: userId,
        year: "2024-25",
        lower_bound: bracket.lower_bound,
        upper_bound: bracket.upper_bound,
        base_tax: bracket.base_tax,
        marginal_rate: bracket.marginal_rate,
        medicare_levy: bracket.medicare_levy || 0,
        exempt: bracket.exempt || false,
      }));

      const { error: insertError } = await supabase
        .from("tax_brackets")
        .insert(newBrackets);

      if (insertError) {
        console.error("Error applying preset:", insertError);
      } else {
        onApplyPreset(newBrackets);
      }
    }
  };

  return (
    <div className="mb-4">
      <select
        value={selectedPreset}
        onChange={(e) => setSelectedPreset(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-4"
      >
        <option value="">Select a Tax Preset</option>
        {presets.map((preset) => (
          <option key={preset.id} value={preset.name}>
            {preset.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleApplyPreset}
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-4"
      >
        Apply Preset
      </button>
    </div>
  );
};

export default TaxPresetSelector;
