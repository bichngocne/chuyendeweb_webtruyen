import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../../apis";
import Modal from "react-modal";
import bcrypt from "bcryptjs";
import axios from "axios";
import HOST from "../../../apis/host";
// Modal.setAppElement("#root");
const InfoReader = () => {
  const [users, setUser] = useState([]);
  const { user_id } = useParams();
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const userData = await apis.getUserByIdReader(user_id);
      setUser(userData.data.users);
    };
    fetchData();
  }, [user_id]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleItemClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e, setter) => {
    setter(e.target.value);
    setErrorMessage(""); // Xóa thông báo lỗi khi người dùng thay đổi giá trị
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Kiểm tra xác nhận mật khẩu mới trước khi gửi yêu cầu đến server
      if (newPassword !== confirmNewPassword) {
        throw new Error("Mật khẩu mới và xác nhận mật khẩu mới không khớp.");
      }
      // Kiểm tra điền lại mật khẩu cũ
      if (!currentPassword) {
        throw new Error("Vui lòng điền mật khẩu cũ.");
      }
      // Kiểm tra mật khẩu cũ
      const iscurrentPasswordValid = await checkcurrentPassword(
        currentPassword,
        users.password
      );
      // console.log(users.password)
      if (!iscurrentPasswordValid) {
        throw new Error("Mật khẩu cũ không đúng.");
      }
      // Kiểm tra định dạng mật khẩu mới
      if (!isValidPassword(newPassword)) {
        throw new Error(
          "Mật khẩu mới không hợp lệ. Yêu cầu ít nhất 8 kí tự và chứa ít nhất một chữ cái và một số."
        );
      }
      // Xóa thông báo lỗi nếu mọi thứ đều hợp lệ
      setErrorMessage("");
      const response = await axios({
        url: `${HOST}/updatePass/${user_id}`,
        method: "put",
        data: {
          currentPassword: currentPassword,
          newPassword: newPassword,
        },
      });
      if (response.data.newPassword) {
        console.log("New password:", response.data.newPassword);
        const updatedUserData = await apis.getUserByIdReader(user_id);
        setUser(updatedUserData.data.users);
      }
      // Hiển thị thông báo thành công
      setSuccessMessage("Thay đổi mật khẩu thành công");
      // Xoá dữ liệu ở các input
      setcurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      // Hiển thị thông báo thành công từ server
    } catch (error) {
      console.error(error.message);
      setErrorMessage(error.message || "Có lỗi xảy ra khi thay đổi mật khẩu.");
    }
  };
  const checkcurrentPassword = async (enteredPassword, storedPasswordHash) => {
    try {
      if (!enteredPassword || !storedPasswordHash) {
        return false; // Trả về false nếu có ít nhất một tham số bị thiếu
      }
      const passwordMatch = await bcrypt.compare(
        enteredPassword,
        storedPasswordHash
      );
      console.log("Password Match:", passwordMatch);
      return passwordMatch;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const isValidPassword = (password) => {
    // Mật khẩu ít nhất 8 kí tự và chứa ít nhất một chữ cái và một số
    const passwordRegex = /^(?=.*[^\s])(?=.*[a-zA-Z0-9]).{8,}$/;
    return passwordRegex.test(password);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [successMessage]);
  return (
    <div>
      {/* thông tin user */}
      <div className="text-center bg-[#47A7BC] py-7">
        <div className="flex justify-center">
          {users.name && (
            <p className="rounded-[50%] w-[80px] h-[80px] bg-[#C0E9DD] flex items-center justify-center font text-[30px] text-white">
              {users.name.charAt(0)}
            </p>
          )}
        </div>
        <div className="mt-4">
          <p className="font-medium text-[20px] text-white">{users.name}</p>
          <p className="text-[14px] text-white">{users.email}</p>
        </div>
        <div className="flex justify-center gap-2 mt-3">
          <div className=" py-1 bg-[#9BF1D7] rounded-[7px] w-[150px]">
            Log Out
          </div>
          <div
            className=" py-1 bg-[#9BF1D7] rounded-[7px] w-[150px]"
            onClick={handleItemClick}
          >
            Change password
          </div>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Change Password Modal"
            className="fixed inset-[100px] bg-[#47bc8b] overflow-auto outline-none p-[40px]"
            overlayClassName=" bg-[#47A7BC] absolute;"
          >
            <div className="">
              {successMessage && (
                <span style={{ color: "green" }} className="text-center">
                  {successMessage}
                </span>
              )}
              <h2 className="font-bold text-[30px] text-center">
                CHANGE PASSWORD
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Input và thông báo lỗi cho mật khẩu cũ */}
                <div className="flex items-center mb-2">
                  <p className="font-medium text-[18px]">Old Password : </p>
                  <input
                    placeholder="Nhập mật khẩu cũ"
                    className="focus:outline-none px-3 border ml-2 py-2 rounded-[7px]"
                    value={currentPassword}
                    onChange={(e) => handleChange(e, setcurrentPassword)}
                  />
                  {errorMessage && (
                    <span style={{ color: "red", marginLeft: "5px" }}>
                      {errorMessage}
                    </span>
                  )}
                </div>
                {/* Input và thông báo lỗi cho mật khẩu mới */}
                <div className="flex items-center mb-2">
                  <p className="font-medium text-[18px]">New Password : </p>
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu mới"
                    className="focus:outline-none px-3 border ml-2 py-2 rounded-[7px]"
                    value={newPassword}
                    onChange={(e) => handleChange(e, setNewPassword)}
                  />
                  {newPassword && !isValidPassword(newPassword) && (
                    <span style={{ color: "red", marginLeft: "5px" }}>
                      Mật khẩu ít nhất 8 kí tự và chứa chữ và số.
                    </span>
                  )}
                </div>
                {/* Input cho xác nhận mật khẩu mới */}
                <div className="flex items-center mb-2">
                  <p className="font-medium text-[18px]">
                    Confirm New Password
                  </p>
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu mới"
                    className="focus:outline-none px-3 border ml-2 py-2 rounded-[7px]"
                    value={confirmNewPassword}
                    onChange={(e) => handleChange(e, setConfirmNewPassword)}
                  />
                  {newPassword !== confirmNewPassword && (
                    <span style={{ color: "red", marginLeft: "5px" }}>
                      Mật khẩu mới và mật khẩu nhập lại không giống nhau
                    </span>
                  )}
                </div>
                {/* Nút submit */}
                <button
                  type="submit"
                  className="border p-3 bg-[#47A7BC] rounded-[5px] my-3"
                >
                  Submit
                </button>
              </form>
              {/* Nút đóng modal */}
              <button
                className="border p-3 bg-[#47A7BC] rounded-[5px]"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
      {/* reading list */}
      <div className="text-center">Reading list</div>
    </div>
  );
};

export default InfoReader;
