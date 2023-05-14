export type Washroom = {
  accessibility_info: string;
  id: string;
  number_of_ratings: number;
  payment_amount: number;
  user_photos?: string[] | null;
  num_of_stalls: string;
  amenities: Amenities;
  reviews?: string[] | null;
  landmark: string;
  kind_of_establishment: string;
  location: Location;
  cleanliness_rating: number;
  payment_required: boolean;
  overall_rating: number;
  description: string;
  sentiment_analysis?: SentimentAnalysis | null;
  safety_rating: number;
  title: string;
  isClean?: string;
  isSafe?: string;
  txt?: string;
};
export type Amenities = {
  hand_dryer: boolean;
  sanitary_napking_disposal: boolean;
  accessible: boolean;
  medical_waste_disposal: boolean;
  paper_towels: boolean;
  sanitizer: boolean;
  baby_changing_facilities: boolean;
  toilet_paper: boolean;
  soap: boolean;
  eco_friendly: boolean;
};
export type Location = {
  latitude: number;
  longitude: number;
};
export type SentimentAnalysis = {
  txt: string;
};
