import { Input } from "antd"

const TextInputField = ({
  handleInputChange,
}: {
  handleInputChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}) => <Input placeholder="Enter country code" onChange={handleInputChange} />

export default TextInputField
