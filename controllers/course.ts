import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Course } from "../models/course.ts";
import { courses } from "../db/data.ts";

export const getCourses = ({ response }: { response: any }) => {
  response.body = courses;
};

export const addCourses = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const course: Course = {
    name: body.value.name,
    price: body.value.price,
    certification: body.value.certification,
    id: v4.generate(),
  };

  courses.push(course);
  response.body = { courseAdded: "Success" };
  response.status = 200;
};
