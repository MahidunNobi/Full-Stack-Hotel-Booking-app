import "./mail.css"

const Mail = () => {
  return (
    <div className="bg-orange-800 mt-6">
        <div className="container mx-auto py-6 text-center text-white">
            <h2 className="text-2xl">
                Save time, save money!
            </h2>
            <p className="">Sign up and we'll send the best deals to you</p>
            <div className="inputContainer flex items-center justify-center space-x-1 mt-3">
                <input 
                type="text" 
                name="email" 
                placeholder="Your Email Address" 
                className="md:text-xl md:w-[300px] w-[250px] px-4 py-2 rounded-md shadow-lg"
                />
                <button className="bg-orange-500 text-white px-4 py-2 md:text-xl rounded-e-lg"> Subscribe</button>
            </div>
        </div>        
    </div>
  )
}

export default Mail