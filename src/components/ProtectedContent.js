import React from 'react'

import StudentList from "./StudentList"
import MenuNav from "./MenuNav"

export default function ProtectedContent() {
    
    const leftItems = [
        { as: "a", content: "Home", key: "home" },
        { as: "a", content: "Users", key: "users" }
    ];
    const rightItems = [
        { as: "a", content: "Login", key: "login" },
        { as: "a", content: "Register", key: "register" }
    ];

    return (
        <div>
            <MenuNav leftItems={leftItems} rightItems={rightItems} />
            <StudentList/>
        </div>
    )
}