// Định nghĩa kiểu dữ liệu cho người dùng

export interface Address {
  street: string;
  suite: string;
  city: string;
}

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone?: string;
  website?: string;
}
