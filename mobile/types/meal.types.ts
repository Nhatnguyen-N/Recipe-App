export interface Category {
  id: number,
  name: string,
  image: string,
  description: string,
}

export interface TransformedMeal {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  category: string;
  area?: string; // Optional vì có thể không có trong dữ liệu gốc
  ingredients: string[];
  instructions: string[];
  youtubeUrl?: any;
  originalData: any; // Giữ nguyên kiểu any vì dữ liệu gốc có cấu trúc phức tạp
}