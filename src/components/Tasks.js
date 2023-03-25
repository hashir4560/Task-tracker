import Task from'./Task' 

//     const [tasks,setTasks]=useState([
//         {
//             id:1,
//             text:'Doctors Appointment',
//             day: '5TH feb AT 2:30PM',
//             remainder:true,
    
//         },
//         {
//             id:2,
//             text:'Meeting at School',
//             day:'6TH feb AT 1:30PM',
//             remainder:true,
    
//         },
//         {
//             id:3,
//             text:'Food Shopping',
//             day:'6TH feb AT 2:30PM',
//             remainder:false,
    
//         }
//     ])
const Tasks = ({tasks,onDelete,onToggle}) => {
  return (

    <>
       {tasks.map((task)=>(
         <Task key={task.id} task={task} 
         onDelete={onDelete}
         onToggle={onToggle}
         />

       ))}
     
    </>
  )
     }

export default Tasks
