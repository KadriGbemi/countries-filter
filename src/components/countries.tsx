import { Table } from "antd"
import { useQuery } from "@apollo/client"
import GET_COUNTRIES from "../api"

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Code",
    dataIndex: "code",
  },
]

const CountriesList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES)

  return (
    <Table
      rowKey={(record) => record?.code}
      dataSource={data?.countries}
      columns={columns}
      loading={loading}
    />
  )
}

export default CountriesList
