import {User} from "./User.ts";

export interface UsersList {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[]
}