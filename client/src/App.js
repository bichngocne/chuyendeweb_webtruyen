// import { useSelector,useDispatch } from "react-redux";
import { ListStoryAdmin,ListCategoryAdmin,ListPendingAdmin,ListUserAdmin,DetailStoryAdmin,PendingDetailAdmin } from "./container/system/admin";
import { DetailStory, TypeStory } from "./container/system/reader";
import { Public } from "./container/public";
import { Route, Routes } from "react-router-dom";
import path from "./ultis/path";
import { ThemeProvider } from "./components/reader/ThemeContext"
import React, {Suspense } from "react";
const HomeAdmin=React.lazy(()=>import("./container/system/admin/HomeAdmin"));
const HomeReader=React.lazy(()=>import("./container/system/reader/Home"));
function App() {
  return (
    <>
      <ThemeProvider>
          <div className="">
            <Suspense>
              <Routes>
                {/* Tuyến đường của reader */}
                <Route path={path.HOME_FOR_READER} element={<HomeReader />} />
                <Route path={path.TYPE_STORY} element={<TypeStory />} />
                <Route path={path.DETAIL_STORY} element={<DetailStory />} />

                {/* Tuyến đường của reader */}
              <Route path={path.HOME_FOR_ADMIN} element={<HomeAdmin />}>
              <Route path={path.LIST_STORY_ADMIN} element={<ListStoryAdmin />} />
              <Route path={path.DETAIL_STORY_ADMIN} element={<DetailStoryAdmin />} />
              <Route path={path.LIST_PENDING_ADMIN} element={<ListPendingAdmin />} />
              <Route path={path.LIST_USER_ADMIN} element={<ListUserAdmin />} />
              <Route path={path.LIST_CATEGORY_ADMIN} element={<ListCategoryAdmin />} />
              <Route path={path.DETAIL_PENDING_ADMIN} element={<PendingDetailAdmin />} />
            </Route>
              </Routes>
            </Suspense>
          </div>
      </ThemeProvider>
    </>
  );
}

export default App;
