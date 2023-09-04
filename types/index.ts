import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title : string,
    containerStyles? : string
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit",
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean
}

// ? make props optional 

export interface OptionProps {
    title : string,
    value : string,
}
export interface CustomFilterProps {
    title : string,
    option : OptionProps[],
}

export interface SearchManufracturerProps {
    manufacturer : string,
    setManufacturer : React.Dispatch<React.SetStateAction<string>>,
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }

  export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}