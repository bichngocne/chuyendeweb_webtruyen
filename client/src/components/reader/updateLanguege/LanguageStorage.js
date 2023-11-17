export const getLanguageFromStorage = () => {
    return localStorage.getItem('language') || 'english'; // Lấy ngôn ngữ từ Local Storage, mặc định là Tiếng Anh
  };
  
  export const setLanguageToStorage = (language) => {
    localStorage.setItem('language', language); // Lưu ngôn ngữ vào Local Storage
  };