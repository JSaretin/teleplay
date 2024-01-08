export interface Plan {
    name: string;
    description: string;
    price: number;
    meta: {
        [key: string]: string | number | string[]
    }
}


export type User = any