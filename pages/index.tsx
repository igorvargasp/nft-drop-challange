import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { sanityClient, urlFor } from '../sanity'
import { Collection } from '../typings'

interface Props {
  collections: Collection[]
}

const Home = ({ collections }: Props) => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col py-20 px-10 2xl:px-0">
      <Head>
        <title>NFT DROP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between">
        <Link href={'/'}>
          <h1 className="mb-10 text-4xl font-extrabold">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              PAPAFAM
            </span>{' '}
            NTF Market Place
          </h1>
        </Link>
        <main className="shadow-rose-40/20 bg-slate-100 p-10 shadow-xl">
          <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {collections.map((collection) => (
              <Link href={`/nft/${collection.slug.current}`}>
                <div className="flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105">
                  <img
                    src={urlFor(collection.mainImage).url()}
                    alt=""
                    className="h-96 w-60 rounded-2xl object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-3xl">{collection.title}</h2>
                    <p className="mt-2 text-sm text-gray-400">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </header>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const query = ''

  const collection = await sanityClient.fetch(query)

  return {
    props: collection,
  }
}
