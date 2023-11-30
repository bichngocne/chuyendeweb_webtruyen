// import { useSelector,useDispatch } from "react-redux";
import {
  PostStory,
  ListStory,
  Category,
  TrashcanStory,
  PendingStory,
  UpdateStory,
  Story,
  Chapper,
} from "./container/system/poster";
import {
  DetailStory,
  TypeStory,
  ChapperReader,
  NotFound,
  ListComics,
  DetailComic,
  DetailChapperComic,
  InfoReader,
} from "./container/system/reader";
import { Public } from "./container/public";
import {
  ListStoryAdmin,
  ListCategoryAdmin,
  ListPendingAdmin,
  ListUserAdmin,
  DetailStoryAdmin,
  PendingDetailAdmin,
} from "./container/system/admin";
import { Route, Routes } from "react-router-dom";
import path from "./ultis/path";
import { ThemeProvider } from "./components/reader/ThemeContext";
import React, { Suspense } from "react";
const HomePoster = React.lazy(() => import("./container/system/poster/Home"));
const HomeReader = React.lazy(() => import("./container/system/reader/Home"));
const HomeAdmin = React.lazy(() =>
  import("./container/system/admin/HomeAdmin")
);
function App() {
  return (
    <>
      <div className="">
        <Suspense>
          <Routes>
            {/* Tuyến đường của poster */}
            <Route path={path.HOME_FOR_POSTER} element={<HomePoster />}>
              <Route path={path.POST_STORY} element={<PostStory />} />
              <Route
                path={path.STORY__NAME__ID_UPDATE}
                element={<PostStory />}
              />
              <Route path={path.LIST_STORY} element={<ListStory />} />
              <Route path={path.CHO_DUYET} element={<PendingStory />} />
              <Route path={path.CATEGORY_STORY_POSTER} element={<Category />} />
              <Route path={path.STORY_NEED_UPDATE} element={<UpdateStory />} />
              <Route path={path.THUNG_RAC} element={<TrashcanStory />} />
              <Route path={path.STORY__NAME__ID} element={<Story />} />
              <Route path={path.CHAPPER__NAME__ID} element={<Chapper />} />
            </Route>
          </Routes>
        </Suspense>
      </div>

      <ThemeProvider>
        <div className="">
          <Suspense>
            <Routes>
              {/* Tuyến đường của reader */}

              <Route path={path.HOME_FOR_READER} element={<HomeReader />} />
              <Route path={path.TYPE_STORY} element={<TypeStory />} />
              <Route path={path.DETAIL_STORY} element={<DetailStory />} />
              <Route path={path.CHAPPER_READER} element={<ChapperReader />} />
              <Route path={path.LIST_COMICS} element={<ListComics />} />
              <Route path={path.DETAIL_COMIC} element={<DetailComic />} />
              <Route
                path={path.DETAIL_CHAPPER_COMIC}
                element={<DetailChapperComic />}
              />
              <Route path={path.INFO_READER} element={<InfoReader />} />
              <Route path={path.NOTFOUND_PAGE} element={<NotFound />} />
              <Route path={path.NOTFOUND} element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </ThemeProvider>
      <div className="">
        <Suspense>
          <Routes>
            {/* Tuyến đường của admin */}
            <Route path={path.HOME_FOR_ADMIN} element={<HomeAdmin />}>
              <Route
                path={path.LIST_STORY_ADMIN}
                element={<ListStoryAdmin />}
              />
              <Route
                path={path.DETAIL_STORY_ADMIN}
                element={<DetailStoryAdmin />}
              />
              <Route
                path={path.LIST_PENDING_ADMIN}
                element={<ListPendingAdmin />}
              />
              <Route path={path.LIST_USER_ADMIN} element={<ListUserAdmin />} />
              <Route
                path={path.LIST_CATEGORY_ADMIN}
                element={<ListCategoryAdmin />}
              />
              <Route
                path={path.DETAIL_PENDING_ADMIN}
                element={<PendingDetailAdmin />}
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
