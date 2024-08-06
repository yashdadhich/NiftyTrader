
const TestimonialCard = ({ quote, author, image }:any) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-white rounded-lg shadow-md border border-gray-200 mx-auto max-w-md md:max-w-4xl">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <img
          src={image}
          alt={author}
          className="rounded-full w-24 h-24 object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold text-gray-900">{author}</h3>
        <p className="text-gray-700 mt-2 text-sm">{quote}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
