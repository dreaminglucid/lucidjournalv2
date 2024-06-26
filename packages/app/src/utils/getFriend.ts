import { type IDatabaseUser, type IFriend } from "../store/useGlobalStore"

interface Props {
  friendship: IFriend
  userId: string
}

const getFriend = ({
  friendship,
  userId
}: Props): { friendData: IDatabaseUser | null, status: string | null } => {
  if (friendship.user_a === userId) {
    if (!Array.isArray(friendship.userData2)) {
      return { friendData: friendship.userData2, status: friendship.status }
    }
  }

  if (friendship.user_b === userId) {
    if (!Array.isArray(friendship.userData1)) {
      return { friendData: friendship.userData1, status: friendship.status }
    }
  }

  return { friendData: null, status: null }
}

export default getFriend
