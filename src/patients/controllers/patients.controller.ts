import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Tags } from "tsoa";
import { Patient } from "../models/patient.model";
import { PatientsService } from "../services/patients.service";

@Tags("Patients")
@Route("patients")
export class PatientsController extends Controller {
    @Get("{patientId}")
    public async getUser(@Path() patientId: number, @Query() name?: string): Promise<Patient> {
        return new PatientsService().get(patientId, name);
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createUser(@Body() requestBody: Patient): Promise<void> {
        this.setStatus(201); // set return status 201
        new PatientsService().create(requestBody);
        return;
    }
}
