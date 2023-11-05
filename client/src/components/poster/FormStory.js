import React from "react";
import { ButtonSave, DropdownCategory, Upload } from "./index.js";
class FormStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      descriptionValue: "",
      categoryValue: [],
      imgValue: [],
      authorValue: "",
      totalChapValue: 0,
      classifiValue: 0,
    };

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
    this.setState({ nameValue: event.target.value });
  }
  //xử lí giá trị nọi dung truyện
  handleDescriptionChange(event) {
    this.setState({ descriptionValue: event.target.value });
  }
  //xử lí giá trị thể loại truyện
  handleCategoryChange(selectedCategories) {
    this.setState({ categoryValue: selectedCategories });
  }
  //xử lí giá trị hình ảnh truyện
  handleImgChange(event) {
    this.setState({ imgValue: event.target.value });
  }
  handleImageSelection = (imageNames) => {
    this.setState({ imgValue: imageNames });
  };
  //xử lí giá trị tác giả
  handleAuthorChange(event) {
    this.setState({ authorValue: event.target.value });
  }
  //xử lí giá trị tổng số chương
  handleTotalChaChange(event) {
    this.setState({ totalChapValue: event.target.value });
  }
  //xử lí giá trị phân loại truyện
  handleClassifiChange(event) {
    this.setState({ classifiValue: event.target.value });
  }
  handleSubmit(event) {
    console.log(this.state.imgValue);
    alert(
      this.state.nameValue +
        this.state.descriptionValue +
        this.state.categoryValue +
        this.state.imgValue +
        this.state.authorValue +
        this.state.totalChapValue +
        this.state.classifiValue
    );
    event.preventDefault();
  }
  // Phương thức xử lý sự kiện cho radio buttons
  handleClassifiChange(event) {
    const selectedValue = parseInt(event.target.value);
    this.setState({ classifiValue: selectedValue });
  }
  render() {
    return (
      // ... (phần còn lại của mã)
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
              <input
                type="text"
                value={this.state.nameValue} // Sử dụng giá trị cho tên truyện
                onChange={this.handleNameChange} // Sử dụng phương thức để cập nhật giá trị
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                id="namestory"
                placeholder="Nhập tên truyện ..."
                required
              />
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
              <textarea
                value={this.state.descriptionValue} // Sử dụng giá trị cho nội dung truyện
                onChange={this.handleDescriptionChange} // Sử dụng phương thức để cập nhật giá trị
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nhập giới thiệu nội dung truyện ..."
              ></textarea>
            </div>
          </div>
          <div className="block">
            <div className="flex gap-[40px]">
              <label className="block w-[105px] mb-2 text-sm font-medium text-gray-900 gap-[40px]">
                Thể loại
              </label>
              <DropdownCategory
                value={this.state.categoryValue}
                onChange={this.handleCategoryChange.bind(this)}
              />
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
              <Upload
                text="imgmain"
                value={this.state.imgValue}
                onChange={this.handleImageSelection.bind(this)}
              />
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
              <input
                type="text"
                value={this.state.authorValue} // Sử dụng giá trị cho Tác giả
                onChange={this.handleAuthorChange} // Sử dụng phương thức để cập nhật giá trị
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                id="nameAuthor"
                placeholder="Nhập Tác giả ..."
                required
              />
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
              <input
                type="number"
                value={this.state.totalChapValue} // Sử dụng giá trị cho Tổng số chương
                onChange={this.handleTotalChaChange} // Sử dụng phương thức để cập nhật giá trị
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                id="totalChap"
                placeholder="Nhập tổng số chương ..."
                min="0"
                required
              />
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
                      checked={this.state.classifiValue === 0} // Kiểm tra xem giá trị classifiValue có bằng 1 hay không
                      onChange={this.handleClassifiChange}
                      id="wordsoty"
                      type="radio"
                      value="0"
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
                      checked={this.state.classifiValue === 1} // Kiểm tra xem giá trị classifiValue có bằng 1 hay không
                      onChange={this.handleClassifiChange}
                      id="picturestory"
                      type="radio"
                      value="1"
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
                  <ButtonSave onClick={this.handleSubmit} />
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
