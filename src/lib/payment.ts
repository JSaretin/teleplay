import { env } from "$env/dynamic/public";

const siteErcAddress = env.PUBLIC_SITE_ADDRESS;

export const address: {
    btc?: string;
    erc20?: string;
    bep20?: string;
    trc20?: string;
    polygon?: string;
    eth?: string;
    bch?: string;
    ltc?: string;
    doge?: string;
    xmr?: string;
    trx?: string;
} = {
    bep20: siteErcAddress,
    erc20: siteErcAddress,
    eth: siteErcAddress,
    polygon: siteErcAddress
};

export const coins = {
    btc: {
        coin: 'Bitcoin',
        symbol: 'btc',
        logo: 'https://api.cryptapi.io/media/token_logos/btc.png',
        minimum_transaction: 8000,
        minimum_transaction_coin: '0.00008000',
        minimum_fee: 546,
        minimum_fee_coin: '0.00000546',
        fee_percent: '1.00',
        network_fee_estimation: '0.00010763'
    },
    eth: {
        coin: 'Ethereum',
        symbol: 'eth',
        logo: 'https://api.cryptapi.io/media/token_logos/eth.png',
        minimum_transaction: 1500000000000000,
        minimum_transaction_coin: '0.00150000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.000793095566256'
    },
    bch: {
        coin: 'Bitcoin Cash',
        symbol: 'bch',
        logo: 'https://api.cryptapi.io/media/token_logos/bch.png',
        minimum_transaction: 50000,
        minimum_transaction_coin: '0.00050000',
        minimum_fee: 546,
        minimum_fee_coin: '0.00000546',
        fee_percent: '1.00',
        network_fee_estimation: '0.00000305'
    },
    ltc: {
        coin: 'Litecoin',
        symbol: 'ltc',
        logo: 'https://api.cryptapi.io/media/token_logos/ltc.png',
        minimum_transaction: 200000,
        minimum_transaction_coin: '0.00200000',
        minimum_fee: 5460,
        minimum_fee_coin: '0.00005460',
        fee_percent: '1.00',
        network_fee_estimation: '0.0000021'
    },
    doge: {
        coin: 'Dogecoin',
        symbol: 'doge',
        logo: 'https://api.cryptapi.io/media/token_logos/dogecoin-doge-logo_OO2Ir0v.png',
        minimum_transaction: 1000000000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.66787835'
    },
    xmr: {
        coin: 'Monero',
        symbol: 'xmr',
        logo: 'https://api.cryptapi.io/media/token_logos/xmr.png',
        minimum_transaction: 2500000000,
        minimum_transaction_coin: '0.00250000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.000520829997'
    },
    trx: {
        coin: 'TRX',
        symbol: 'trx',
        logo: 'https://api.cryptapi.io/media/token_logos/trx_LkowloZ.png',
        minimum_transaction: 10000000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '1.30000000'
    },
    'erc20/1inch': {
        coin: '1INCH Token',
        logo: 'https://api.cryptapi.io/media/token_logos/8104_VwXDEWf.png',
        minimum_transaction: 25000000000000000000,
        minimum_transaction_coin: '25.00000000',
        minimum_fee: 500000000000000,
        minimum_fee_coin: '0.00050000',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: '1inch'
    },
    'erc20/bnb': {
        coin: 'Binance Coin',
        logo: 'https://api.cryptapi.io/media/token_logos/bnb_logo_otj5BsU.png',
        minimum_transaction: 30000000000000000,
        minimum_transaction_coin: '0.03000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'bnb'
    },
    'erc20/busd': {
        coin: 'BUSD',
        logo: 'https://api.cryptapi.io/media/token_logos/busd_logo_0nK6jth.png',
        minimum_transaction: 1000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'busd'
    },
    'erc20/euroc': {
        coin: 'Euro Coin',
        logo: 'https://api.cryptapi.io/media/token_logos/eurc_logo.png',
        minimum_transaction: 1000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'euroc'
    },
    'erc20/eurt': {
        coin: 'EURt',
        logo: 'https://api.cryptapi.io/media/token_logos/EURt.png',
        minimum_transaction: 1000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'eurt'
    },
    'erc20/family': {
        coin: 'The Bitcoin Family',
        logo: 'https://api.cryptapi.io/media/token_logos/family2.png',
        minimum_transaction: 2500000,
        minimum_transaction_coin: '250.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'family'
    },
    'erc20/link': {
        coin: 'ChainLink Token',
        logo: 'https://api.cryptapi.io/media/token_logos/chainlink-link-logo.png',
        minimum_transaction: 1500000000000000000,
        minimum_transaction_coin: '1.50000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'link'
    },
    'erc20/mkr': {
        coin: 'Maker',
        logo: 'https://api.cryptapi.io/media/token_logos/maker-mkr-logo.png',
        minimum_transaction: 10000000000000000,
        minimum_transaction_coin: '0.01000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'mkr'
    },
    'erc20/nexo': {
        coin: 'NEXO',
        logo: 'https://api.cryptapi.io/media/token_logos/nexo-nexo-logo.png',
        minimum_transaction: 10000000000000000000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'nexo'
    },
    'erc20/pepe': {
        coin: 'PEPE Token',
        logo: 'https://api.cryptapi.io/media/token_logos/pepe_coin.png',
        minimum_transaction: 9518700000000000000000000,
        minimum_transaction_coin: '9518700.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'pepe'
    },
    'erc20/shib': {
        coin: 'SHIBA INU',
        logo: 'https://api.cryptapi.io/media/token_logos/shiba-inu-shib-logo_6BWWC1Q.png',
        minimum_transaction: 1000000000000000000000000,
        minimum_transaction_coin: '1000000.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'shib'
    },
    'erc20/tusd': {
        coin: 'True USD',
        logo: 'https://api.cryptapi.io/media/token_logos/true_usd_logo_4yyJXlR.png',
        minimum_transaction: 1000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'tusd'
    },
    'erc20/usdc': {
        coin: 'USD Coin',
        logo: 'https://api.cryptapi.io/media/token_logos/usdc_logo_kkXcxbr.png',
        minimum_transaction: 1000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'usdc'
    },
    'erc20/usdp': {
        coin: 'Pax Dollar',
        logo: 'https://api.cryptapi.io/media/token_logos/pax_dollar_logo.png',
        minimum_transaction: 1000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'usdp'
    },
    'erc20/usdt': {
        coin: 'USDT',
        logo: 'https://api.cryptapi.io/media/token_logos/tether_usdt_logo_sltDNAQ.png',
        minimum_transaction: 1000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'usdt'
    },
    'erc20/verse': {
        coin: 'Verse',
        logo: 'https://api.cryptapi.io/media/token_logos/verse_logo.png',
        minimum_transaction: 21450000000000000000000,
        minimum_transaction_coin: '21450.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.003279903294444473',
        symbol: 'verse'
    },
    'bep20/1inch': {
        coin: '1INCH Token',
        logo: 'https://api.cryptapi.io/media/token_logos/8104.png',
        minimum_transaction: 1000000000000000000,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 10000000000000000,
        minimum_fee_coin: '0.01000000',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: '1inch'
    },
    'bep20/ada': {
        coin: 'Cardano',
        logo: 'https://api.cryptapi.io/media/token_logos/Cardano-ADA-icon.png',
        minimum_transaction: 1000000000000000000,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'ada'
    },
    'bep20/bnb': {
        coin: 'BNB',
        logo: 'https://api.cryptapi.io/media/token_logos/bnb_logo_QGP6Eb9.png',
        minimum_transaction: 1000000000000000,
        minimum_transaction_coin: '0.00100000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0002016',
        symbol: 'bnb'
    },
    'bep20/btcb': {
        coin: 'BTCB',
        logo: 'https://api.cryptapi.io/media/token_logos/btc_u3O1Gyz.png',
        minimum_transaction: 100000000000000,
        minimum_transaction_coin: '0.00010000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'btcb'
    },
    'bep20/busd': {
        coin: 'BUSD',
        logo: 'https://api.cryptapi.io/media/token_logos/busd_logo_B5HrbIX.png',
        minimum_transaction: 100,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'busd'
    },
    'bep20/cake': {
        coin: 'PancakeSwap',
        logo: 'https://api.cryptapi.io/media/token_logos/logo.webp',
        minimum_transaction: 100000000000000000,
        minimum_transaction_coin: '0.10000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'cake'
    },
    'bep20/dai': {
        coin: 'Dai Token',
        logo: 'https://api.cryptapi.io/media/token_logos/dai_logo.png',
        minimum_transaction: 1000000000000000000,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'dai'
    },
    'bep20/doa': {
        coin: 'Doaibu',
        logo: 'https://api.cryptapi.io/media/token_logos/200x200_DOA.png',
        minimum_transaction: 100000000000000000,
        minimum_transaction_coin: '0.10000000',
        minimum_fee: 10000000000000000,
        minimum_fee_coin: '0.01000000',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'doa'
    },
    'bep20/doge': {
        coin: 'Dogecoin',
        logo: 'https://api.cryptapi.io/media/token_logos/dogecoin-doge-logo.png',
        minimum_transaction: 1000000000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'doge'
    },
    'bep20/eth': {
        coin: 'ETH',
        logo: 'https://api.cryptapi.io/media/token_logos/eth_7BJnw4p.png',
        minimum_transaction: 1000000000000000,
        minimum_transaction_coin: '0.00100000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'eth'
    },
    'bep20/ltc': {
        coin: 'LTC',
        logo: 'https://api.cryptapi.io/media/token_logos/ltc_Gxkze9T.png',
        minimum_transaction: 2000000000000000,
        minimum_transaction_coin: '0.00200000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'ltc'
    },
    'bep20/matic': {
        coin: 'MATIC',
        logo: 'https://api.cryptapi.io/media/token_logos/polygon_logo_ZVxZk7a.png',
        minimum_transaction: 1000000000000000000,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'matic'
    },
    'bep20/phpt': {
        coin: 'PHPt',
        logo: 'https://api.cryptapi.io/media/token_logos/PHPT_Logo-04.png',
        minimum_transaction: 1000000000000000000,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'phpt'
    },
    'bep20/shib': {
        coin: 'SHIBA INU',
        logo: 'https://api.cryptapi.io/media/token_logos/shiba-inu-shib-logo.png',
        minimum_transaction: 40000000000000000000000,
        minimum_transaction_coin: '40000.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'shib'
    },
    'bep20/usdc': {
        coin: 'USDC',
        logo: 'https://api.cryptapi.io/media/token_logos/usdc_logo_cw97frE.png',
        minimum_transaction: 100,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'usdc'
    },
    'bep20/usdt': {
        coin: 'USDT',
        logo: 'https://api.cryptapi.io/media/token_logos/tether_usdt_logo_D5QFQLi.png',
        minimum_transaction: 100,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'usdt'
    },
    'bep20/xrp': {
        coin: 'XRP',
        logo: 'https://api.cryptapi.io/media/token_logos/xrp_logo.png',
        minimum_transaction: 2000000000000000000,
        minimum_transaction_coin: '2.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0005956128',
        symbol: 'xrp'
    },
    'polygon/avax': {
        coin: 'Avalanche Token',
        logo: 'https://api.cryptapi.io/media/token_logos/avax_logo.png',
        minimum_transaction: 40000000000000000,
        minimum_transaction_coin: '0.04000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.025011945604259422',
        symbol: 'avax'
    },
    'polygon/busd': {
        coin: 'Binance-Peg BUSD Token',
        logo: 'https://api.cryptapi.io/media/token_logos/busd_logo_0dCWhQH.png',
        minimum_transaction: 50,
        minimum_transaction_coin: '0.50000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.025011945604259422',
        symbol: 'busd'
    },
    'polygon/mana': {
        coin: 'Decentraland',
        logo: 'https://api.cryptapi.io/media/token_logos/mana_logo_T7ls5Xo.png',
        minimum_transaction: 1300000000000000000,
        minimum_transaction_coin: '1.30000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.025011945604259422',
        symbol: 'mana'
    },
    'polygon/matic': {
        coin: 'MATIC',
        logo: 'https://api.cryptapi.io/media/token_logos/polygon_logo_ZZ69slV.png',
        minimum_transaction: 500000000000000000,
        minimum_transaction_coin: '0.50000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.0069928089370608',
        symbol: 'matic'
    },
    'polygon/SMT': {
        coin: 'Saffron Mount Token',
        logo: 'https://api.cryptapi.io/media/token_logos/smt_token.png',
        minimum_transaction: 50000000,
        minimum_transaction_coin: '0.50000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.025011945604259422',
        symbol: 'SMT'
    },
    'polygon/usdc': {
        coin: 'USD Coin (Native)',
        logo: 'https://api.cryptapi.io/media/token_logos/usdc_logo_q6EjF1X_I2BQV2Y.png',
        minimum_transaction: 50,
        minimum_transaction_coin: '0.50000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.025011945604259422',
        symbol: 'usdc'
    },
    'polygon/usdc.e': {
        coin: 'USD Coin (Bridged)',
        logo: 'https://api.cryptapi.io/media/token_logos/usdc_logo_q6EjF1X.png',
        minimum_transaction: 50,
        minimum_transaction_coin: '0.50000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.025011945604259422',
        symbol: 'usdc.e'
    },
    'polygon/usdt': {
        coin: 'USDT',
        logo: 'https://api.cryptapi.io/media/token_logos/tether_usdt_logo_sVcGFx0.png',
        minimum_transaction: 50,
        minimum_transaction_coin: '0.50000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.025011945604259422',
        symbol: 'usdt'
    },
    'polygon/wbtc': {
        coin: 'Wrapped BTC',
        logo: 'https://api.cryptapi.io/media/token_logos/wrapped_btc_logo.png',
        minimum_transaction: 3000,
        minimum_transaction_coin: '0.00003000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.025011945604259422',
        symbol: 'wbtc'
    },
    'polygon/weth': {
        coin: 'Wrapped Ether',
        logo: 'https://api.cryptapi.io/media/token_logos/weth_logo_OPIjlZ8.png',
        minimum_transaction: 500000000000000,
        minimum_transaction_coin: '0.00050000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '0.025011945604259422',
        symbol: 'weth'
    },
    'trc20/aedt': {
        coin: 'AEDT',
        logo: 'https://api.cryptapi.io/media/token_logos/AEDT.png',
        minimum_transaction: 100,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '12.30600000',
        symbol: 'aedt'
    },
    'trc20/btc': {
        coin: 'BTC',
        logo: 'https://api.cryptapi.io/media/token_logos/btc_1.png',
        minimum_transaction: 8000,
        minimum_transaction_coin: '0.00008000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '12.30600000',
        symbol: 'btc'
    },
    'trc20/busd': {
        coin: 'BUSD',
        logo: 'https://api.cryptapi.io/media/token_logos/busd_logo_1i7DlwH.png',
        minimum_transaction: 100,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '12.30600000',
        symbol: 'busd'
    },
    'trc20/doge': {
        coin: 'Dogecoin',
        logo: 'https://api.cryptapi.io/media/token_logos/dogecoin-doge-logo_cteKsQX.png',
        minimum_transaction: 1000000000,
        minimum_transaction_coin: '10.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '12.30600000',
        symbol: 'doge'
    },
    'trc20/eth': {
        coin: 'ETH',
        logo: 'https://api.cryptapi.io/media/token_logos/eth_heJB8FT.png',
        minimum_transaction: 1000000000000000,
        minimum_transaction_coin: '0.00100000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '12.30600000',
        symbol: 'eth'
    },
    'trc20/ht': {
        coin: 'HuobiToken',
        logo: 'https://api.cryptapi.io/media/token_logos/huobi-token-ht-logo.png',
        minimum_transaction: 100000000000000000,
        minimum_transaction_coin: '0.10000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '12.30600000',
        symbol: 'ht'
    },
    'trc20/inrt': {
        coin: 'INRT',
        logo: 'https://api.cryptapi.io/media/token_logos/inrt_logo.png',
        minimum_transaction: 100,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '12.30600000',
        symbol: 'inrt'
    },
    'trc20/tusd': {
        coin: 'TrueUSD',
        logo: 'https://api.cryptapi.io/media/token_logos/true_usd_logo_rAndOYK.png',
        minimum_transaction: 100,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '12.30600000',
        symbol: 'tusd'
    },
    'trc20/usdc': {
        coin: 'USD Coin',
        logo: 'https://api.cryptapi.io/media/token_logos/usdc_logo.png',
        minimum_transaction: 100,
        minimum_transaction_coin: '1.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '12.30600000',
        symbol: 'usdc'
    },
    'trc20/usdt': {
        coin: 'USDT',
        logo: 'https://api.cryptapi.io/media/token_logos/tether_usdt_logo_RcXXVrA.png',
        minimum_transaction: 500,
        minimum_transaction_coin: '5.00000000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '31.89800000',
        symbol: 'usdt'
    },
    'trc20/wbtc': {
        coin: 'WBTC',
        logo: 'https://api.cryptapi.io/media/token_logos/wrapped_btc_logo_bllQPK9.png',
        minimum_transaction: 8000,
        minimum_transaction_coin: '0.00008000',
        minimum_fee: 0,
        minimum_fee_coin: '0E-8',
        fee_percent: '1.00',
        network_fee_estimation: '12.30600000',
        symbol: 'wbtc'
    }
};


