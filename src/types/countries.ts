export type CountryProps = {
    capital: string,
    name: string,
    code: string,
}

export type CountriesListProps = {
    inputValue?: string
    loading?: boolean
    countries?: CountryProps[]
}