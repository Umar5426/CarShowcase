"use client";

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {

    const handleScroll = () => {};
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero_title">
                Find, Book, or Rent a Car - Quickly and Easily
            </h1>

            <p className="hero__subtitle">
                Streamline your car rental expirence with our efforless
                booking process.
            </p>

            <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue
            text-white rounded-full mt-16"
            handleClick={handleScroll}
            />

        </div>

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero"
                className="object-container"
                layout="fill" />
            </div>
            
             <div className="hero__image-overlay" />

        </div>
    </div>
  )
}

export default Hero