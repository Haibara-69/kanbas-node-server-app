// Enrollments/routes.js
import * as enrollmentDao from "./dao.js";
import * as courseDao from "../Courses/dao.js";

export default function EnrollmentsRoutes(app) {
  app.post("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;

    try {
      enrollmentDao.enrollUserInCourse(userId, courseId);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ message: "Failed to enroll in course", error });
    }
  });

  app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;

    try {
      enrollmentDao.unenrollUserFromCourse(userId, courseId);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ message: "Failed to unenroll from course", error });
    }
  });

  app.get("/api/enrollments/:userId", (req, res) => {
    const { userId } = req.params;

    try {
      const courses = enrollmentDao.findCoursesByUser(userId);
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch enrollments", error });
    }
  });
}

