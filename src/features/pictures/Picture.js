
const Picture = ({ pictures }) => {
  return (
    <section className=' h-full sm:h-[2000px]  md:h-[1000px]  overflow-hidden'>
      <section className='flex flex-col flex-wrap  item-center gap-2 px-2 py-2 h-full sm:h-[2500px]  md:h-[1500px]  overflow-hidden'>
        {pictures.map((itm) => (
          <img
            className='object-fill w-10/12 sm:w-1/2 md:w-1/4 rounded'
            src={itm.url}
            key={itm.id}
          />
        ))}
      </section>
    </section>
  )
}
export default Picture
