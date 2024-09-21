"use client";

import { Button, Input } from "@/components";
import { useTaxBrackets } from "@/hooks/useTaxBrackets";
import { calculateTax } from "@/utils/taxUtils";

const IncomeRow = ({ entry, onEdit }) => {
  const { amount, is_before_tax } = entry;
  const { taxBrackets, isLoading } = useTaxBrackets(entry.user_id);

  if (isLoading) {
    return (
      <tr>
        <td colSpan="6" className="py-2 px-4">
          Loading tax brackets...
        </td>
      </tr>
    );
  }

  return (
    <>
      <tr className="border-b">
        <td className="py-2 px-4">
          <Input
            type="text"
            value={entry.description}
            onChange={(e) => onEdit(entry.id, { description: e.target.value })}
          />
        </td>
        <td className="py-2 px-4">
          <Input
            type="number"
            value={entry.amount}
            onChange={(e) =>
              onEdit(entry.id, { amount: Number(e.target.value) })
            }
          />
        </td>
        <td className="py-2 px-4">{entry.frequency}</td>
        <td className="py-2 px-4">{is_before_tax ? "Yes" : "No"}</td>
        <td className="py-2 px-4">
          {new Date(entry.date).toLocaleDateString()}
        </td>
        <td className="py-2 px-4">
          <Button
            onClick={() =>
              onEdit(entry.id, { is_before_tax: !entry.is_before_tax })
            }
          >
            Toggle Before Tax
          </Button>
        </td>
      </tr>
      {is_before_tax && (
        <tr className="bg-gray-100">
          <td></td>
          <td className="py-2 px-4">
            Taxable Amount: {calculateTax(amount, taxBrackets).toFixed(2)} AUD
            <br />
            Amount After Tax:{" "}
            {(entry.amount - calculateTax(amount, taxBrackets)).toFixed(2)} AUD
          </td>
        </tr>
      )}
    </>
  );
};

export default IncomeRow;
