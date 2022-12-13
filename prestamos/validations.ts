import { Prestamo } from "./interfaces";
import { PrestamosException } from './exceptions';


const validatePrestamosInput = (data: Prestamo) => {
    if (!data.nombre) throw new PrestamosException("Property name is missing");
}

export default {
    validatePrestamosInput
}