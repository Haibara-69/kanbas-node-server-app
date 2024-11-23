import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {

app.put("/api/modules/:moduleId", (req, res) => {
    try {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status =  modulesDao.updateModule(moduleId, moduleUpdates);  // Await the database update
        res.send(status);  // Send the response with the status
      } catch (error) {
        res.status(500).send({ error: 'Error updating module' });  // Handle errors
      }
    });
    
    app.delete("/api/modules/:moduleId",  (req, res) => {
        try {
          const { moduleId } = req.params;
          const status = modulesDao.deleteModule(moduleId);  // Await the database deletion
          res.send(status);  // Send the response with the status
        } catch (error) {
          res.status(500).send({ error: 'Error deleting module' });  // Handle errors
        }
      });
}

//fsfsd