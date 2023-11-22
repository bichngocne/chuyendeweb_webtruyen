import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../../../apis";
const PendingAdmin = ({ detailStory, categoryStory }) => {
  const [showMore, setShowMore] = useState(false);
  const [UserStory, setUserStory] = useState(null);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const { data } = useSelector((state) => state.storyAdmin);
  useEffect(() => {
    const fetchUserStory = async () => {
      try {
        const userId = detailStory?.storyById.id_user;
        if (userId) {
          const responseUser = await apis.apiGetUserOfStoryByIdAdmin(userId);

          if (responseUser.status === 200 && responseUser.data.foundUser) {
            setUserStory(responseUser.data.foundUser.name);
          } else {
            console.error("Invalid or missing data in API response:", responseUser);
            // Handle the case where the data is not as expected
          }
        }
      } catch (error) {
        console.error("Error fetching user story:", error);
        // Handle the error condition
      }

    }
    fetchUserStory();});
  const limitedText =String(detailStory?.storyById?.description);
  return (
    <div
      className={`mx-[35px] my-[15px] bg-[#d9d9d9] rounded-xl ${
        limitedText.length <= 1800 ? "h-[604px]" : "h-auto"
      }`}
    >
      <div className="p-[40px]">
        <div className="flex">
          <img className="w-[150px] h-[185px] mr-[40px]" />
          <div className=" w-full flex justify-between">
            <div className="[font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px]">
              <div className="pb-2.5">Tên truyện:{detailStory?.storyById.name}</div>
              <div className="py-2.5">Thể loại:{categoryStory?.foundStory.map((element) => {
            return element.Category.name;
          })}</div>
              <div className="py-2.5">Tác giả:{detailStory?.storyById.author}</div>
              <div className="py-2.5">Người đăng:{UserStory}</div>
              <div className="pt-2.5">Số chương:{detailStory?.storyById.total_chapper}</div>
            </div>
            <div className=" pr-[90px] ![font-family:'Inika-Regular',Helvetica] font-normal text-black text-[14px]">
              <div>
                <button className="flex p-[10px] text-center border border-black h-[40px] w-[143px] mb-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path fill="url(#pheduyeta)" d="M0 0h20v20H0z" />
                    <defs>
                      <pattern
                        id="pheduyeta"
                        width="1"
                        height="1"
                        patternContentUnits="objectBoundingBox"
                      >
                        <use href="#pheduyetb" transform="scale(.01)" />
                      </pattern>
                      <image
                        id="pheduyetb"
                        width="100"
                        height="100"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvUlEQVR4nO2dW4hNURjHf4xL7rdG7iGUkXIpNSJJcskDKTGaB6lRXqa8UF7Ik6QoCQ/zMA8kyl25lJpIFAm55Bbmwbhk3HIbM9q1pk5Kc2afb+9vr7W/X63Xs9d//fba5+y9vrUPGIZhGIZhGIZhGIZhGIYRKoOAmUC5dkfyzhDgKPAHaANagbPAOO2O5ZEewA0n4t/2BdgAdNHuZJ7Y8R8Zhe0iMFq7o3lgBvCrCCFRawZqtDscMj2Be0XKKGzngBHanQ+RXTFktLcmYLZ2gJCYU/CLKm57DwzWDhICfYAnJcpob7XaYUJgn5CMqB3QDuM7C9xNn5SQ7dqBfKY/8FJQRgtQoR3KZ+oEZbS5X2lGTJYJy3gI9IrbmbwzEHgtKOM3MEs7lM8cFp4d0bMvIybLhWXccU+HjRiUu0ccUjJ+ucUrIybHhWfH1rgdMaBaWMYtoLsNbDyiR+MfBGX8AKbE7IsBnBeeHZtsVONTIyzjGlBWQn9yzVjgs6CMb8BE7VC+0hW4Ijw7NmqH8plaYRmXrfQnPuNd/ZSUjE/AmBL6Q94vVQ3Cs2Oddiif2SIs44x2IJ+ZDHwXlPERGKUdyle6ATeFZ8dq7VA+s01YxgntQD4zvRP1uMW0t8BQ7VA+1+PeFZ4dK7VD+cxOYRn1BLAKFxWbVSqsD1S6WigpGY1uC5uXRIO/x1VcFAaKymvSoDfwWFBGVL24BI9lnPhPsBa3Opc0e4UvVQcJUEZaUuYIbB0obC+AfgQqI2kpfYCngjIisfMJXEaSUg4JX6qi78FcyEhCykLhrQPPgL54KONkicEjKVUC9biNgjJafN0TuFtwAEqRUi98qYpuKL1jAPBT+KysykA97n33yMU7KoUHIo6UcuCN4PG9rsetSEBIZ6UcEz6213sAoxesPFKUskb4mLdDqMed62pZ05YyPIF63KkEwiLhtepi7lPOCh9nM4GRppT1wp9/PdR63DSkjHTVHpL1uJMImKUJf6c8EP7MXLx7JMmZ0ibYrrpKxlyQdSlfgQnkjCxLqSGnZFHKpbxvHciSlGZ7W2i2pFQrn5yZQlvKKe0ByCJaUt4Bw7TDZxUNKau0Q2edNKUc0Q7rC2lIabKtA9mSsiKhkylokpJSpx3MZ6SlNPq8dSA0Ka3AYu0woSAhZb92iNAoRcpzX7cOhCjlDzBPu+Mhs6iTUqI6YyNhlrjVvY5kNPhaj+sj0zrYa37B/rkmfcpc6ehp4JV7m0L0Rri1eSpUMAzDMAzDMAzDMAzDMAzDoBj+AjVtFDlX1HoWAAAAAElFTkSuQmCC"
                      />
                    </defs>
                  </svg>
                  <span className="px-[10px]">Phê duyệt</span>
                </button>
              </div>
              <div>
                <button className="flex p-[10px] text-center border border-black h-[40px] w-[143px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path fill="url(#huyboa)" d="M0 0h20v20H0z" />
                    <defs>
                      <pattern
                        id="huyboa"
                        width="1"
                        height="1"
                        patternContentUnits="objectBoundingBox"
                      >
                        <use href="#huybob" transform="scale(.01)" />
                      </pattern>
                      <image
                        id="huybob"
                        width="100"
                        height="100"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACn0lEQVR4nO3dTWrDQAwFYK1LL2RteuYWunM3vVGD9ioBB7IwIbHn5z1JD7zX+LNg4iGySKVSqVQqlUqlUqnEy5uIfInIh/BGReRbRN4lAMaPiLiIGCmKisjftoZfZpR7DCdF0TsMZ0bZw2BD0R0MSpRHGCwo+gCDCuUZDHQUfQKDAuUVDFQUfQEDGuUIBhqKHsCARDmDgYKiJzCgUFpgzEbRBhgQKC0xZqFoQ4ypKD0wfDBKD4wpKD0xfBBKT4yhKCMwvDPKCIwhKCMxvBPKSIyuKDMwvDHKDIwuKDMxvBHKTIzmKJ+TF+Lbddlu7BGMC0D9vt3L01kAni4/2ClKXHs4FCWsOSyKEtUaHkUJakyDosC1pUNRwJqGBmk7eQGr5cj2PFynOMA1+6CtUAQM45bsnWJIGNlRDBEjK4ohY2RDMQaMLCjGhBEdxRgxoqIYM0Y0FIuAEQXFImGwo1hEDFYUi4zBhmIZMFhQLBMGOoplxEBFscwYAnbs6tlB0DA8MwoqhmdEQcfwTCgsGJ4BhQ3DI6OwYnhEFHYMj4QSBcMjoETDcGaUqBjOiBIdw5lQsmA4A0o2DEdGyYrhiCjZMRwJpTAEB6X+0iY4f2lD6gzbnkqk4+ChnYKIcUs6FGSMdCgMGGlQmDDCozBihEapAWaCNcDsOuJvJX+6FoBOaT53cSVv9SXKEMyZKNZ4hzIDpfvs3pV8D79EGaQ8EsU6/8odgTJ8/vtK/h5oiTKMvyeKDX593QNl+jdEVvKzhCXKB11aosw+bVuifPKoBcpsjBYoUBhnUFAwzqBAYhxBQcM4ggKN8QoKKsYrKBQYz6CgYzyDQoXxCIUF4xEKJcYeChvGHgo1xj3K58zx2w2i2xqua6lUKpVKpVKpVCoViZR/OA3RWfvvChoAAAAASUVORK5CYII="
                      />
                    </defs>
                  </svg>

                  <span className="px-[10px]">Hủy bỏ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[25px]">
          <div className="font-bold text-[16px]">Nội dung:</div>
          <div>
            {showMore ? limitedText : `${limitedText.substring(0, 1800)} `}
            {limitedText.length > 1370 && (
              <button onClick={toggleShowMore} className="text-pink-600">
                {showMore ? "[ Ẩn đi ]" : "[ Xem thêm ]"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingAdmin;
