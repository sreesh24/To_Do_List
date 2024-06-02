import Button from './Button'

function Header({onAdd, showAdd}) {

    function onClick(){
        console.log('Click')
    }

  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button 
            color = {showAdd ? 'red' : 'green'}
            text = {showAdd ? 'Close' : 'Add'}
            onClick = {onAdd}
        />
    </header>
  )
}

export default Header