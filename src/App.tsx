import { Row, Col } from "antd"
import { useQuery } from "@apollo/client"
import debounce from "lodash/debounce"

import { GET_COUNTRIES_BY_INPUT } from "./api"

import TextInputField from "./components/input"
import CountriesList from "./components/countries"
import { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState()

  const { data, refetch, ...rest } = useQuery(GET_COUNTRIES_BY_INPUT, {
    notifyOnNetworkStatusChange: true,
  })

  const handleInputChange = debounce((event) => {
    const value = event?.target?.value
    setInputValue(value)

    if (value) {
      refetch({ code: value.toUpperCase() })
    }
  }, 1000)

  return (
    <div className="container">
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <TextInputField handleInputChange={handleInputChange} />
        </Col>
        <Col span={24}>
          <CountriesList
            {...rest}
            countries={data?.countries}
            inputValue={inputValue}
          />
        </Col>
      </Row>
    </div>
  )
}

export default App
