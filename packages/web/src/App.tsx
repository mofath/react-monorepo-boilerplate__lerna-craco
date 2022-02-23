import { Button, IconButton } from '@my-workspace/common';
   import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  return (  
    <div className='App'>
      <Button textColor='red'>Hello</Button>
      <IconButton icon={DeleteIcon} />
    </div>
  );
};

export default App;