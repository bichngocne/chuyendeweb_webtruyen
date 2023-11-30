import React from "react";
import icons from "../../../ultis/icons";
import * as apis from "../../../apis";
import { useEffect, useState } from "react";
import { decodeWithSecret, encodeWithSecret } from "../../../ultis/function";
import { Link, useNavigate, useParams } from "react-router-dom";
const FormComment = () => {
  const { BsFillStarFill } = icons;
  const [star, setstar] = useState(0);
  const [hover, setHover] = useState(0);
  const [commentContent, setCommentContent] = useState("");
  // const [userId] = useState(1); // Giá trị mặc định cho id_user
  const userId = 1;
  const { storyId } = useParams();
  const secretKey = "iloveyoubaby";
  const decodedIdStory = decodeWithSecret(storyId, secretKey);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // lấy danh sách comments
        const listComments = await apis.getAllCommentOfStory(decodedIdStory);
        const listCommentsData = listComments.data.comments;
        setComments(listCommentsData);

        comments.map((comment) => {
          setComment(comment);
          console.log(comment);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [comment]);
  const handleSubmit = (event) => {
    console.log("handleSubmit is called");
    event.preventDefault();
    const commentData = {
      id_user: userId,
      id_story: decodedIdStory,
      content: commentContent,
      star: star,
    };
    // Kiểm tra content
    if (
      !commentContent ||
      commentContent.trim().length < 5 ||
      commentContent.trim().startsWith(" ")
    ) {
      setError(
        "Bình luận của bạn có trên 3 kí tự và không bắt đầu bằng khoảng trắng."
      );
      return;
    }
    // Kiểm tra star
    if (!star || star <= 0) {
      setError("Bạn nên chọn sao");
      return;
    }
    // Kiểm tra

    if (userId === comment.id_user) {
      setError("Bạn đã bình luận truyện này trước đó");
      return;
    }

    // Gọi hàm xử lý việc tạo comment trên server
    fetch("http://localhost:5000/api/createrComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        if (!response.ok) {
          // Nếu có lỗi từ server, reject Promise để nó sẽ được xử lý trong catch
          return Promise.reject(
            new Error(`Server error: ${response.status} ${response.statusText}`)
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("Comment created:", data);
        setstar('');
        setCommentContent("");
        
      })
      .catch((error) => {
        console.error("Error creating comment:", error);
        setError(error.message || "Có lỗi xảy ra");
      });
  };

  return (
    <div className="py-7">
      <form className="flex flex-col items-start" onSubmit={handleSubmit}>
        <textarea
          name="content"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          className="w-[80%] h-[150px] focus:outline-none border p-4"
          placeholder="Viết bình luận ..."
        />
        <div className="flex gap-2 my-4">
          <p className="font-medium text-[18px]">Đánh giá:</p>
          <div className="flex">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <button
                  type="button"
                  key={starValue}
                  className={`p-0 m-0 ${
                    starValue <= star ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => setstar(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(star)}
                >
                  <BsFillStarFill size={26} />
                </button>
              );
            })}
          </div>
        </div>
        <button
          type="submit"
          className="border px-6 py-3 rounded-[5px] bg-blue-800 text-[18px] font-medium"
        >
          Comment
        </button>
        <span style={{ color: "red" }}>{error}</span>
      </form>
    </div>
  );
};

export default FormComment;
