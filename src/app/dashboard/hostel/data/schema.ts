
import { z } from "zod"

export const roomSchema = z.object({
  id: z.string(),
  roomNumber: z.string(),
  type: z.enum(["Single", "Double", "Triple"]),
  capacity: z.number(),
  occupants: z.number(),
  status: z.enum(["Available", "Occupied"]),
})

export type Room = z.infer<typeof roomSchema>
