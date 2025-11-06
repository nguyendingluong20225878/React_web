import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import AddUser from "./components/AddUser";
import ResultTable from "./components/ResultTable";
import "./assets/styles.css";

// ================================
// App.tsx
// Component gốc quản lý toàn bộ state và logic chính
// ================================
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  phone: string;
  website: string;
}

const App: React.FC = () => {
  // State quản lý danh sách người dùng
  const [users, setUsers] = useState<User[]>([]);

  // State lưu keyword tìm kiếm
  const [kw, setKw] = useState<string>("");

  // State lưu người dùng mới thêm
  const [newUser, setNewUser] = useState<User | null>(null);

  // Khi newUser thay đổi, cập nhật vào danh sách
  useEffect(() => {
    if (newUser) {
      setUsers((prev) => [...prev, newUser]);
      setNewUser(null);
    }
  }, [newUser]);

  // Hàm thêm user mới (truyền xuống AddUser)
  const handleAddUser = (user: User) => {
    setNewUser(user);
  };

  // Hàm xóa user (truyền xuống ResultTable)
  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  // Dữ liệu khởi tạo (10 người)
  useEffect(() => {
    const initialUsers: User[] = [
      { id: 1, name: "Nguyễn Văn A", username: "vana", email: "vana@gmail.com", address: { street: "Nguyễn Trãi", suite: "P1", city: "Hà Nội" }, phone: "0123456789", website: "vana.com" },
      { id: 2, name: "Trần Thị B", username: "tranb", email: "tranb@gmail.com", address: { street: "Lê Lợi", suite: "P2", city: "Đà Nẵng" }, phone: "0987654321", website: "tranb.com" },
      { id: 3, name: "Lê Văn C", username: "levanc", email: "c@gmail.com", address: { street: "Ngô Quyền", suite: "P3", city: "Hải Phòng" }, phone: "0909090909", website: "levanc.net" },
      { id: 4, name: "Phạm D", username: "phamd", email: "d@gmail.com", address: { street: "Trần Phú", suite: "P4", city: "HCM" }, phone: "0938123123", website: "phamd.vn" },
      { id: 5, name: "Hoàng Văn E", username: "hoange", email: "e@gmail.com", address: { street: "Hoàng Hoa Thám", suite: "P5", city: "Nha Trang" }, phone: "0945123123", website: "hoange.org" },
      { id: 6, name: "Vũ Ngọc F", username: "vuf", email: "f@gmail.com", address: { street: "Bạch Mai", suite: "P6", city: "Hà Nội" }, phone: "0955123123", website: "vuf.com" },
      { id: 7, name: "Ngô Quyền G", username: "ngog", email: "g@gmail.com", address: { street: "Nguyễn Huệ", suite: "P7", city: "HCM" }, phone: "0966123123", website: "ngog.info" },
      { id: 8, name: "Phan Hoàng H", username: "phanh", email: "h@gmail.com", address: { street: "Trần Hưng Đạo", suite: "P8", city: "Huế" }, phone: "0977123123", website: "phanh.vn" },
      { id: 9, name: "Đỗ Nguyện I", username: "doi", email: "i@gmail.com", address: { street: "Phạm Văn Đồng", suite: "P9", city: "Đà Lạt" }, phone: "0988123123", website: "doi.net" },
      { id: 10, name: "Bùi Chua K", username: "buik", email: "k@gmail.com", address: { street: "Láng", suite: "P10", city: "Hà Nội" }, phone: "0999123123", website: "buik.com" },
    ];
    setUsers(initialUsers);
  }, []);

  return (
    <div className="container">
      {/* Bước 1: Tiêu đề */}
      <h1>Quản lý người dùng</h1>

      {/* Bước 2: Form tìm kiếm */}
      <SearchForm keyword={kw} onChangeValue={setKw} />

      {/* Bước 3: Form thêm người dùng */}
      <AddUser onAdd={handleAddUser} />

      {/* Bước 4: Bảng kết quả */}
      <ResultTable users={users} keyword={kw} onDelete={handleDelete} />
    </div>
  );
};

export default App;
