const path = {
    PUBLIC:'/',
    // đường dẫn của poster
    HOME_FOR_POSTER:'management-story',
    POST_STORY:'post-story',
    LIST_STORY:'list-story',
    CHO_DUYET:'story-cho-duyet',
    CATEGORY_STORY_POSTER:'category-story',
    STORY_NEED_UPDATE:'story-need-update',
    THUNG_RAC:'thung-rac',
    STORY__NAME__ID_UPDATE:'edit',
    STORY__NAME__ID:'story/:name/:sid',
    CHAPPER__NAME__ID:'story/:name/:sid/chapper/:number',

    // đường dẫn của reader
    HOME_FOR_READER:'reader',
    TYPE_STORY:'type-story/:categoryId',
    DETAIL_STORY:'story/:storyId',
    CHAPPER_READER:'chapper/:storyId/:chapperId',
    LIST_COMICS:'reader/listcomics',
    NOTFOUND_PAGE:'/notfound',
    //Đường dẫn admin
    HOME_FOR_ADMIN:'admin',
    LIST_STORY_ADMIN:'list-story-admin',
    LIST_CATEGORY_ADMIN:'list-category-admin',
    LIST_PENDING_ADMIN:'list-pending-admin',
    LIST_USER_ADMIN:'list-user-admin',
    DETAIL_STORY_ADMIN:'list-story-admin/detail-story-admin/:id',
    DETAIL_PENDING_ADMIN:'list-pending-admin/detail-pending-admin/:id',
}

export default path