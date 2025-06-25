"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import BaseComponent from "@/components/BaseComponent";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Location } from "@carbon/icons-react";

type Listing = {
  id: string;
  title: string;
  price: number;
  location: string;
  description: string;
  media: string[];
};

export default function ListingDetailPage() {
  const { id } = useParams();
  const [listing, setListing] = useState<Listing | null>(null);
  
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/listings.json");
      const listings = await res.json();
      const match = listings.find((l: Listing) => l.id === id);
      if (!match) {
        router.replace("/404"); // fallback if ID not found
      } else {
        setListing(match);
      }
    };
    fetchData();
  }, [id]);

  if (!listing) return <p className="p-6">Loading...</p>;

  return (
    <BaseComponent>
      <div className="bg-white rounded-lg shadow-md max-w-5xl p-6 mx-6 flex flex-col w-full mt-20 min-h-screen">
        <div className="w-full">
          <Carousel className="mb-4 block w-full h-full">
            {listing.media.length > 0 &&
              listing.media.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt="image"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="relative"
                />
              ))}
          </Carousel>
        </div>
        <h1 className="text-4xl font-bold mb-2">{listing.title}</h1>
        <p className="text-2xl text-gray-500 mb-4">₹{listing.price}</p>
        <p className="text-2xl text-gray-600 flex mb-4">
          <Location className="me-3" size={32} />
          {listing.location}
        </p>
        <p className="text-gray-700">{listing.description}</p>
      </div>
    </BaseComponent>
  );
}
