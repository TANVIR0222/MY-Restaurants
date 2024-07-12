
const SectionTitel = ({heading , subHeading}) => {
    return (
        <div className="md:w-3/12 text-center mx-auto my-8 sm:w-1/2 ">
            <p className="text-yellow-600 text-xl mb-2">--{subHeading}--</p>
            <h2 className=" uppercase border-t-2 border-b-2 text-4xl py-3 border-black">{heading}</h2>
        </div>
    );
};

export default SectionTitel;