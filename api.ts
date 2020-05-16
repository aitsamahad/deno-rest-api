import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getCourses, addCourses } from "./controllers/course.ts";

// File: Server files
// Router Object
const router = new Router();
const app = new Application();
const PORT = 4300;

router.get("/learn", getCourses).post("/create", addCourses);

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on PORT ${PORT}`);
await app.listen({ port: PORT });
