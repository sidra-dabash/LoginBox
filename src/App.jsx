import { motion } from "framer-motion"
export default function App() {
  return (
    <div className="bg-green-200 w-screen h-screen flex flex-col justify-center items-center overflow-hidden relative">
       <motion.section
       initial={{x:-100,y:-100 }} 
       animate={{x:0,y:0 ,rotate:45}}
       transition={{duration:2}}

       className="absolute -top-20 -left-20  w-[320px] h-[320px] bg-[#c1e3d6] opacity-50 rotate-[45deg] rounded-[40px]"></motion.section>
       
      <div className="">
      <motion.form
      initial={{y:-200,opacity:0 }} 
      animate={{y:0 ,opacity:1}}
      transition={{duration:3}}
      action="" className="w-[455px] h-[455px] bg-[#f6fbf9] rounded-[32px] text-center flex flex-col">
        <header className="m-2">
        <h1 className=" m-2 p-2 text-[36px] font-bold">Create An Account</h1>
        <p className="w-[308px] ml-[60px] ">Create an account to enjoy all the services without any ads for free!</p>
        </header>
        <div className=" p-3">
        <input className="p-3 w-[375px] h-[55px] border rounded-[10px] pl-6" type="email"  placeholder="Email Address"/>
        </div>
        <div className=" p-3 ">
        <input className="p-3  w-[375px] h-[55px] border rounded-[10px] pl-6" type="text" placeholder="Password" />
        </div>
        <div>
          <button className="w-[255px] h-[59px] bg-green-200 p-3 my-6 mx-4 rounded-[15px]">Create Account</button>
        </div>
        <p>Already Have An Account?
        <a href="#">Sign In</a>
        </p>
        </motion.form>
      </div>
      <motion.section
       initial={{x:200,y:200 }} 
       animate={{x:0,y:0 ,rotate:45}}
       transition={{duration:2}}
       className="absolute -bottom-0 -right-20  w-[320px] h-[320px] bg-[#c1e3d6] opacity-50 rotate-[45deg] rounded-[40px]"></motion.section>
      </div>
  )
}