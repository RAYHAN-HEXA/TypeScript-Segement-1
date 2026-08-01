// utilities types


type product = {
    id : number;
    name : string;
    price : string;
    stock : number ;
    color ? : string;
}

type productSummary = Pick<product,'id'| 'name'|'price'>;
type productWithoutStock = Omit<product,'color'|'stock'>;

type productwithColor = Required<product>

const product : productwithColor= {
    id : 2222,
    name : 'rayhan',
    price : '22',
    stock : 1,
    color : "red"

}

type productPartial = Partial<product>;
type productReadonly = Readonly<product>;

const emptyObject :  Record<string, unknown> = {};