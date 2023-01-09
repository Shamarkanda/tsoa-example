export interface User<T> {
    id: number;
    email: string;
    name: string;
    status?: "Happy" | "Sad";
    phoneNumbers?: string[];
    role?: T;
}
