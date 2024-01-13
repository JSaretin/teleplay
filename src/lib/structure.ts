export interface Plan {
    id: string;
    name: string;
    description: string;
    price: number;
    recomend: boolean;
    meta: {
        [key: string]: string | number | string[]
    }
}


export type User = {
    id: string;
    current_plan: Plan['id'] | "";
    plan: Plan | {};
    [key: string]: any;
}