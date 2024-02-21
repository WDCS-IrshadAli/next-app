import UserForm from "../(components)/UserForm"

const CreateUser = () => {
  return (
    <div>
        <h1>CreateUser (Only Admins allowed)</h1>
        <div>
            <UserForm />
        </div>
    </div>
  )
}

export default CreateUser