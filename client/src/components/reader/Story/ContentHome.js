import StoryUpdating from "./StoryUpdating";
import { useTheme } from '../ThemeContext';
import HotStories from "./HotStories";
import FullStories from "./FullStories";
const ContentHome = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-[#f0f8ff]" style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>
      <div className="max-w-[1280px] mx-auto">
        {/* truyện hot */}
        <div><HotStories/></div>
        {/* truyện mới cập nhập */}
        <div>
          <StoryUpdating />
        </div>
        {/* truyện đã hoàn thành */}
        <div><FullStories/></div>
      </div>
    </div>
  );
};
export default ContentHome;
