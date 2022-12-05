import { Row, Col } from "antd"
import TextInputField from "./components/input"
import CountriesList from "./components/countries"

function App() {
  return (
    <div className="container">
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <TextInputField />
        </Col>
        <Col span={24}>
          <CountriesList />
        </Col>
      </Row>
    </div>
  )
}

export default App
