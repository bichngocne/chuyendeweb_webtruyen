import React from "react";
import { DropdownCategory, Upload } from "./index.js";
class FormStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "", // Giá trị cho tên truyện
      descriptionValue: "", // Giá trị cho nội dung truyện
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ nameValue: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ descriptionValue: event.target.value });
  }

  handleSubmit(event) {
    alert("Tên truyện: " + this.state.nameValue + "\nNội dung: " + this.state.descriptionValue);
    event.preventDefault();
  }

  render() {
    return (
      // ... (phần còn lại của mã)
      <div className="w-full">
        <form onSubmit={this.handleSubmit} className="grid gap-5">
          <div className="block">
            <div className="flex gap-[40px] items-center">
              <label
                className="block w-[100px] mb-2 text-sm font-medium text-gray-900 dark:text-white gap-[40px]"
                htmlFor="namestory"
              >
                Tên truyện
              </label>
              <input
                type="text"
                value={this.state.nameValue} // Sử dụng giá trị cho tên truyện
                onChange={this.handleNameChange} // Sử dụng phương thức để cập nhật giá trị
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="namestory"
                placeholder="Nhập tên truyện ..."
                required
              />
            </div>
          </div>
          <div className="block">
            <div className="flex gap-[40px]">
              <label
                className="block w-[100px] mb-2 text-sm font-medium text-gray-900 dark:text-white gap-[40px]"
                htmlFor="description"
              >
                Nội dung
              </label>
              <textarea
                value={this.state.descriptionValue} // Sử dụng giá trị cho nội dung truyện
                onChange={this.handleDescriptionChange} // Sử dụng phương thức để cập nhật giá trị
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nhập giới thiệu nội dung truyện ..."
              ></textarea>
            </div>
          </div>
            <div className="block">
            <div className="flex gap-[40px]">
              <label
                className="block w-[89px] mb-2 text-sm font-medium text-gray-900 dark:text-white gap-[40px]"
              >
                Thể loại
              </label>
              <DropdownCategory />
            </div>
          </div>
          <div className="block">
            <div className="flex gap-[40px]">
              <label
                className="block w-[100px] mb-2 text-sm font-medium text-gray-900 dark:text-white gap-[40px]"
                htmlFor="imgmain"
              >
                Ảnh đại diện
              </label>
              <Upload text="imgmain"/>
            </div>
          </div>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    );
  }
}

export default FormStory;