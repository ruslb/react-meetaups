import Todo from "./components/Todo";

function App()  { 
return ( 
          <div>
           <h1>My Todos</h1>
			  <Todo text='Start page' />
			  <Todo text='Dashboard' />
			  <Todo text='Second Dashboard' />
       </div>
);
}

export default App;
