import { body } from "express-validator";

//check img
const isImgValue = (imgs) => {
  return Object.keys(imgs).length === 1;
};
//check category
const isCategoryValueValid = (categoryArray) => {
  return categoryArray.length >= 1 && categoryArray.length <= 3;
};
// validate for post story
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
// validate for post chapper (truyện chữ)
const common = [
  body("name", "The name field is required").not().isEmpty(),
  body("description", "The description field is required").not().isEmpty(),
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
];
const validatePostChapper1 = () => {
  return [
    ...common,
    body("id_story", "The id story field is required").not().isEmpty(),
    body("numberChapper", "The numberChapper field is required")
      .not()
      .isEmpty(),
    body("numberChapper", "The numberChapper field is number").isInt(),
  ];
};
// validate for update chapper (truyện chu)
const validateUpdateChapper1 = () => {
  return [...common,
    body("version", "The version field is number").isInt(),
    body("id_chapper", "The id chapper field is required").not().isEmpty(),
  ];
};
//validate update for img story
const validateUpdateChapper2 = () => {
  return [ body("name", "The name field is required").not().isEmpty(),
  body(
    "name",
    "The name must be at least 3 characters, maximum 50 characters and cannot start with 3 spaces."
  )
    .isLength({ min: 3, max: 50 })
    .matches(/^(?!(\s.*){3}).*/),
    body("version", "The version field is number").isInt(),
    body("id_chapper", "The id chapper field is required").not().isEmpty(),
  ];
};
const validatePostChapper2 = () => {
  return [
    body("name", "The name field is required").not().isEmpty(),
    body(
      "name",
      "The name must be at least 3 characters, maximum 50 characters and cannot start with 3 spaces."
    )
      .isLength({ min: 3, max: 50 })
      .matches(/^(?!(\s.*){3}).*/),
    body("id_story", "The id story field is required").not().isEmpty(),
    body("numberChapper", "The numberChapper field is required")
      .not()
      .isEmpty(),
  ];
};

export {
  validatePostStory,
  validatePostChapper1,
  validatePostChapper2,
  validateUpdateChapper1,
  validateUpdateChapper2
};
