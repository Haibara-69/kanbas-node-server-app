import * as assignmentDao from "./dao.js";

export default function AssignmentRoutes(app) {

app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const updatedAssignment = await assignmentDao.updateAssignment(assignmentId, assignmentUpdates);
        if (updatedAssignment) {
            res.status(200).json(updatedAssignment); // Return the updated assignment
        } else {
            res.status(404).json({ error: "Assignment not found" });
        }
      });
    

 app.delete("/api/assignments/:assignmentId", async (req, res) => {
   const { assignmentId } = req.params;
   const status = await assignmentDao.deleteAssignment(assignmentId);
   res.send(status);
 });

 app.post("/api/assignments", async (req, res) => {
    const newAssignment = req.body;

    try {
      const createdAssignment = await assignmentDao.createAssignment(newAssignment);
      res.status(201).json(createdAssignment);
    } catch (err) {
      console.error("Error creating assignment:", err);
      res.status(500).send(err.message);
    }
  });


}
