import React from 'react'
import {GridComponent,ColumnsDirective,ColumnDirective,Page,Inject,Search,Toolbar} from '@syncfusion/ej2-react-grids';
import { employeesData,contextMenuItems,employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
const Employees = () => {
  const {currentColor}=useStateContext();
  return (
    <div className='m-2 nd:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees"/>
      <GridComponent  dataSource={employeesData} allowPaging toolbar={['Search']} width='auto'>
        <ColumnsDirective>
        {employeesGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item}/>
        ))}</ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees