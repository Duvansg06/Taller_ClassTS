interface BaseObjecto {
    id : number;
}

interface Usuario extends BaseObjecto{
    email: string;
    password : number;
}

interface Productos extends BaseObjecto{
    categoria: string;
}

interface Order extends BaseObjecto{
    color : string;
}

function printData<T extends BaseObjecto>(data: T): void{
    console.log(`ID: ${data.id}`);
    console.log(data);
}

const usuario : Usuario = { id: 1, email: "duvan@gmail.com", password: 1287};
const productos : Productos = {id: 2, categoria: "jugueteria"};
const order : Order = { id: 3, color:"Blanco"};

printData(usuario);
printData(productos);
printData(order);
