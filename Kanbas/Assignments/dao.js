import Database from "../Database/index.js";

export function createAssignment(assignment) {
    const newAssignment = {
        ...assignment,
        _id: `A${Math.floor(100 + Math.random() * 900)}`, // Generate random A-prefixed ID
        title: assignment.title || "Untitled Assignment",
        course: assignment.course || "Unknown Course",
        points: assignment.points || 100,
        group: assignment.group || "ASSIGNMENT1",
        availableFrom: assignment.availableFrom || null,
        dueDate: assignment.dueDate || null,
    };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
  }
  
export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database; // Assuming `Database` contains assignments
    return assignments.filter((assignment) => assignment.course === courseId);
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
   }

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    if (!assignment) {
        throw new Error(`Assignment with ID ${assignmentId} not found`);
    }
    Object.assign(assignment, assignmentUpdates);
    return assignment;
  }
  

