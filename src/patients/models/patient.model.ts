import { Contact } from "../../core/models/contact.model";
import { User } from "../../users/models/user.model";

export interface Patient {
    id: number;
    email: string;
    name: string;
    contact?: Partial<Contact>;
    tests?: Record<string, boolean>;
    doctor?: User<string>;
}
