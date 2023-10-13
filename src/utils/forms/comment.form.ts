import {z} from "zod";

export const schema = z.object({
    by: z.string().min(3).max(20),
    text: z.string().min(3).max(250),
});

export type T_CommentFormData = z.infer<typeof schema>;
