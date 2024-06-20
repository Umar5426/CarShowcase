import Image from "next/image"

const Hero = () => {
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

            <CustomButton/>
        </div>
    </div>
  )
}

export default Hero