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
    console.log('getUserAssets', { users, selectedUser })
    const selectedUserAssets = userAssets.filter(
      ua => ua.user_id === selectedUser.id
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
    download: false,
    print: false,
    sortOrder: {
      name: 'id',
      direction: 'asc',
    },
    sort: true,
    searchOpen: true,
    fixedHeader: true,
    responsive: 'standard',
    filter: false,
    filterType: 'checkbox',
    rowsPerPage: 30,
    rowsPerPageOptions: [30, 60, 100],
    selectableRows: 'multiple',
    // @ts-ignore
    rowsSelected: rowsSelected,
    // @ts-ignore
    onRowSelectionChange: handleRowSelectionChange,
    onRowsDelete: () => false,
    // remove the bin icon
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => <></>,
    // rowsSelected: setOuRowsSelected(),
    customSort: (data, colIndex, order) => {
      console.log('trigger customSort')

      return data.sort((a, b) => {
        var dir = order === 'desc' ? 1 : -1
        var isASelected = rowsSelected.find(elem => {
          return rowsSelected.indexOf(a.index) !== -1
        })
        var isBSelected = rowsSelected.find(elem => {
          return rowsSelected.indexOf(b.index) !== -1
        })
        if (isASelected && !isBSelected) return 1 * dir
        if (!isASelected && isBSelected) return -1 * dir
        return (a.data[colIndex] > b.data[colIndex] ? -1 : 1) * dir
      })
    },
  }

  return (
    <MUIDataTable
      title={`Assets available to ${selectedUser.email}`}
      data={assets}
      columns={Object.keys(assets[0])}
      // @ts-ignore
      options={options}
    />
  )
}

export default AdminTable
