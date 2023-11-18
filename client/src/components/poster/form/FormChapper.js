import React, { useEffect, useState } from "react";
import icons from "./../../../ultis/icons";
import ButtonSave from "../ButtonSave";
import Upload from "../Upload";

const { BsTypeBold, BsTypeItalic, BsTypeUnderline } = icons;
class FormChapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      descriptionValue: "",
      imgValue: [],
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({ nameValue: event.target.value });
  }
  //xử lí giá trị nọi dung chương
  handleDescriptionChange(event) {
    this.setState({ descriptionValue: event.target.value });
  }
  //xử lí giá trị hình ảnh chương
  handleImgChange(event) {
    this.setState({ imgValue: event.target.value });
  }
  handleImageSelection = (imageNames) => {
    this.setState({ imgValue: imageNames });
  };

  handleSubmit(event) {
    console.log(this.state.imgValue);
    alert(this.state.nameValue + this.state.descriptionValue);
    event.preventDefault();
  }
  // Phương thức xử lý sự kiện cho radio buttons
  handleClassifiChange(event) {
    const selectedValue = parseInt(event.target.value);
    this.setState({ classifiValue: selectedValue });
  }
  render() {
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
              <input
                type="text"
                value={this.state.nameValue} // Sử dụng giá trị cho tên truyện
                onChange={this.handleNameChange} // Sử dụng phương thức để cập nhật giá trị
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                id="namestory"
                placeholder="Nhập tiêu đề chương ..."
                required
              />
            </div>
          </div>
          { this.props.text === 0 ? (<div className="block">
            <div className="flex flex-col gap-5">
              <label
                className="block w-[120px] mb-2 text-sm font-medium text-gray-900 gap-[40px]"
                htmlFor="description"
              >
                Nội dung
              </label>
              <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
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
                    value={this.state.descriptionValue}
                    onChange={this.handleDescriptionChange}
                    className="block w-full px-0 text-sm text-gray-800 bg-white border-0 outline-none"
                    placeholder="Write an article..."
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>) : (<div className="block">
            <div className="flex gap-[40px]">
              <label
                className="block w-[120px] mb-2 text-sm font-medium text-gray-900 gap-[40px]"
                htmlFor="imgs"
              >
                Upload hình ảnh
              </label>
              <Upload
                text="imgs"
                value={this.state.imgValue}
                onChange={this.handleImageSelection.bind(this)}
              />
            </div>
          </div>)}
          
          <div className="w-full flex justify-end">
            <ButtonSave text="Lưu" />
          </div>
        </form>
      </div>
    );
  }
}

export default FormChapper;
