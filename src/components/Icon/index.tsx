import React from "react";

const IconComponent = (name: string, atr?: any): React.JSX.Element => {
    const NewIconComponent = name;
    return <NewIconComponent {...atr} />
}


export default IconComponent;