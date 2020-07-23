import React, { useState, useEffect } from 'react'
import MUIDataTable from 'mui-datatables'

import { useGlobalContext } from '../../contexts/globalContext'

const AdminTable = ({ selectedUser, setSelectedAssets }) => {
  const [rowsSelected, setRowsSelected] = useState([])
  const {
    db: {
      data: { users, assets, userAssets },
    },
  } = useGlobalContext()

  useEffect(() => {
    if (userAssets) {
      console.log('we have user assets')
      getUserAssets()
    }
    // eslint-disable-next-line
  }, [userAssets, selectedUser])

  useEffect(() => {
    // when rows selected are changed lets send this back
    // need to account for database starting at 1 rather than 0 index
    const selectedAssetIds = rowsSelected.map(row => row + 1)
    setSelectedAssets(selectedAssetIds)
    // eslint-disable-next-line
  }, [rowsSelected])

  const getUserAssets = () => {
    console.log({ users, selectedUser })
    const selectedUserID = users.find(user => user.username === selectedUser).id
    const selectedUserAssets = userAssets.filter(
      ua => ua.user_id === selectedUserID
    )
    const selectedUserAssetIDs = selectedUserAssets.map(
      asset => asset.asset_id - 1
    ) // - 1 as database increments from 1 rather than 0
    setRowsSelected(selectedUserAssetIDs)
    console.log(selectedUser, selectedUserAssets)
  }

  const handleRowSelectionChange = (rowsSelected, allRowsSelected) => {
    console.log('row selected', {
      action: rowsSelected,
      tableState: allRowsSelected,
    })
    const selectedRows = allRowsSelected.map(
      selectedRow => selectedRow.dataIndex
    )
    setRowsSelected(selectedRows)
  }

  const options = {
    filter: false,
    filterType: 'checkbox',
    rowsPerPage: 20,
    rowsPerPageOptions: [20, 50, 100],
    selectableRows: 'multiple',
    // @ts-ignore
    rowsSelected: rowsSelected,
    // @ts-ignore
    onRowSelectionChange: handleRowSelectionChange,
    onRowsDelete: () => false,
    // remove the bin icon
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => <></>,
  }

  return (
    <MUIDataTable
      title={`Assets available to ${selectedUser}`}
      data={assets}
      columns={Object.keys(assets[0])}
      // @ts-ignore
      options={options}
    />
  )
}

export default AdminTable
