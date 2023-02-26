
const Picture = ({ pictures, description }) => {
  return (
    <div className='sm:h-[160rem] md:h-[80rem] overflow-hidden '>
      <div className='flex flex-col flex-wrap  items-center gap-2 px-2 py-1 h-full sm:h-[300rem]  md:h-[200rem]  '>
        {pictures.map((itm) => (
          <img
            className='object-fill w-10/12 sm:w-1/2 md:w-1/4 rounded'
            src={itm.url}
            key={itm.id}
            alt={`${description} - ${itm.id}`}
          />
        ))}
      </div>
    </div>
  )
}
export default Picture
