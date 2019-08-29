import React from 'react'

import StudentList from "./StudentList"
import MenuNav from "./MenuNav"

export default function ProtectedContent() {
    
    const leftItems = [
        { as: "a", content: "Home", key: "home" },
        
    ];
    const rightItems = [
        { as: "a", content: "Log Out", key: "login" },
        
    ];

    return (
        <div>
            <MenuNav leftItems={leftItems} rightItems={rightItems} />
            <StudentList/>
        </div>
    )
}