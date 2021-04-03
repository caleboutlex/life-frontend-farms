import React, { useState, useContext, useCallback } from 'react'
import orderBy from 'lodash/orderBy'
import nfts from 'config/constants/legendary'
import NftCard from './NftCard'
import NftGrid from './NftGrid'
import { NftProviderContext } from '../contexts/NftProvider'

const NftList = () => {
  const { myMints } = useContext(NftProviderContext)

  const filteredNft = []

  nfts.forEach(function (nft, key) {
    const { nftId, name, previewImage, originalImage, description } = nft
    const MINTS = myMints[nftId] || 0
    console.log(nftId, '?myMints', myMints, 'MINTS', MINTS)

    if (MINTS > 0) {
      filteredNft.push(nft)
    }
  })

  return (
    <NftGrid>
      {orderBy(filteredNft, 'sortOrder').map((nft) => (
        <div key={nft.name}>
          <NftCard nft={nft} />
        </div>
      ))}
    </NftGrid>
  )
}

export default NftList
