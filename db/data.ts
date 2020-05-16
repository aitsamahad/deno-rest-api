import { Course } from "../models/course.ts";

export let courses: Array<Course> = [
  {
    name: "Introduction to JavaScript",
    price: 2.5,
    certification: true,
  },
  {
    name: "SEO, Zero to Hero",
    price: 9.99,
    certification: true,
  },
  {
    name: "Tailwind CSS",
    price: 5,
    certification: false,
  },
];
