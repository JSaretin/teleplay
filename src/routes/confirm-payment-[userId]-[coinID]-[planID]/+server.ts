import { env } from '$env/dynamic/private'
import { pb } from '$lib'
import { json } from '@sveltejs/kit';

export const POST = async ({ params, request }) => {
    const data = await request.json()
    // update database
    const collection = pb.collection('users');
    await collection.authWithPassword(env.ADMIN_USERNAME, env.ADMIN_PASSWORD)
    await collection.update(params.userId, {
        current_plan: params.planID
    })
    return json({ status: 200 })
}