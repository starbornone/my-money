"use client";

import { useUserProfile } from "@/hooks/useUserProfile";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

const ExpensePage = () => {
  const { profile, isLoading } = useUserProfile();
  const [expenseEntries, setExpenseEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenseEntries = async () => {
      if (!profile) return;

      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .eq("user_id", profile.id);

      if (error) {
        console.error("Error fetching expense entries:", error);
      } else {
        setExpenseEntries(data);
      }
      setLoading(false);
    };

    fetchExpenseEntries();
  }, [profile]);

  if (isLoading || loading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <div>
      {expenseEntries.length === 0 ? (
        <p className="text-gray-600">
          No expense entries found. Start adding some!
        </p>
      ) : (
        <table className="min-w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Frequency</th>
              <th className="py-2 px-4 border-b">Recurring</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenseEntries.map((entry) => (
              <tr key={entry.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{entry.description}</td>
                <td className="py-2 px-4">{entry.amount}</td>
                <td className="py-2 px-4">
                  {entry.is_recurring ? entry.frequency : "N/A"}
                </td>
                <td className="py-2 px-4">
                  {entry.is_recurring ? "Yes" : "No"}
                </td>
                <td className="py-2 px-4">
                  {new Date(entry.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpensePage;
