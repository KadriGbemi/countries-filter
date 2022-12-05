import { Table } from "antd"

const dataSource = [
  {
    key: "1",
    name: "Mike",
    code: 32,
  },
  {
    key: "2",
    name: "John",
    code: 42,
  },
]

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
]

const CountriesList = () => <Table dataSource={dataSource} columns={columns} />

export default CountriesList
