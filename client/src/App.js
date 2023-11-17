// import { useSelector,useDispatch } from "react-redux";
import { ListStoryAdmin,ListCategoryAdmin,ListPendingAdmin,ListUserAdmin,DetailStoryAdmin,PendingDetailAdmin } from "./container/system/admin";
import { Route, Routes } from "react-router-dom";
import path from "./ultis/path";
import React, {Suspense } from "react";
const HomeAdmin=React.lazy(()=>import("./container/system/admin/HomeAdmin"));
function App() {
  return (
    <>
      <div className="">
        <Suspense>
          <Routes>
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
    </>
  );
}

export default App;
