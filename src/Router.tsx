import { Route, Routes } from 'react-router-dom'
import PetList from './pages/pet/List'
import Login from './pages/Login'
import { DefaultLayout } from './layout/DefaultLayout'
import UserForm from './pages/user/Form'
import UserUpdateForm from './pages/user/Update'
import PetForm from './pages/pet/Form'
import PetDetail from './pages/pet/Detail'
import PetUpdateForm from './pages/pet/Update'
import { EmailCheck } from './pages/passwordReset/EmailCheck'
import { PasswordReset } from './pages/passwordReset'
import { NewPassword } from './pages/passwordReset/NewPassword'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/password_reset" element={<PasswordReset />}></Route>
      <Route path="/email_check" element={<EmailCheck />} />
      <Route path="/new_password" element={<NewPassword />} />
      <Route path="/register" element={<UserForm />}></Route>

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PetList />} />

        <Route path="/update" element={<UserUpdateForm />} />

        <Route path="/pets" element={<PetList />}></Route>
        <Route path="/add_pet" element={<PetForm />} />
        <Route path="/detail" element={<PetDetail />} />
        <Route path="/update" element={<PetUpdateForm />} />
      </Route>
    </Routes>
  )
}
