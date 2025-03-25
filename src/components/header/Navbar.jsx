
const Navbar = () => {
  return (
    <div>
        <div className='bg-blue-400 w-full h-16 fixed flex justify-around'>
            <div className='flex gap-1.5 justify-center text-lg font-bold '>
                <button >Chats</button>
                <button>Calls</button>
                <button>Status</button>

            </div>
            <div className='flex items-center'>
                <input type="text"
                placeholder='search....'
                className='rounded-2xl bg-amber-300 text-sm h-5 p-2 '/>
            </div>
        </div>  
    </div>
  )
}

export default Navbar