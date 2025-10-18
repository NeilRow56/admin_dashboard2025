import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className=''>User</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Last Seen</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell className='font-medium'>
              {user.firstName} {user.lastName}
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
