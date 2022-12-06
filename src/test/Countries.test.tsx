import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"

import CountriesList from "../components/countries"
import { allCountries, filteredCountries } from "./countries"

describe("Countries component", () => {
  beforeEach(() => {
    return Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it("renders when data is empty", async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <CountriesList />
      </MockedProvider>
    )

    const nameTitle = await screen.findAllByText("Name")
    const codeTitle = await screen.findAllByText("Code")
    const noDataTitle = await screen.findAllByText("No data")

    expect(nameTitle.length).toBe(1)
    expect(codeTitle.length).toBe(1)
    expect(noDataTitle.length).toBe(1)
  })

  it("renders when data is filtered by input value", async () => {
    const component = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <CountriesList countries={filteredCountries} inputValue="AF" />
      </MockedProvider>
    )

    const nameTitle = await component.findAllByText("Name")
    const codeTitle = await component.findAllByText("Code")
    const textValue = await component.findAllByText("AF")

    expect(nameTitle.length).toBe(1)
    expect(codeTitle.length).toBe(1)
    expect(textValue.length).toBe(1)
  })

  it("renders all given countries data", async () => {
    const component = render(
      <MockedProvider mocks={allCountries} addTypename={false}>
        <CountriesList />
      </MockedProvider>
    )

    const nameTitle = await component.findAllByText("Name")
    const codeTitle = await component.findAllByText("Code")
    const findAllData = await component.findAllByText(/(AF|AD)/)

    expect(nameTitle.length).toBe(1)
    expect(codeTitle.length).toBe(1)
    expect(findAllData.length).toBe(2)
  })
})
