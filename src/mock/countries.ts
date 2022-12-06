import { GET_ALL_COUNTRIES } from "../api"
import { CountryProps } from "../types/countries"

export const allCountries = [
    {
        request: {
            query: GET_ALL_COUNTRIES,
        },
        result: {
            data: {
                countries: [
                    {
                        capital: "Andorra la Vella",
                        name: "Andorra",
                        code: "AD",
                    },
                    {
                        capital: "Kabul",
                        name: "Afghanistan",
                        code: "AF"
                    },
                ],
            },
        },
    },
]

export const filteredCountries: CountryProps[] = [
    {
        capital: "Kabul",
        name: "Afghanistan",
        code: "AF"
    },
]