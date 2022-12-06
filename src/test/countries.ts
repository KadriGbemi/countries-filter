import { GET_ALL_COUNTRIES } from "../api"

export const allCountries: any = [
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

export const filteredCountries: any = [
    {
        capital: "Kabul",
        name: "Afghanistan",
        code: "AF"
    },
]