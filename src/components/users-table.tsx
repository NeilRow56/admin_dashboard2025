import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export type User = {
  id: number
  firstName?: string
  lastName?: string
  lastSignInAt: number
  emailAddresses: { id: number; emailAddress: string; [key: string]: unknown }[]
  [key: string]: unknown
}
export function UsersTable({ users }: { users: User[] }) {
  return (
    <Table className='mt-12'>
      <TableHeader>
        <TableRow className='text-lg font-bold'>
          <TableHead className='text-blue-600'>User</TableHead>
          <TableHead className='text-blue-600'>Email</TableHead>
          <TableHead className='text-blue-600'>Last Seen</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell>
              <div className='flex items-center gap-3'>
                <Avatar className='h-9 w-9'>
                  <AvatarImage
                    src='/globe.svg'
                    alt={`${user.firstName} ${user.lastName}`}
                  ></AvatarImage>
                  <AvatarFallback>
                    {user.firstName ? user.firstName[0] : 'User'}
                  </AvatarFallback>
                </Avatar>
                {user.firstName ? `${user.firstName} ${user.lastName}` : 'User'}
              </div>
            </TableCell>
            <TableCell>{user.emailAddresses[0].emailAddress}</TableCell>
            <TableCell>
              {new Date(user.lastSignInAt).toLocaleString('en-GB')}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
