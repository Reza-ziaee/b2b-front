import CategoriesBtn from "./categoriesBtn";

const Section3 = () => {
  return (
    <section className="hidden md:flex items-end gap-x-5 pt-3 h-13 ">
      <CategoriesBtn />

      <div className="flex h-full  basis-2/3 px-3 ">
        <ul className="h-10 flex gap-7 lg:gap-10 xl:gap-16  [&>*]:cursor-pointer ">
          <li className="flex flex-col gap-y-5 relative dropdown h-full">
            <div className="h-full">
                name
            </div>
            <div className=" text-black hidden dropdown-toggle">
              <ul className="[&>*]:px-3 [&>*]:py-2 pt-3 [&>*]:w-64 z-10 bg-white rounded-b-md overflow-hidden">
                <li className="hover:bg-slate-200 hover:text-orange-400 ">sadasd</li>
                <li className="hover:bg-slate-200 hover:text-orange-400">asdasd</li>
                <li className="hover:bg-slate-200 hover:text-orange-400">asdasd</li>
                <li className="hover:bg-slate-200 hover:text-orange-400">asdasd</li>
                <li className="hover:bg-slate-200 hover:text-orange-400">asdasd</li>
                <li className="hover:bg-slate-200 hover:text-orange-400">asdasd</li>
      
              </ul>
            </div>
          </li>
          <li>samsung</li>
          <li>android</li>
          <li>melika</li>
          <li>shahbar</li>
          <li>mahvash</li>
          <li>parivash</li>
        </ul>
      </div>
    </section>
  );
};

export default Section3;
