import MenuIcon from "@mui/icons-material/Menu";
import Search from "./search/search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";


const Section2 = () => {
  return (
    <section  className=" py-3 border-b-[1px] border-[#ffffff1a]">
    <ul className="flex justify-between items-center ">
      <li className="border rounded-md p-1 border-[#ffffff1a] md:hidden">
        <MenuIcon />
      </li>

      <li>Logo</li>

      <li className="hidden md:block w-[400px] lg:w-[500px] xl:w-[700px]">
        <Search />
      </li>

       <li className="hidden md:block">{/* make logo center => dlelete classes */}
        <ul
          className=" md:flex gap-x-3  [&>*]:p-[8px] 
      [&>*]:rounded-full text-orange-500 [&>*]:cursor-pointer [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:gap-3  "
        >
          <li className="hover:brightness-150 hover:border-slate-500">
            <div className="border border-[#ffffff1a] rounded-full p-2">
              <PersonIcon />
            </div>
            <span className="hidden 2xl:block text-white">لورم</span>
          </li>
          <li className="hover:brightness-150 hover:border-slate-500">
            <div className="border border-[#ffffff1a] rounded-full p-2">
              <NotificationsIcon />
            </div>

            <span className="hidden 2xl:block text-white">لورم</span>
          </li>
          <li className="hover:brightness-150 hover:border-slate-500">
            <div className="border border-[#ffffff1a] rounded-full p-2">
              <LocalPostOfficeIcon />
            </div>

            <span className="hidden 2xl:block text-white">لورم</span>
          </li>
          <li className="hover:brightness-150 hover:border-slate-500">
            <div className="border border-[#ffffff1a] rounded-full p-2">
              <ShoppingBasketIcon />
            </div>

            <span className="hidden 2xl:block text-white">لورم</span>
          </li>
        </ul>
      </li>
    </ul>
  </section>

  )
}

export default Section2