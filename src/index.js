import React from 'react'
import ReactDOM from 'react-dom'
import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'


const App = () => {

    const header = (
        <div className='card flex justify-content-center align-content-center p-3 surface-400 border-round'>
            <div className='border-900 w-auto m-5'><p className='text-xl'>7</p></div>
            <div className='border-900 w-auto m-5'><p className='text-xl'>x</p></div>
            <div className='border-900 w-auto m-5'><p className='text-xl'>8</p></div>
        </div>
    )

    const footer = (
        <div className='flex justify-content-evenly m-2'>
            <Button className='bg-blue-400 border-transparent' label='Iniciar Jogo' icon='pi pi-check' />
            <Button className='bg-red-400 border-transparent' label='Encerrar Jogo' icon='pi pi-times' />
        </div>
    )

  return (
    <div className='flex justify-content-center'>
        <Card className='p-2 border-round w-6' header={header} footer={footer} />
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)