const { Error } = require("mongoose");
const Note = require("../models/Notes");
/* Contentradas las funciones que controlen operaciones con las notas */
const notesController = {};

notesController.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }); //SELECT * FROM table
    console.log("accediste a tus notas");
    res.status(200).json(notes || []);
  } catch (error) {
    console.error("Error al obtener notas:", error);
    res.status(500).json({ error: "Error al obtener notas" });
  }
};

notesController.createNewNote = async (req, res) => {
  /* Aqui va la logica de la creación en base de datos */
  //res.send("Creando nota")
  /* Por si falla algo, esta el try */
  try {
    // Verifica si el cuerpo de la solicitud contiene datos
    if (!req.body || !req.body.titulo || !req.body.contenido) {
      return res
        .status(400)
        .json({ error: "Los datos de la nota son requeridos" });
    }

    // Obtén los datos de la nota del cuerpo de la solicitud
    const { titulo, contenido } = req.body;
    console.log(req.body);
    console.log(req.user.id);
    // Crea una nueva instancia del modelo de nota
    const nuevaNota = new Note({
      titulo,
      contenido,
      user: req.user.id,
    });
    // console.log(nuevaNota);
    // Guarda la nueva nota en la base de datos
    const notaGuardada = await nuevaNota.save();
    // Envía la nota guardada como respuesta en formato JSON
    res.json({ message: "Nota creada con exito!" });;
  } catch (error) {
    console.error("Error al crear la nota:", error);
    res.status(500).json({ error: "Error al crear la nota" });
  }
};

notesController.editNote = async (req, res) => {
  try {
    // Verifica si el cuerpo de la solicitud contiene datos
    if (
      !req.body ||
      !req.body.titulo ||
      !req.body.contenido ||
      !req.body.ID
    ) {
      return res
        .status(400)
        .json({ error: "Los datos de la nota son requeridos para actualizar" });
    }

    // Obtén los datos de la nota del cuerpo de la solicitud
    const { titulo, contenido, ID } = req.body;
    console.log(req.body);
    console.log(req.user.id);

    const query = await Note.findOneAndUpdate(
      { _id: ID , user: req.user.id },
      {$set:{titulo: titulo, contenido: contenido}},
      { new: false });


      if (query===Error) {
        return res
          .status(404)
          .json({ message: "Algo salió mal al actualizar los datos" });
      } else {
        return res
          .status(200)
          .json({ message: "Nota actualizada con éxito" });
      }

  } catch (error) {
    console.error("Error al crear la nota:", error);
    res.status(500).json({ error: "Error al crear la nota" });
  }
};

notesController.deleteNote = async (req, res) => {
  try {

    console.log(req.body.ID)
    // Verifica si el cuerpo de la solicitud contiene datos
    if (!req.body || !req.body.ID) {
      return res
        .status(400)
        .json({ error: "Los datos de la nota son requeridos para eliminarla" });
    }

    // Obtén los datos de la nota del cuerpo de la solicitud
    const { ID } = req.body;
    console.log(req.body.ID);
    console.log(req.user.id);

    const query = await Note.findOneAndDelete(
      { _id: ID, user: req.user.id });
  
        if (query===Error) {
          return res
            .status(404)
            .json({ message: "Algo salió mal al eliminar la nota" });
        } else {
          return res
            .status(200)
            .json({ message: "Nota eliminada con éxito" });
        }
  } catch (error) {
    console.error("Error al eliminar la nota:", error);
    res.status(500).json({ error: "Error al eliminar la nota" });
  }
};

module.exports = notesController;
