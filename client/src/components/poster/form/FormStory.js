import React, { useEffect } from "react";
import { ButtonSave, DropdownCategory, Upload } from "../index.js";
import Validator from "./../../../ultis/validator";
import {
  encryptData,
  isNumber,
} from "../../../ultis/function.js";

class FormStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      descriptionValue: "",
      categoryValue: [],
      imgValue: {},
      authorValue: "",
      totalChapValue: 0,
      classifiValue: 0,
      errors: {},
    };
    const isCategoryValueValid = () => {
      const categoryArray = this.state.categoryValue;
      return categoryArray.length >= 1 && categoryArray.length <= 3;
    };
    const isImgValue = () => {
      const imgs = this.state.imgValue;
      return Object.keys(imgs).length === 1;
    };
    const isNameValueValid = (value, field, state) => {
      // Kiểm tra không có 3 khoảng trắng ở đầu chuỗi
      if (/^\s{3}/.test(value)) {
        return false;
      }
      return true;
    };
    const rules = [
      {
        field: "nameValue",
        method: "isEmpty",
        validWhen: false,
        message: "The name field is required.",
      },
      {
        field: "nameValue",
        method: "isLength",
        args: [{ min: 3, max: 50 }],
        validWhen: true,
        message:
          "The name must be at least 3 characters and maximum 50 characters.",
      },
      {
        field: "nameValue",
        method: isNameValueValid,
        validWhen: true,
        message: "The name cannot start with 3 spaces.",
      },

      {
        field: "descriptionValue",
        method: "isEmpty",
        validWhen: false,
        message: "The description field is required.",
      },
      {
        field: "descriptionValue",
        method: "isLength",
        args: [{ min: 3 }],
        validWhen: true,
        message: "The description must be at least 3 characters.",
      },
      {
        field: "descriptionValue",
        method: isNameValueValid,
        validWhen: true,
        message: "The description cannot start with 3 spaces.",
      },

      {
        field: "categoryValue",
        method: isCategoryValueValid,
        validWhen: true,
        message: "Choose at least 1 category and at most 3 categories.",
      },
      {
        field: "imgValue",
        method: isImgValue,
        validWhen: true,
        message: "Choose a photo.",
      },
      {
        field: "authorValue",
        method: "isEmpty",
        validWhen: false,
        message: "The author's name is require.",
      },
      {
        field: "authorValue",
        method: isNameValueValid,
        validWhen: true,
        message: "The author's name cannot start with 3 spaces.",
      },
      {
        field: "totalChapValue",
        method: isNumber,
        validWhen: true,
        message:
          "The total chapter must be a number and greater than or equal to -1.",
      },
    ];
    this.validator = new Validator(rules);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTotalChaChange = this.handleTotalChaChange.bind(this);
    this.handleClassifiChange = this.handleClassifiChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //xử lí giá trị tên truyện
  handleNameChange(event) {
    this.setState({ nameValue: event.target.value }, () => {
      this.setState({
        errors: this.validator.validate(this.state),
      });
    });
  }
  //xử lí giá trị nọi dung truyện
  handleDescriptionChange(event) {
    this.setState({ descriptionValue: event.target.value }, () => {
      this.setState({
        errors: this.validator.validate(this.state),
      });
    });
  }
  //xử lí giá trị thể loại truyện
  handleCategoryChange(event) {
    this.setState({ categoryValue: event }, () => {
      this.setState({
        errors: this.validator.validate(this.state),
      });
    });
  }
  //xử lí giá trị hình ảnh truyện
  handleImgChange(event) {
    this.setState({ imgValue: event.target.value }, () => {
      this.setState({
        errors: this.validator.validate(this.state),
      });
    });
  }
  handleImageSelection = (imageNames) => {
    this.setState({ imgValue: imageNames }, () => {
      this.setState({
        errors: this.validator.validate(this.state),
      });
    });
  };
  //xử lí giá trị tác giả
  handleAuthorChange(event) {
    this.setState({ authorValue: event.target.value }, () => {
      this.setState({
        errors: this.validator.validate(this.state),
      });
    });
  }
  //xử lí giá trị tổng số chương
  handleTotalChaChange(event) {
    this.setState({ totalChapValue: event.target.value }, () => {
      this.setState({
        errors: this.validator.validate(this.state),
      });
    });
  }
  //xử lí giá trị phân loại truyện
  handleClassifiChange(event) {
    this.setState({ classifiValue: event.target.value }, () => {
      this.setState({
        errors: this.validator.validate(this.state),
      });
    });
  }
  //submit
  handleSubmit(event) {
    this.setState({
      errors: this.validator.validate(this.state),
    });
    if (Object.keys(this.state.errors).length === 0) {
      const encryptedCategory = this.state.categoryValue.map((category) => {
        return encryptData(category, process.env.REACT_APP_SECRET_KEY_CATEGORY || 'this is secret');
      });
      const dataToSubmit = {
        name: this.state.nameValue,
        description: this.state.descriptionValue,
        category: encryptedCategory,
        img: this.state.imgValue,
        author: this.state.authorValue,
        totalChap: Number(this.state.totalChapValue),
        classifi: this.state.classifiValue,
      };
      console.log(dataToSubmit);
      alert("Dữ liệu đã được gửi đi.");
    } else {
      // Xử lý khi có lỗi
      alert("Có lỗi xảy ra. Vui lòng kiểm tra lại các trường.");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="w-full">
        <form onSubmit={this.handleSubmit} className="grid gap-5">
          <div className="block">
            <div className="flex gap-[40px] items-center">
              <label
                className="block w-[120px] mb-2 text-sm font-medium text-gray-900 gap-[40px]"
                htmlFor="namestory"
              >
                Tên truyện
              </label>
              <div className="block w-full">
                <input
                  type="text"
                  value={this.state.nameValue} // Sử dụng giá trị cho tên truyện
                  onChange={this.handleNameChange} // Sử dụng phương thức để cập nhật giá trị
                  className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ${
                    errors?.nameValue ? "border-red-500 text-red-900" : ""
                  }`}
                  id="namestory"
                  placeholder="Nhập tên truyện ..."
                  required
                />
                {errors.nameValue && (
                  <div
                    className="validation text-red-600"
                    style={{ display: "block" }}
                  >
                    {errors.nameValue}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex gap-[40px]">
              <label
                className="block w-[120px] mb-2 text-sm font-medium text-gray-900 gap-[40px]"
                htmlFor="description"
              >
                Nội dung
              </label>
              <div className="block w-full">
                <textarea
                  value={this.state.descriptionValue} // Sử dụng giá trị cho nội dung truyện
                  onChange={this.handleDescriptionChange} // Sử dụng phương thức để cập nhật giá trị
                  id="description"
                  rows="4"
                  className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${
                    errors?.nameValue ? "border-red-500 text-red-900" : ""
                  }`}
                  placeholder="Nhập giới thiệu nội dung truyện ..."
                  required
                ></textarea>
                {errors.descriptionValue && (
                  <div
                    className="validation text-red-600"
                    style={{ display: "block" }}
                  >
                    {errors.descriptionValue}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex gap-[40px]">
              <label className="block w-[120px] mb-2 text-sm font-medium text-gray-900 gap-[40px]">
                Thể loại
              </label>
              <div className="block w-full">
                <DropdownCategory
                  value={this.state.categoryValue}
                  onChange={this.handleCategoryChange.bind(this)}
                />
                {errors.categoryValue && (
                  <div
                    className="validation text-red-600"
                    style={{ display: "block" }}
                  >
                    {errors.categoryValue}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex gap-[40px]">
              <label
                className="block w-[120px] mb-2 text-sm font-medium text-gray-900 gap-[40px]"
                htmlFor="imgmain"
              >
                Ảnh đại diện
              </label>
              <div className="block w-full">
                <Upload
                  text="imgmain"
                  value={this.state.imgValue}
                  onChange={this.handleImageSelection.bind(this)}
                />
                {errors.imgValue && (
                  <div
                    className="validation text-red-600"
                    style={{ display: "block" }}
                  >
                    {errors.imgValue}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex gap-[40px] items-center">
              <label
                className="block w-[120px] mb-2 text-sm font-medium text-gray-900 gap-[40px]"
                htmlFor="nameAuthor"
              >
                Tác giả
              </label>
              <div className="block w-full">
                <input
                  type="text"
                  value={this.state.authorValue} // Sử dụng giá trị cho Tác giả
                  onChange={this.handleAuthorChange} // Sử dụng phương thức để cập nhật giá trị
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ${
                    errors?.authorValue ? "border-red-500 text-red-900" : ""
                  }`}
                  id="nameAuthor"
                  placeholder="Nhập Tác giả ..."
                  required
                />
                {errors.authorValue && (
                  <div
                    className="validation text-red-600"
                    style={{ display: "block" }}
                  >
                    {errors.authorValue}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex gap-[40px] items-center">
              <label
                className="block w-[120px] mb-2 text-sm font-medium text-gray-900 gap-[40px]"
                htmlFor="totalChap"
              >
                Tổng số chương
              </label>
              <div className="block w-full">
                <input
                  type="number"
                  value={this.state.totalChapValue} // Sử dụng giá trị cho Tổng số chương
                  onChange={this.handleTotalChaChange} // Sử dụng phương thức để cập nhật giá trị
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ${
                    errors?.totalChapValue ? "border-red-500 text-red-900" : ""
                  }`}
                  id="totalChap"
                  placeholder="Nhập tổng số chương ..."
                  min="0"
                  required
                />
                {errors.totalChapValue && (
                  <div
                    className="validation text-red-600"
                    style={{ display: "block" }}
                  >
                    {errors.totalChapValue}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex gap-[40px]">
              <label className="block w-[105px] mb-2 text-sm font-medium text-gray-900 gap-[40px]">
                Phân loại truyện
              </label>
              <div className="flex flex-auto justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <input
                      checked
                      onChange={this.handleClassifiChange}
                      id="wordsoty"
                      type="radio"
                      value={encryptData(
                        0,
                        process.env.REACT_APP_SECRET_KEY_ID_STORY ||
                          "this is secret"
                      )}
                      name="classifiName"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor="wordsoty"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Truyện chữ
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      onChange={this.handleClassifiChange}
                      id="picturestory"
                      type="radio"
                      value={encryptData(
                        1,
                        process.env.REACT_APP_SECRET_KEY_ID_STORY ||
                          "this is secret"
                      )}
                      name="classifiName"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor="picturestory"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Truyện tranh
                    </label>
                  </div>
                </div>
                <div className="h-[35px]">
                  <ButtonSave text="Lưu" onClick={this.handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FormStory;
