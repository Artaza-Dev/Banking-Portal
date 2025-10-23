import React, { useState } from "react";
import usersStore from "../../store/usersStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCoins } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";

function TransactionPopup({ onclick }) {
  const { currentUser, addAmount, withDrawAmount } = usersStore();
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({}); // { amount: "..." }
  const [success, setSuccess] = useState(""); // optional success message

  // Schema transforms empty string -> undefined so required() triggers properly
  const baseSchema = Yup.number()
    .typeError("Amount must be a number")
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? undefined : value
    )
    .positive("Amount must be a positive value")
    .max(10000, "Amount cannot exceed 10,000");

  const addAmountSchema = Yup.object({
    amount: baseSchema.required("Please enter amount to add!"),
  });

  const withdrawAmountSchema = Yup.object({
    amount: baseSchema.required("Please enter amount to withdraw!"),
  });

  async function addHandler() {
    try {
      setErrors({});
      setSuccess("");
      await addAmountSchema.validate({ amount }, { abortEarly: false });

      // validated -> call store with numeric amount
      addAmount(Number(amount), currentUser.email);

      setSuccess("Amount added successfully.");
      setAmount("");
      // optionally clear success after few seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      // map yup errors to friendly object
      const validationErrors = {};
      if (err.inner && err.inner.length) {
        err.inner.forEach((e) => (validationErrors[e.path] = e.message));
      } else if (err.path) {
        validationErrors[err.path] = err.message;
      } else {
        validationErrors.amount = "Something went wrong";
      }
      setErrors(validationErrors);
    }
  }

  async function withdrawHandler() {
    try {
      setErrors({});
      setSuccess("");
      await withdrawAmountSchema.validate({ amount }, { abortEarly: false });

      const numeric = Number(amount);

      // extra check: sufficient balance
      if (numeric > Number(currentUser?.balance || 0)) {
        setErrors({ amount: "Insufficient balance for this withdrawal." });
        return;
      }

      withDrawAmount(numeric, currentUser.email);

      setSuccess("Withdrawal successful.");
      setAmount("");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      const validationErrors = {};
      if (err.inner && err.inner.length) {
        err.inner.forEach((e) => (validationErrors[e.path] = e.message));
      } else if (err.path) {
        validationErrors[err.path] = err.message;
      } else {
        validationErrors.amount = "Something went wrong";
      }
      setErrors(validationErrors);
    }
  }

  return (
    <div className="absolute inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
      <div className="w-[85%] sm:w-[420px] bg-white rounded-2xl p-6 shadow-2xl text-center relative">
        <button
          onClick={onclick}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FontAwesomeIcon icon={faTimes} className="text-lg text-gray-600 hover:text-gray-800" />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-1 flex items-center gap-2 justify-center">
          <FontAwesomeIcon icon={faCoins} className="text-yellow-500" />
          Manage Funds
        </h2>
        <p className="text-sm text-gray-500 mb-4 italic">Smart moves today build your financial tomorrow.</p>

        <p className="text-lg font-semibold text-zinc-700 mb-3">
          Current Balance:{" "}
          <span className="text-lime-700 font-bold">${currentUser?.balance ?? 0}</span>
        </p>

        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Enter amount (max 10,000)"
          value={amount}
          onChange={(e) => {
            // allow only digits and decimal point (optional)
            const val = e.target.value;
            // optional: restrict characters
            if (/^[0-9]*\.?[0-9]*$/.test(val) || val === "") setAmount(val);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600 mb-2"
        />
        {errors.amount && <p className="text-sm text-red-500 mb-2">{errors.amount}</p>}
        {success && <p className="text-sm text-green-600 mb-2">{success}</p>}

        <div className="flex justify-between gap-4">
          <button
            onClick={addHandler}
            className="w-1/2 py-2 bg-lime-800 text-white rounded-lg hover:bg-lime-700 transition font-medium"
          >
            Add
          </button>
          <button
            onClick={withdrawHandler}
            className="w-1/2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionPopup;
