import React, { useEffect } from 'react'
import MUIDataTable from 'mui-datatables'

import {
  userGlobalContext,
  useGlobalContext,
} from '../../contexts/globalContext'

const AdminTable = () => {
  const {
    db: {
      data: { users },
    },
  } = useGlobalContext()

  const columns = ['id', 'username']

  const options = {
    filterType: 'checkbox',
  }
  const selectedUser = 'test1@test.com'

  return (
    <MUIDataTable
      title={`Assets available to ${selectedUser}`}
      data={users}
      columns={columns}
      // @ts-ignore
      options={options}
    />
  )
}

export default AdminTable
