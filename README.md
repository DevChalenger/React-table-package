# React Data Table Component

[![npm version](https://badge.fury.io/js/react-data-list-table-component.svg)](https://badge.fury.io/js/react-data-list-table-component)
[![Downloads](https://img.shields.io/npm/dm/react-data-list-table-component.svg)](https://npmjs.org/package/react-data-list-table-component)

A React table component with search, pagination and select entries

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install react-data-list-table-component
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add react-data-list-table-component
```

## How to use

```js
import React from "react";
import { Table } from "react-data-list-table-component";

const render = () => {
  const data = [
    {
      firstName: "Tony",
      lastName: "Stark",
      dateOfBirth: "05/29/1970",
      city: "New York",
      countries: "United States of America",
    },
    {
      firstName: "Steve",
      lastName: "Rogers",
      dateOfBirth: "07/04/1920",
      city: "New York",
      countries: "United States of America",
    },
    {
      firstName: "Robert Bruce",
      lastName: "Banner",
      dateOfBirth: "12/18/1969",
      city: "New York",
      countries: "United States of America",
    },
  ];

  const title = Object.keys(data[0]);

  return (
    <Table
      dataTable={data} // Must be a Array of Objects
      dataTitle={title} // Must the keys of the first element of the Array
      tableTitle={"table-caption"} // Must be a string for the title of the Table
      rowsPerTable={10} // Must be a number of the entries
      range={3} // Must be a number of the range of the pagination
      selectEntries // Not requiered but is boolean
    />
  );
};

export default render;
```

### Component props

- ##### dataTable : [Array of Object]

  This prop is used for all data of the table

- ##### dataTitle : [Array of String]
  This prop is used for the key and the the header of the table ( !Warning : the key must be the same of the key of the data defined in dataTable )
- ##### tableTitle : [String]
  This prop is used for define the title of the (is not required)
- ##### rowsPerTable: [Number]
  This prop is used to define the rows for each page of the pagination
- ##### range: [Number]
  This prop is used to define the number of each sibling pagination we can see
- ##### selectEntries : [Boolean]
  This prop is used to declare if we want to add a select list for the entries of each pagination

## Dependencies

- [@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-scripts](https://www.npmjs.com/package/react-scripts)
- [@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill)
