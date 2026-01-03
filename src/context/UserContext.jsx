import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: "David James",
        image: "https://i.pravatar.cc/150?img=12",
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
