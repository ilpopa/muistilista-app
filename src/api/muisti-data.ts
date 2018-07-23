import { Muistilista } from '../app/muistilista/muistilista';

export const MUISTI_ASIAT: Muistilista[] = [
    {
        id: 1,
        name: 'Lounas Jaskan kanssa',
        notes: 'pitsaa',
        due: new Date(new Date().setDate(new Date().getDate() + 4)),
        done: false
    }, {
        id: 2,
        name: 'käy parturissa',
        notes: 'varmista aika aluksi',
        due: new Date(new Date().setDate(new Date().getDate() + 5)),
        done: false
    }, {
        id: 3,
        name: 'tee ostokset',
        notes: '',
        due: new Date(new Date().setDate(new Date().getDate() - 1)),
        done: true
      }
];