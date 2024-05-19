export interface ICourseDetails {
  _id: string;
  title: string;
  author: string;
  authorImage: string;
  authorDescription: string;
  originalPrice: number;
  discountedPrice: number;
  numOfRatings: number;
  rating: number;
  level: string;
  isBestSeller: boolean;
  thumbnail: string;
  description: string;
  requirements: string;
  learningOutcomes: string[];
  longdescription: string;
}

export interface IUserDetails {
  _id: string;
  name: string;
  email: string;
  password: string;

  cartItems: ICourseDetails[];

  enrolledCourses: string[];
}

export const BASE_URL = "https://findemy-backend-pg0k.onrender.com"