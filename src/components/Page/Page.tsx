import React, {FC, PropsWithChildren} from "react";

const Page: FC<PropsWithChildren> = ({children}) => {
    return <div>{children}</div>;
};

export default Page;
