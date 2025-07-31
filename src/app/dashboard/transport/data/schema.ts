
import { z } from "zod"

export const vehicleSchema = z.object({
  id: z.string(),
  vehicleNumber: z.string(),
  driverName: z.string(),
  route: z.string(),
  status: z.enum(["Operational", "Maintenance", "Decommissioned"]),
})

export type Vehicle = z.infer<typeof vehicleSchema>
