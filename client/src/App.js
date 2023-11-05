// import { useSelector,useDispatch } from "react-redux";
import { Home, PostStory,ListStory,Category,TrashcanStory,UpdateStory,PendingStory,AddStory } from "./container/system/poster";
import { Public } from "./container/public";
import { Route, Routes } from "react-router-dom";
import path from "./ultis/path";
import React, { Suspense } from "react";
const HomePoster = React.lazy(() => import("./container/system/poster/Home"));
const HomeReader = React.lazy(() => import("./container/system/reader/Home"));
function App() {
  return (
    <>
      <div className="">
        <Suspense>
          <Routes>
            {/* Tuyến đường của poster */}
            <Route path={path.HOME_FOR_POSTER} element={<HomePoster />}>
              <Route path={path.POST_STORY} element={<PostStory />} />
              <Route path={path.LIST_STORY} element={<ListStory />} />
              <Route path={path.CHO_DUYET} element={<PendingStory />} />
              <Route path={path.CATEGORY_STORY_POSTER} element={<Category />} />
              <Route path={path.STORY_NEED_UPDATE} element={<UpdateStory />} />
              <Route path={path.THUNG_RAC} element={<TrashcanStory />} />
            </Route>
              {/* Tuyến đường của reader */}
            <Route>
              <Route path={path.HOME_FOR_READER} element={<HomeReader />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
