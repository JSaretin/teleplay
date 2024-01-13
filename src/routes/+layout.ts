import { pb } from "$lib"

export const load = async () => {
    const plans = await pb.collection('plans').getFullList();
    return {
        plans
    }
}