// src/app.ts
import bodyParser from "body-parser";
import express, { Request, Response } from "express";

import { RegisterRoutes } from "./routes";
import SwaggerUI from "swagger-ui-express";

export const app = express();

// Use body parser to read sent json payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

RegisterRoutes(app);

app.use(["/openapi", "/docs", "/swagger"], SwaggerUI.serve, async (_req: Request, res: Response) => {
    return res.send(SwaggerUI.generateHTML(await import("../swagger.json")));
});
