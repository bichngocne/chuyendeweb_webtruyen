import React, { useEffect, useState } from "react";
import icons from "./../../../ultis/icons";
import ButtonSave from "../ButtonSave";
import Upload from "../Upload";
import Validator from "./../../../ultis/validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { BsTypeBold, BsTypeItalic, BsTypeUnderline } = icons;
class FormChapper extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.chapper) {
      this.state = {
        nameValue: this.props.chapper.title || "",
        descriptionValue: this.props.chapper.content || "",
        imgValue: {},
        errors: {},
      };
    } else {
      this.state = {
        nameValue: "",
        descriptionValue: "",
        imgValue: {},
        errors: {},
      };
    }
    
    const isImgValue = () => {
      const imgs = this.state.imgValue;
      return Object.keys(imgs).length === 0;
    };
    const numberOfImgValue = () => {
      const imgs = this.state.imgValue;
      return Object.keys(imgs).length <= 50;
    };
    const isNameValueValid = (value, field, state) => {
      // Kiểm tra không có 3 khoảng trắng ở đầu chuỗi
      if (/^\s{3}|^\s*\n/.test(value)) {
        return false;
      }
      return true;
    };
    
    const rules = [
      {
        field: "nameValue",
        method: "isEmpty",
        validWhen: false,
        message: "The title chapper is required.",
      },
      {
        field: "nameValue",
        method: "isLength",
        args: [{ min: 5, max: 255 }],
        validWhen: true,
        message:
          "The title chapper must be at least 5 characters and maximum 255 characters.",
      },
      {
        field: "nameValue",
        method: isNameValueValid,
        validWhen: true,
        message:
          "The title chapper cannot start with 3 spaces and don't down line.",
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
        args: [{ min: 5 }],
        validWhen: true,
        message: "The description must be at least 5 characters.",
      },
      {
        field: "descriptionValue",
        method: isNameValueValid,
        validWhen: true,
        message: "The description cannot start with 3 spaces.",
      },
      {
        field: "imgValue",
        method: isImgValue,
        validWhen: false,
        message: "Choose a photo.",
      },
      {
        field: "imgValue",
        method: numberOfImgValue,
        validWhen: true,
        message: "Choose at least 1 photo and maximum 50 photos.",
      },
    ];
    this.validator = new Validator(rules);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImageSelection = this.handleImageSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.chapper !== this.props.chapper) {
      // Handle changes in this.props.chapper
      if (this.props.chapper) {
        this.setState({
          nameValue: this.props.chapper.title || "",
          descriptionValue: this.props.chapper.content || "",
        });
      }
    }
  }
  handleNameChange(event) {
    this.setState({ nameValue: event.target.value }, () => {
      this.setState({
        errors: this.validator.validate(this.state),
      });
    });
  }
  //xử lí giá trị nọi dung chương
  handleDescriptionChange(event) {
    this.setState({ descriptionValue: event.target.value }, () => {
      this.setState({
        errors: this.validator.validate(this.state),
      });
    });
  }
  //xử lí giá trị hình ảnh chương
  handleImageSelection = (imageNames) => {
    console.log(imageNames);
    this.setState({ imgValue: imageNames }, () => {
      this.setState({
        errors: this.validator.validate(this.state),
      });
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      errors: this.validator.validate(this.state),
    });
    if (Object.keys(this.state.errors).length === 1) {
      var data = {};
      if (Object.keys(this.state.imgValue).length === 0) {
        data = {
          name: this.state.nameValue,
          description: this.state.descriptionValue,
        };
      } else {
        data = {
          name: this.state.nameValue,
          img: this.state.imgValue.map((file) => file),
        };
      }
      if(this.props.chapper){
        this.props.onSubmitChapper(data);
      }else{
        this.props.onSubmit(data);
      }
    } else {
      toast.warn("Vui lòng nhập dữ liệu đúng theo format!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
                Tiêu đề chương
              </label>
              <div className="block w-full">
                <input
                  type="text"
                  value={this.state.nameValue}
                  onChange={this.handleNameChange}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ${
                    errors?.nameValue ? "border-red-500 text-red-900" : ""
                  }`}
                  id="namestory"
                  placeholder="Nhập tiêu đề chương ..."
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
          {this.props.text === 0 ? (
            <div className="block">
              <div className="flex flex-col gap-5">
                <label
                  className="block w-[120px] mb-2 text-sm font-medium text-gray-900 gap-[40px]"
                  htmlFor="description"
                >
                  Nội dung
                </label>
                <div className="relative w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                  <div className="flex items-center justify-between px-3 py-2 border-b">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x">
                      <div className="flex flex-wrap items-center space-x-1">
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                        >
                          <BsTypeBold />
                          <span className="sr-only">Bold</span>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                        >
                          <BsTypeUnderline />
                          <span className="sr-only">Underline</span>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                        >
                          <BsTypeItalic />
                          <span className="sr-only">Italic</span>
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-tooltip-target="tooltip-fullscreen"
                      className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 19 19"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
                        />
                      </svg>
                      <span className="sr-only">Full screen</span>
                    </button>
                    <div
                      id="tooltip-fullscreen"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
                    >
                      Show full screen
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white rounded-b-lg">
                    <textarea
                      id="description"
                      rows="8"
                      value={ this.state.descriptionValue}
                      onChange={this.handleDescriptionChange}
                      className={`block w-full px-0 text-sm text-gray-800 bg-white border-0 outline-none ${
                        errors?.descriptionValue
                          ? "border-red-500 text-red-900"
                          : ""
                      }`}
                      placeholder="Write an article..."
                      required
                    ></textarea>
                  </div>
                  {errors.descriptionValue && (
                    <div
                      className="validation absolute text-red-600"
                      style={{ display: "block" }}
                    >
                      {errors.descriptionValue}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="block">
              <div className="flex gap-[40px]">
                <label
                  className="block w-[120px] mb-2 text-sm font-medium text-gray-900 gap-[40px]"
                  htmlFor="imgs"
                >
                  Upload hình ảnh
                </label>
                <div className="block w-full">
                  <Upload
                    name="img"
                    text="imgs"
                    onChange={this.handleImageSelection}
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
          )}

          <div className="w-full flex justify-end">
            <ButtonSave text="Lưu" onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

export default FormChapper;
