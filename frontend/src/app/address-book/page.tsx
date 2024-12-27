"use client";
import { useEffect, useState } from "react";
import logoImage from "public/assets/logo.png";
import addressBookResources from "public/address-book.json";
import { useDebounce } from "../components/internal/hooks/useDebounce";
import Image from "next/image";
import AddressTable from "./address-table";
import Search from "public/svg/Search";
import Link from "next/link";
import useTheme from "../components/internal/hooks/useTheme";
import ThemeSwitch from "../components/internal/util/ThemeSwitch";
import { searchResources } from "../components/internal/helpers";

export interface AddressBookResource {
  id: string;
  name: string;
  description: string;
  address: string;
}

export default function Page() {
  const { theme, changeTheme } = useTheme();
  const [addresses] = useState<AddressBookResource[]>(addressBookResources);
  const [filteredAddresses, setFilteredAddresses] = useState<
    AddressBookResource[]
  >([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const loadAddresses = async () => {
      const searchResult = debouncedSearch.trim()
        ? await searchResources({
            resources: addresses,
            search: debouncedSearch,
          })
        : [];
      setFilteredAddresses(searchResult);
    };
    loadAddresses();
  }, [debouncedSearch]);

  return (
    <div className="relative w-full">
      <div className="w-full bg-[url('/assets/header-bg.svg')] bg-cover bg-[0px] bg-no-repeat px-6 py-8 md:px-24 md:py-10">
        <div className="mx-auto max-w-[--header-max-w]">
          <div className="relative mb-[87px] flex flex-wrap items-center justify-between md:mb-[95px]">
            <div className="flex items-center gap-x-[3.76px] md:gap-x-[9px]">
              <Link href={"/"}>
                <Image
                  src={logoImage}
                  alt="logo"
                  className="h-[20.5px] w-[153px] md:h-[48px] md:w-[360px]"
                />
              </Link>
              <h4 className="border-l-[1.25px] border-[#141925] px-1 py-[2px] text-xs uppercase italic leading-[14px] text-accent-secondary md:border-l-[1.75px] md:px-2 md:py-1 md:text-[24px] md:leading-7">
                address book
              </h4>
            </div>
            <ThemeSwitch className="grid" action={changeTheme} theme={theme} />
          </div>
          <div className="relative mx-auto text-[--headings] md:w-fit">
            <input
              type="text"
              className="w-full rounded-[10px] bg-[--link-card] px-4 py-3 pl-10 outline-[--borders] md:w-[800px] md:rounded-[16px] md:px-6 md:py-5 md:pl-[60px] md:text-md"
              placeholder="Search keywords, contract addresses"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-md md:text-l">
              <Search />
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto h-full max-w-[--header-max-w] px-4 pb-6 pt-3 text-[--headings] md:px-9 md:pb-[74px] md:pt-4">
        <AddressTable
          addresses={
            filteredAddresses.length > 0 && search.length > 0
              ? filteredAddresses
              : addresses
          }
        />
      </div>
    </div>
  );
}