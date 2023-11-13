import { body } from "express-validator";

const isImgValue = (imgs) => {
  return Object.keys(imgs).length === 1;
};
const isCategoryValueValid = (categoryArray) => {
  return categoryArray.length >= 1 && categoryArray.length <= 3;
};

const validatePostStory = () => {
  return [
    body("name", "The name field is required").not().isEmpty(),
    body("description", "The description field is required").not().isEmpty(),
    body("classifi", "The classifi field is required").not().isEmpty(),
    body("author", "The author name field is required").not().isEmpty(),
    body("totalChap", "The totalChap field is required").not().isEmpty(),
    body(
      "name",
      "The name must be at least 3 characters, maximum 50 characters and cannot start with 3 spaces."
    )
      .isLength({ min: 3, max: 50 })
      .matches(/^(?!(\s.*){3}).*/),
    body(
      "description",
      "The description must be at least 3 characters and cannot start with 3 spaces."
    )
      .isLength({ min: 3 })
      .matches(/^(?!(\s.*){3}).*/),
    body(
      "author",
      "The author must be at least 3 characters, maximum 50 characters and cannot start with 3 spaces."
    )
      .isLength({ min: 3, max: 50 })
      .matches(/^(?!(\s.*){3}).*/),
    body("classifi", "The classifi field is number").isInt(),
    body("totalChap", "The classifi field is number").isInt(),
    body("img", "Must choose a photo.").custom(isImgValue),
    body(
      "category",
      "Choose at least 1 category and at most 3 categories."
    ).custom(isCategoryValueValid),
  ];
};

export { validatePostStory };
