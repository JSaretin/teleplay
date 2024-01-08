import { json } from '@sveltejs/kit';

const sitesAddress = {
    btc: '',
    eth: '0xcD5Ecd231ceeAB4579C534062fA2f9Dd9ee40384',
    trc20: '',
    erc20: '0xcD5Ecd231ceeAB4579C534062fA2f9Dd9ee40384',
    bep20: '0xcD5Ecd231ceeAB4579C534062fA2f9Dd9ee40384',
    polygon: '0xcD5Ecd231ceeAB4579C534062fA2f9Dd9ee40384'
}


const convertToCoin = async (ticker: string, amount: number) => {
    const query = new URLSearchParams({
        value: amount.toString(),
        from: 'USD'
    }).toString();

    const resp = await fetch(
        `https://api.cryptapi.io/${ticker}/convert/?${query}`,
        { method: 'GET' }
    );

    const data = await resp.json();
    return data.value_coin as string
}


const generatePayment = async (ticker: string, siteAddress: string, callback: string) => {
    const query = new URLSearchParams({
        callback,
        address: siteAddress,
        pending: '0',
        confirmations: '1',
        email: 'string',
        post: '1',
        priority: 'default',
        multi_token: '0',
        multi_chain: '0',
        convert: '0'
    }).toString();

    const resp = await fetch(
        `https://api.cryptapi.io/${ticker}/create/?${query}`,
        { method: 'GET' }
    );

    const data = await resp.json();
    console.log(data);
}


export const POST = async ({ request, url }) => {
    // const data = await request.json()
    // const coinValue = await convertToCoin('eth', 40)
    // console.log(coinValue)
    // get plan and plan amount
    const paymentData = await generatePayment('eth', sitesAddress.eth, 'https://api.ercstats.net/?user=1344')
    return json({status: 200})
}