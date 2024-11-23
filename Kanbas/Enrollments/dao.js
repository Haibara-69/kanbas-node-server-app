import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const enrollmentExists = Database.enrollments.some(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );

  if (!enrollmentExists) {
    Database.enrollments.push({ user: userId, course: courseId });
  }
}

export function unenrollUserFromCourse(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
}

export function findEnrollmentsByUser(userId) {
  return Database.enrollments.filter((enrollment) => enrollment.user === userId);
}

export function findCoursesByUser(userId) {
  const enrolledCourses = findEnrollmentsByUser(userId).map(
    (enrollment) => enrollment.course
  );

  return Database.courses.filter((course) => enrolledCourses.includes(course._id));
}