export const allowedCoins = (Object.keys(coins) as (keyof typeof coins)[]).filter((k) => {
    if (!k.includes('/')) {
        return address[k as 'btc' | 'eth' | 'bch' | 'ltc' | 'doge' | 'xmr' | 'trx'] !== undefined;
    }
    const key = k.split('/')[0];
    return address[key as 'erc20' | 'bep20' | 'trc20' | 'polygon'] !== undefined;
});


export const convertToCoin = async (ticker: string, amount: number) => {
    const query = new URLSearchParams({
        value: amount.toString(),
        from: 'USD'
    }).toString();

    const resp = await fetch(`https://api.cryptapi.io/${ticker}/convert/?${query}`, {
        method: 'GET'
    });

    const data = await resp.json();
    return data.value_coin as string;
};

async function getQrCode(ticker: string, address: string, value: string) {
    const query = new URLSearchParams({
        address,
        value,
        size: '512'
    }).toString();

    const resp = await fetch(
        `https://api.cryptapi.io/${ticker}/qrcode/?${query}`,
        { method: 'GET' }
    );

    const data = await resp.json();
    return data
}

export const generatePayment = async (ticker: string, amount: number, callback: string) => {
    const originalTicker = ticker.replace('-', '/')

    let siteAddress: string | undefined;
    if (ticker.includes('-')) {
        siteAddress = address[ticker.split('-')[0] as 'erc20' | 'bep20' | 'trc20' | 'polygon'];
    } else {
        siteAddress = address[ticker as 'btc' | 'eth' | 'bch' | 'ltc' | 'doge' | 'xmr' | 'trx'];
    }

    if (siteAddress === undefined) {
        return;
    }


    const query = new URLSearchParams({
        callback: `${callback}`,
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

    const resp = await fetch(`https://api.cryptapi.io/${originalTicker}/create/?${query}`, {
        method: 'GET'
    });

    const data = await resp.json();

    if (resp.status !== 200) {
        console.log(data)
        return;
    }

    const price = await convertToCoin(originalTicker, amount);
    const qrCode = await getQrCode(originalTicker, data.address_in, price)

    return { ...qrCode, ...data, price, ...coins[originalTicker as keyof typeof coins] }

};
