import React, { useState } from "react";

// Component thêm người dùng mới
interface Address {
  street: string;
  suite: string;
  city: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
}

interface Props {
  onAdd: (user: User) => void;
}

const AddUser: React.FC<Props> = ({ onAdd }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<Omit<User, "id">>({
    name: "",
    username: "",
    email: "",
    address: { street: "", suite: "", city: "" },
    phone: "",
    website: "",
  });

  // Cập nhật giá trị form
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field?: keyof Address
  ) => {
    const { name, value } = e.target;
    if (field) {
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Submit thêm người dùng
  const handleSubmit = () => {
    if (!formData.name || !formData.username) {
      alert(" Vui lòng nhập Name và Username!");
      return;
    }

    const newUser: User = {
      id: Date.now(),
      ...formData,
    };

    onAdd(newUser);
    setFormData({
      name: "",
      username: "",
      email: "",
      address: { street: "", suite: "", city: "" },
      phone: "",
      website: "",
    });
    setShowForm(false);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      {!showForm && (
        <button
          className="btn btn-primary"
          style={{
            background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
            color: "white",
            fontWeight: "600",
          }}
          onClick={() => setShowForm(true)}
        >
          + Thêm người dùng
        </button>
      )}

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h4>Thêm người dùng mới</h4>

            <input
              type="text"
              name="name"
              placeholder="Tên"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Đường"
              value={formData.address.street}
              onChange={(e) => handleChange(e, "street")}
            />
            <input
              type="text"
              placeholder="Suite"
              value={formData.address.suite}
              onChange={(e) => handleChange(e, "suite")}
            />
            <input
              type="text"
              placeholder="Thành phố"
              value={formData.address.city}
              onChange={(e) => handleChange(e, "city")}
            />
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
            />

            <div className="modal-actions">
              <button className="btn btn-success" onClick={handleSubmit}>
                 Lưu
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setShowForm(false)}
              >
                ✖ Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUser;
