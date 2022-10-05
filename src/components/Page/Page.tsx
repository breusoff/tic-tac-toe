import React, {FC, PropsWithChildren} from "react";

const Page: FC<PropsWithChildren> = ({children}) => {
    return <main>{children}</main>;
};

export default Page;
