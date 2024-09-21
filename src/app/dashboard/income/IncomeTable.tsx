"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import IncomeRow from "./IncomeRow";

const IncomeTable = ({ userId }) => {
  const [incomeEntries, setIncomeEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchIncomeEntries = async () => {
      const { data, error } = await supabase
        .from("income")
        .select("*")
        .eq("user_id", userId);

      if (error) {
        console.error("Error fetching income entries:", error);
      } else {
        setIncomeEntries(data);
      }
      setLoading(false);
    };

    fetchIncomeEntries();
  }, [userId]);

  const handleEdit = async (entryId, updatedEntry) => {
    const { error } = await supabase
      .from("income")
      .update(updatedEntry)
      .eq("id", entryId);

    if (error) {
      console.error("Error updating income entry:", error);
    } else {
      setIncomeEntries((prev) =>
        prev.map((entry) =>
          entry.id === entryId ? { ...entry, ...updatedEntry } : entry
        )
      );
    }
  };

  const filteredEntries = incomeEntries.filter((entry) =>
    entry.description.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <>
      <input
        type="text"
        placeholder="Filter by description"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      {filteredEntries.length === 0 ? (
        <p className="text-gray-600">
          No income entries found. Start adding some!
        </p>
      ) : (
        <table className="min-w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Frequency</th>
              <th className="py-2 px-4 border-b">Before Tax</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map((entry) => (
              <IncomeRow key={entry.id} entry={entry} onEdit={handleEdit} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default IncomeTable;
