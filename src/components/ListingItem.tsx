
const ListingItem = ({
  imageSrc = "",
  title = "Product Title",
  label = "Label",
  price = "$99",
}) => {
  return (
    <div className="p-0 m-0">
      <div className='flex flex-col gap-5 items-baseline justify-baseline'>
        <div className='h-90 w-75 bg-offWhite-200'>
          {imageSrc && <img src={imageSrc} alt={title} className='w-full h-full object-cover' />}
        </div>
        <div className='text-neutral-900'>{title}</div>
        <div className='flex gap-6 items-center'>
          <div className='border border-offWhite-300 px-4 py-1 rounded-2xl'>{label}</div>
          <div className='text-neutral-600'>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
