import mongoose from "mongoose";
import { number } from "yup";

const prestamoSchema = new mongoose.Schema({
    id: String,
    foto: String,
    nombre: String,
    fecha: String,
    vencimiento: String,
    monto: Number,
    taza_de_interes: Number,
    intereses: Number,
    total: Number,
    tipo_cambio: Number,
    cantidad_de_Cuotas: Number,
    saldo_estatus: String,
});

export const Prestamo = mongoose.model('Prestamo', prestamoSchema);