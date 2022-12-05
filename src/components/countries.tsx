import { useQuery } from "@apollo/client"

import { Table } from "antd"

import { GET_ALL_COUNTRIES } from "../api"

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

const CountriesList = ({ inputValue, loading, countries }: any) => {
  const { data, loading: isLoading } = useQuery(GET_ALL_COUNTRIES, {
    notifyOnNetworkStatusChange: true,
    skip: inputValue,
  })

  return (
    <Table
      rowKey={(record) => record?.code}
      dataSource={inputValue ? countries : data?.countries}
      columns={columns}
      loading={loading || isLoading}
    />
  )
}

export default CountriesList
