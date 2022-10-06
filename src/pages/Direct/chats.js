import { formatTimer } from "../../helpers";
import { getUser } from "../../mocks/fakeUsers"

const chats = [
  {
    ...getUser('sleepcat'),
    catMessages: [
      {
        message: 'Come on!! I want to sleeeep',
        from: 'other',
        ...formatTimer(30),
      },
      {
        message: 'What u doing',
        from: 'other',
        ...formatTimer(30),
      }
    ],
  },
  {
    ...getUser('mm'),
    catMessages: [
      {
        message: 'Hey, lets go!',
        from: 'other',
        ...formatTimer(10),
      },
      {
        message: 'Wait a minuteeee',
        from: 'me',
        ...formatTimer(9),
      },
      {
        message: 'Keep calm, cat',
        from: 'other',
        ...formatTimer(9),
      },
      {
        message: 'But u are crazyy',
        from: 'other',
        ...formatTimer(8),
      }
    ],
  },
  {
    ...getUser('thuglife'),
    catMessages: [
      {
        message: 'loool',
        from: 'other',
        ...formatTimer(10),
      },
      {
        message: 'NO WAY',
        from: 'me',
        ...formatTimer(9),
      },
      {
        message: 'Exact',
        from: 'other',
        ...formatTimer(9),
      },
      {
        message: 'Do you want this?',
        from: 'other',
        ...formatTimer(8),
      },
      {
        message: 'I think nott',
        from: 'other',
        ...formatTimer(8),
      },
    ],
  },
]

export default chats;