import { ulid } from 'ulid';
import { Prestamo } from './models';
import { Prestamo as IPrestamo } from './interfaces';

const list = async () => {
    return await Prestamo.find();
}

const store = async (data: IPrestamo) => {
    const id = ulid();

    const model = new Prestamo({ id, foto: data.foto, nombre: data.nombre, fecha: data.fecha,vencimiento: data.vencimiento,monto: data.monto,taza_de_interes: data.taza_de_interes,intereses: data.intereses,total: data.total,tipo_cambio: data.tipo_cambio,cantidad_de_Cuotas: data.cantidad_de_Cuotas,saldo_estatus :data.cantidad_de_Cuotas });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await Prestamo.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Prestamo.deleteOne({ id });
}


const update = async (id: string, data: IPrestamo) => {

    const model = await Prestamo.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}