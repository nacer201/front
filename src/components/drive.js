import React, { useState } from 'react';
import './Drive.css';
import BarSide from './BarSide';


const DriveInterface = () => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const folders = [
    { name: 'Folder 1' },
    { name: 'Folder 2' },
    { name: 'Folder 3' },
    // ... more folders
  ];

  const files = [
    { name: 'File 1', sharedBy: 'User A', shareDate: '2023-07-01' },
    { name: 'File 2', sharedBy: 'User B', shareDate: '2023-06-29' },
    { name: 'File 3', sharedBy: 'User A', shareDate: '2023-06-28' },
    // ... more files
  ];

  const handleSort = (column) => {
    if (column === sortColumn) {
      // Reverse the sort direction
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set the new sort column and default sort direction
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const renderFolders = () => {
    // Sort the folders based on the current sort column and direction
    const sortedFolders = folders.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });

    return sortedFolders.map((folder, index) => (
      <div key={index} className="folder">
        <i className="material-icons">folder</i>
        {folder.name}
      </div>
    ));
  };

  const renderFiles = () => {
    // Sort the files based on the current sort column and direction
    const sortedFiles = files.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });

    return sortedFiles.map((file, index) => (
      <tr key={index}>
        <td>{file.name}</td>
        <td>{file.sharedBy}</td>
        <td>{file.shareDate}</td>
      </tr>
    ));
  };

  return (
    <div className="drive-interface">
        <BarSide/>
      <div className="folders">
        <h3>Folders</h3>
        <div className="folder-list">{renderFolders()}</div>
      </div>
      <h3>File</h3>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('sharedBy')}>Shared By</th>
            <th onClick={() => handleSort('shareDate')}>Share Date</th>
          </tr>
        </thead>
        <tbody>{renderFiles()}</tbody>
      </table>
    </div>
  );
};

export default DriveInterface;
