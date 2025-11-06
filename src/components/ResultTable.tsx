import React, { useMemo } from "react";

// ResultTable.tsx
// Hiển thị danh sách người dùng + chức năng xóa
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: { street: string; suite: string; city: string };
  phone: string;
  website: string;
}

interface Props {
  users: User[];
  keyword: string;
  onDelete: (id: number) => void;
}

const ResultTable: React.FC<Props> = ({ users = [], keyword, onDelete }) => {
  // Lọc người dùng theo keyword (tên hoặc username)
  const filteredUsers = useMemo(() => {
    const kwLower = keyword.toLowerCase();
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(kwLower) ||
        u.username.toLowerCase().includes(kwLower)
    );
  }, [users, keyword]);

  return (
    <div className="table-wrap">
      {filteredUsers.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Username</th>
              <th>Email</th>
              <th>Thành phố</th>
              <th>Điện thoại</th>
              <th>Website</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.address.city}</td>
                <td>{u.phone}</td>
                <td>{u.website}</td>
                <td>
                 
                  <button
                    className="action-btn edit"
                    style={{
                      backgroundColor: "#16a34a",
                      color: "white",
                      border: "none",
                      marginRight: "6px",
                    }}
                  >
                     Sửa
                  </button>

                  <button
                    className="action-btn delete"
                    style={{
                      backgroundColor: "#dc2626",
                      color: "white",
                      border: "none",
                    }}
                    onClick={() => onDelete(u.id)}
                  >
                     Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty">Không có người dùng nào phù hợp.</div>
      )}
    </div>
  );
};

export default ResultTable;
