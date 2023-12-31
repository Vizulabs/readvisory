'use client';

import { Text } from "../Text";


export const LinedInfo =({num,title,info})=>{
    return(
        <div className="xs:w-full sm:w-full md:w-3/4 lg:w-3/4">
            <Text
                style="text-xs mb-2 text-start"
                value={num}
            />
            <hr className="mb-2 hr-footer"/>
            <Text
                style="text-md mb-2 font-bold"
                value={title}
            />
            <Text
                style="text-xs text-start c-deep-black leading-6"
                value={info}
            />

        </div>
    )
}