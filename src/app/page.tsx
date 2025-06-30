"use client";
import BaseComponent from "@/components/BaseComponent";
import { ArrowUpRight, Location } from "@carbon/icons-react";
import { Carousel} from "flowbite-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import ElevatedButtonLink from "@/components/ElevatedButtonLink";

type Listing = {
  id: string;
  title: string;
  location: string;
  price: number;
  description: string;
  media: string[];
  createdAt: Date;
};

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  useEffect(() => {
    fetch("/data/listings.json")
      .then((res) => res.json())
      .then(setListings);
  }, []);
  // const filePath = path.join(process.cwd(), "public/data/listings.json");
  // const fileContent = fs.readFileSync(filePath, "utf-8");
  // const listings = JSON.parse(fileContent);
  return (
    <BaseComponent>
      <div
        className="flex w-[100vw] h-[100vh]"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(/images/skyscraper.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="m-auto text-center text-white">
          <p className="text-6xl">
            Find your perfect
            <br /> investment properties
          </p>
          <p className="mt-6 text-xl">
            Explore a selection of high-value properties tailored for
            <br />
            financial growth and stability.
          </p>
        </div>
      </div>
      <div className="w-full p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {listings.map((listing: Listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-lg shadow-md p-4 h-[60vh]"
          >
            <Carousel className="h-48 mb-4 overflow-hidden">
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
            <h2 className="text-xl font-bold mb-2">{listing.title}</h2>
            <p className="text-sm text-gray-600 flex">
              <Location className="me-3" />
              {listing.location}
            </p>
            <p className="mb-2">₹{listing.price.toLocaleString()}</p>
            <p className="mb-4 text-sm">{listing.description}</p>
            <ElevatedButtonLink
              href={`/listings/${listing.id}`}
            >
              View Details
              <ArrowUpRight size={20} className="ms-2"/>
            </ElevatedButtonLink>
          </div>
        ))}
      </div>
    </BaseComponent>
  );
}
