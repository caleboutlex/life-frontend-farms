import { PoolConfig, QuoteToken, PoolCategory } from './types'
import contracts from './contracts'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    tokenName: 'SAFESTOS',
    stakingTokenName: QuoteToken.VLADBUSD,
    earningToken: '0x9eAB0a93b0cd5d904493694F041BdCedb97b88C6',
    stakingTokenAddress: '0x60d5e86c0074b56e52a7540b3bf36c399e9f3038',
    contractAddress: {
      97: '0x0',
      56: '0x870A6E86534238a8Ce262eAd0Da401Aafe71BA5b',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://stos.finance/',
    harvest: true,
    tokenPerBlock: '0.002480159',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    sousId: 2,
    tokenName: 'SAFESTOS',
    stakingTokenName: QuoteToken.VLADBUSD,
    earningToken: '0x9eAB0a93b0cd5d904493694F041BdCedb97b88C6',
    stakingTokenAddress: '0x60d5e86c0074b56e52a7540b3bf36c399e9f3038',
    contractAddress: {
      97: '0x0',
      56: '0x376006485943D1c7539bDe36A9f8d6302848469e',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://stos.finance/',
    harvest: true,
    tokenPerBlock: '0.002480159',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    sousId: 3,
    tokenName: 'SAFESTOS',
    stakingTokenName: QuoteToken.VLADSTOS,
    earningToken: '0x9eAB0a93b0cd5d904493694F041BdCedb97b88C6',
    stakingTokenAddress: '0x02E0A57343ef22E4c673AFF64Dc56C71caeD86c1',
    contractAddress: {
      97: '0x0',
      56: '0xd7932B581f5d1CAf4548Ad1746814a1E809a8f80',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://stos.finance/',
    harvest: true,
    tokenPerBlock: '0.001653439',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    quoteTokenSymbol: QuoteToken.VLAD,
    quoteTokenAdresses: contracts.cake
  },
  {
    sousId: 4,
    tokenName: 'SAFESTOS',
    stakingTokenName: QuoteToken.BNBSTOS,
    earningToken: '0x9eAB0a93b0cd5d904493694F041BdCedb97b88C6',
    stakingTokenAddress: '0xe0E3F3698ba35487e5285fDfd31a5B8d8F564D8b',
    contractAddress: {
      97: '0x0',
      56: '0x29a4f42d5793868181F55120F3b10DecD314493F',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://stos.finance/',
    harvest: true,
    tokenPerBlock: '0.004133598',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb
  },
]

export default pools
