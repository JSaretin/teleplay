import { env } from '$env/dynamic/public';
import { pb } from '$lib';
import { generatePayment } from '$lib/payment';



export const load = async ({ params }) => {
    const plan = await pb.collection('plans').getOne(params.planID)

    const data = await generatePayment(params.coinID, plan.price, env.PUBLIC_SITE_LINK + `/confirm-payment-${params.userID}-${params.coinID}-${params.planID}`)
    return data
}