import SearchIcon from "components/Icons/Search";

export interface ISearchInputProps {
    responsiveClass: string
}

export default function SearchInput({responsiveClass} : ISearchInputProps) {
  return (
    <div className={`${responsiveClass}`}>
      <form>
        <div className="relative mt-0.5 lg:w-96">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            name="email"
            className="bg-zinc-100 border-none text-gray-900 sm:text-sm rounded-full block w-full pl-10 p-2.5 focus:ring-gray-500"
            placeholder="Search"
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
}
