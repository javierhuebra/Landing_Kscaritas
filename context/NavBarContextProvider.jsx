import React, { useEffect, useState } from 'react';

import { navBarContext } from './context';

const NavBarContextProvider = ({ children }) => {
    const [isNavBarActive, setIsNavBarActive] = useState(true)

    useEffect(() => {
        console.log('NavBarContextProvider effect')
    }, [])

    return ( 
        <navBarContext.Provider
            value={{
                isNavBarActive, 
                setIsNavBarActive
            }}
        >
            {children}
        </navBarContext.Provider>
     );
}
 
export default NavBarContextProvider;