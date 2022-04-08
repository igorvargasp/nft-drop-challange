interface Image {
  asset: {
    url: string
  }
}

export interface Creator {
  _id: string
  name: string
  address: string
  slug: {
    current: string
  }
  image: image
  bio: string
}

export interface Collection {
  _id: string
  title: string
  description: string
  nftCollectionName: string
  address: string
  slug: {
    current: string
  }
  creator: Creator
  mainImage: image
  previewImage: image
}
