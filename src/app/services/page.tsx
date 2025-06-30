"use client";

import BaseComponent from "@/components/BaseComponent";
import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckmarkOutline } from "@carbon/icons-react";
import ElevatedButtonLink from "@/components/ElevatedButtonLink";

export default function page() {
  return (
    <BaseComponent>
      <div className="mt-20 flex flex-col">
        <h1 className="text-3xl mx-auto">Our Services</h1>
        <div className="mt-20 w-full p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-md p-4">
            <Image
              width="4316"
              height="2514"
              className="w-full rounded-lg mb-4"
              src="/images/skyscraper.jpg"
              alt=""
            ></Image>
            <h5 className="text-xl font-bold mb-3">Property for Sale</h5>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Verified Listings
              </li>
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Prime Locations
              </li>
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Apartments, Plots, Villas
              </li>
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Transparent Deals
              </li>
            </ul>
            <ElevatedButtonLink className="my-4">
              View Listing
              <ArrowUpRight size={20} className="ms-2" />
            </ElevatedButtonLink>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <Image
              width="4316"
              height="2514"
              className="w-full rounded-lg mb-4"
              src="/images/building_material.jpg"
              alt=""
            ></Image>
            <h5 className="text-xl font-bold mb-3">Building Material</h5>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Verified Listings
              </li>
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Prime Locations
              </li>
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Apartments, Plots, Villas
              </li>
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Transparent Deals
              </li>
            </ul>
            <ElevatedButtonLink className="my-4">
              View Listing
              <ArrowUpRight size={20} className="ms-2" />
            </ElevatedButtonLink>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <Image
              width="4316"
              height="2514"
              className="w-full rounded-lg mb-4"
              src="/images/money.jpg"
              alt=""
            ></Image>
            <h5 className="text-xl font-bold mb-3">Financial Services</h5>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Verified Listings
              </li>
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Prime Locations
              </li>
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Apartments, Plots, Villas
              </li>
              <li className="flex">
                <CheckmarkOutline className="me-2 my-auto" />
                Transparent Deals
              </li>
            </ul>
            <ElevatedButtonLink className="my-4">
              View Listing
              <ArrowUpRight size={20} className="ms-2" />
            </ElevatedButtonLink>
          </div>
        </div>
      </div>
    </BaseComponent>
  );
}
