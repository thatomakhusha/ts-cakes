export type ReviewStatus = "pending" | "approved" | "rejected";

export type Review = {
    id: number;
    name: string;
    date: string;
    category: string;
    review: string;
    rating: number;
    status: ReviewStatus;
};