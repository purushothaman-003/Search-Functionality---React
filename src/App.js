import { Command } from 'cmdk'
import "./App.css"

const CommandMenu = () => {
  return(
    <Command className='command'>

      <Command.Input className='input' placeholder='search here...' />

        <Command.List>

          <Command.Empty>No results found</Command.Empty>

        <Command.Group>

          <Command.Item className='item'>BMW</Command.Item>
          <Command.Item className='item'>Benz</Command.Item>
          <Command.Item className='item'>Audi</Command.Item>
          <Command.Item className='item'>Tata</Command.Item>
          <Command.Item className='item'>Jaguar</Command.Item>
          <Command.Item className='item'>KIA</Command.Item>
          <Command.Item className='item'>Swift</Command.Item>

        </Command.Group>

        </Command.List>

    </Command>
  )
}

export default CommandMenu