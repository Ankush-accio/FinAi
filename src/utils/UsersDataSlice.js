import { createSlice } from "@reduxjs/toolkit";

const messages = [
  {
    id: 1,
    name: "Luis - Github",
    time: "45m",
    avatarBg: "bg-blue-400",
    messages: [
      { sender: "Luis", text: "Hey! Can you check the repository permissions today?", timestamp: "45m" },
      { sender: "You", text: "Sure, I’ll take a look now.", timestamp: "43m" },
      { sender: "Luis", text: "Thanks, let me know if anything looks off.", timestamp: "41m" }
    ]
  },
  {
    id: 2,
    name: "Ivan - Nike",
    time: "30m",
    avatarBg: "bg-red-400",
    messages: [
      { sender: "Ivan", text: "Analytics look wrong. Please investigate before the meeting.", timestamp: "30m" },
      { sender: "You", text: "Noted. I’ll re-run the reports.", timestamp: "28m" },
      { sender: "Ivan", text: "Appreciate it. Need this sorted ASAP.", timestamp: "27m" }
    ]
  },
  {
    id: 3,
    name: "Lead from New York",
    time: "40m",
    avatarBg: "bg-blue-400",
    messages: [
      { sender: "Lead", text: "Let’s finalize the project plan before client call.", timestamp: "40m" },
      { sender: "You", text: "Sharing updated draft shortly.", timestamp: "39m" },
      { sender: "Lead", text: "Great. Add a risk assessment too.", timestamp: "38m" }
    ]
  },
  {
    id: 4,
    name: "Booking API problems",
    time: "45m",
    avatarBg: "bg-gray-800",
    messages: [
      { sender: "System", text: "Bug in booking API on mobile. Needs fixing now.", timestamp: "45m" },
      { sender: "You", text: "Investigating the issue.", timestamp: "44m" },
      { sender: "System", text: "Affects 20% of users. High priority.", timestamp: "43m" },
      { sender: "You", text: "Rolling out patch in 10 minutes.", timestamp: "42m" }
    ]
  },
  {
    id: 5,
    name: "Miracle - Exemplary Bank",
    time: "45m",
    avatarBg: "bg-gray-300",
    messages: [
      { sender: "Miracle", text: "Try again after clearing cache. Still having issues?", timestamp: "45m" },
      { sender: "You", text: "Yes, still getting errors.", timestamp: "44m" },
      { sender: "Miracle", text: "Checking backend logs.", timestamp: "43m" }
    ]
  },
  {
    id: 6,
    name: "Sarah - Dropbox",
    time: "15m",
    avatarBg: "bg-blue-600",
    messages: [
      { sender: "Sarah", text: "Please check final document version before we submit.", timestamp: "15m" },
      { sender: "You", text: "Reviewing now.", timestamp: "14m" },
      { sender: "Sarah", text: "Make sure version history is intact.", timestamp: "13m" },
      { sender: "You", text: "Confirmed. Looks good.", timestamp: "12m" }
    ]
  },
  {
    id: 7,
    name: "Team - Slack",
    time: "5m",
    avatarBg: "bg-purple-500",
    messages: [
      { sender: "Team", text: "Meeting in 10 minutes. Prepare your updates please.", timestamp: "5m" },
      { sender: "You", text: "Got it, updating slides.", timestamp: "4m" },
      { sender: "Team", text: "Join via Zoom, link in calendar.", timestamp: "3m" }
    ]
  },
  {
    id: 8,
    name: "Mike - Amazon",
    time: "1h",
    avatarBg: "bg-yellow-500",
    messages: [
      { sender: "Mike", text: "Your order shipped. Delivery expected by this evening.", timestamp: "1h" },
      { sender: "You", text: "Thanks! Looking forward to it.", timestamp: "59m" },
      { sender: "Mike", text: "Let us know if there are delays.", timestamp: "58m" }
    ]
  },
  {
    id: 9,
    name: "Olivia - LinkedIn",
    time: "50m",
    avatarBg: "bg-pink-500",
    messages: [
      { sender: "Olivia", text: "Can we connect later today for profile feedback?", timestamp: "50m" },
      { sender: "You", text: "Absolutely. What time works for you?", timestamp: "48m" },
      { sender: "Olivia", text: "How about 3 PM?", timestamp: "47m" },
      { sender: "You", text: "3 PM is perfect.", timestamp: "46m" }
    ]
  },
  {
    id: 10,
    name: "Chris - Figma",
    time: "35m",
    avatarBg: "bg-green-500",
    messages: [
      { sender: "Chris", text: "I’ve shared updated design. Let me know thoughts.", timestamp: "35m" },
      { sender: "You", text: "Love the new flow. Clean and intuitive.", timestamp: "34m" },
      { sender: "Chris", text: "Great! I'll proceed with the prototype.", timestamp: "33m" }
    ]
  }
];


const userDataSlice = createSlice({
    initialState : messages,
    name : "UserData",
    reducers : {
        SendMsg : (state, action) => {
            const{currUser, textMsg} = action.payload
            let obj = state[currUser]
            obj.messages.push({sender : "You", text : textMsg, timestamp : "1m"})
        }
    }
})

export default userDataSlice.reducer
export const{SendMsg} = userDataSlice.actions