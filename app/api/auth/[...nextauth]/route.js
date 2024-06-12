import nextAuth from "next-auth";
import { authOptions } from "../../lib/auth";

export const handler = nextAuth(authOptions);

export { handler as POST, handler as GET };
