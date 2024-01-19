
interface User {
    id: number;
    name: string;
    email: string;
}

const UserPage = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const users: User[] = await res.json();
  return (
    <>
      <h1 className="">user</h1>
      <table className="table table-border ">
        <td>Name</td>
        <td>Email</td>

        {users.map(user => 
        <tr key={user.id}>
         <td> {user.name}</td>
         <td> {user.email}</td></tr>)}
        
      </table>
    </>
  )
}

export default UserPage