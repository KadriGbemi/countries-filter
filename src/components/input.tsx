import { Input } from "antd"

const TextInputField = ({ handleInputChange }: any) => (
  <Input placeholder="Enter country code" onChange={handleInputChange} />
)

export default TextInputField
