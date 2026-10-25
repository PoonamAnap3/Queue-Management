import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName("");
    setService("");
  };

  return (
    <>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to queue</h2>
        <div className="form-group">
          <input
            placeholder="Customer name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="Consultation">Consultation</option>
            <option value="Payment">Payment</option>
            <option value="Support">Support</option>
          </select>
          <button type="submit">
            {" "}
            <FaUserPlus />
            Add Customer
          </button>
        </div>
      </form>
    </>
  );
}
