import React from 'react';
import Foodcard from "../../../ComPonent/Foodcard/Foodcard";
const Ordertabs = ({items}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map((item) => (
                        <Foodcard item={item}></Foodcard>
                      ))}
                    </div> 
        </div>
    );
};

export default Ordertabs;