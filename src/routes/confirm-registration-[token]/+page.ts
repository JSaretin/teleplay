import { pb } from '$lib';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
    const token = params.token;
    try {
        await pb.collection('users').confirmVerification(token);
        return {}
    }
    catch (e: any) {
        throw error(500, e.message)
    }
}