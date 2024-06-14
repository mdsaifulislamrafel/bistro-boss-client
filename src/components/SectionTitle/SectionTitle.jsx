const SectionTitle = ({ subheading, heading }) => {
    return (
        <div className="md:w-4/12 my-8 mx-auto text-center">
            <p className="text-yellow-600 text-xl mb-2">---{subheading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;