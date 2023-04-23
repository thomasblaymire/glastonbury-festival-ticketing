import { useState, ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { AiFillDelete } from 'react-icons/ai'

type Friend = {
  firstname: string
  lastname: string
  code: string
}

const verifyFriendCode = async (code: string): Promise<Friend | null> => {
  // const response = await fetch(`/api/verifyFriendCode?code=${code}`);
  // const data = await response.json();
  // return data;
  return { firstname: 'John', lastname: 'Doe', code: 'GLASTO-12345678' }
}

interface TicketsFormProps {
  formData: RegistrationFormData['tickets']
  handleChange: any
  handleNext: () => void
  handlePrevious: () => void
}

export const TicketsForm = ({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}: TicketsFormProps) => {
  const { register, handleSubmit, control, setValue, getValues } =
    useForm<TicketsFormData>({
      defaultValues: formData,
    })
  const [friends, setFriends] = useState<Friend[]>([])

  const addFriend = async () => {
    const friendCode = getValues('friendCode')

    if (friends.length >= 5) {
      alert('Maximum 5 friends allowed')
      return
    }

    const friendData = await verifyFriendCode(friendCode)
    if (friendData) {
      setFriends([...friends, friendData])
      setValue('friendCode', '')
    } else {
      alert('Invalid friend code')
    }
  }

  const deleteFriend = (code: string) => {
    setFriends(friends.filter((friend) => friend.code !== code))
  }

  return (
    <div>
      <h2 className="text-2xl font-medium text-center mb-8">
        Tickets Registration
      </h2>

      <div className="space-y-6">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Add up to 5 additional ticketholders (optional)
          </label>
          <div className="mt-1 flex items-center">
            <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-md text-gray-500">
              GLASTO-
            </span>
            <input
              {...register('friendCode')}
              type="text"
              placeholder="12345678"
              className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              onClick={addFriend}
              className="ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Add Friend
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {friends.map((friend) => (
          <div key={friend.code} className="flex items-center space-x-2">
            <p>
              {friend.firstname} {friend.lastname} ({friend.code})
            </p>
            <button
              onClick={() => deleteFriend(friend.code)}
              className="inline-flex items-center justify-center text-gray-500 hover:text-red-500"
            >
              <AiFillDelete />
            </button>
          </div>
        ))}
      </div>
      <button onClick={handlePrevious}>Previous</button>
    </div>
  )
}
