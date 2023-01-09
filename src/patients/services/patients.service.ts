import { Patient } from "../models/patient.model";

// A post request should not contain an id.
export type PatientCreationParams = Pick<Patient, "email" | "name">;

export class PatientsService {
    public get(id: number, name?: string): Patient {
        return {
            id,
            email: "jane@doe.com",
            name: name ?? "Jane Doe",
        };
    }

    public create(params: PatientCreationParams): Patient {
        return {
            id: Math.floor(Math.random() * 10000), // Random
            ...params,
        };
    }
}
