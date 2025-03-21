import mockImage from "../assets/placeholderProduct.png";

const ListingItem = ({
  imageSrc = "",
  title = "Product Title",
  label = "Label",
  price = "$99",
  url = "",
}) => {
  return (
    <div className="p-0 m-0">
      <div className='flex flex-col gap-5 items-baseline justify-baseline'>
        <div className={`h-75 w-65 bg-offWhite-200 flex items-center justify-center`}>
          <img src={imageSrc? imageSrc : mockImage} alt={title} className='max-w-55 object-contain'/>
        </div>
      <div className='text-neutral-900 font-[500] text-md'><a href={"/shop/" + url}>{title}</a></div>
      <div className='flex gap-6 items-center'>
        <div className='border border-offWhite-300 px-4 py-1 rounded-2xl'>{label}</div>
        <div className='text-neutral-600'>{price}</div>
      </div>
    </div>
  </div>
);
};

export default ListingItem;
