// import { useSelector,useDispatch } from "react-redux";
import { Home, PostStory,ListStory,Category,TrashcanStory,UpdateStory,PendingStory,AddStory } from "./container/system/poster";
import { Public } from "./container/public";
import { Route, Routes } from "react-router-dom";
import path from "./ultis/path";
function App() {
  return (
    <>
      <div className="">
        <Routes>
          {/* Tuyến đường của poster */}
        <Route path={path.HOME_FOR_POSTER} element={<Home />}>
            <Route path={path.POST_STORY} element={<PostStory />}/>
            <Route path={path.LIST_STORY} element={<ListStory />}/>
            <Route path={path.CHO_DUYET} element={<PendingStory />}/>
            <Route path={path.CATEGORY_STORY_POSTER} element={<Category />}/>
            <Route path={path.STORY_NEED_UPDATE} element={<UpdateStory />}/>
            <Route path={path.THUNG_RAC} element={<TrashcanStory />}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
