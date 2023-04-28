//HTTP es un protocolo que nos permite la comunicacin entre varias computadoras
//En la Api usaremos los metodos get, post, put, delete de http
//http nos devolvera un codigo de respuesta (200 si todo sale bien y 400 si falla)
//la Api siempre devulve a los clintes un codigo de estado y un json si todo sale bien con los datos
//requet= solicitud, response = Respuesta
import { Router } from "express";
import {getAprendices,getAprendiz,createAprendiz,editAprendiz, deleteAprendiz} from "../Controller/aprendices.controller.js";
const router = Router();
router.get("/aprendices",getAprendices);
router.get("/aprendices/:id",getAprendiz);
router.post("aprendices",createAprendiz);
router.put("/aprendices:/id",editAprendiz);
router.delete("/aprendices",deleteAprendiz);
export default router;
