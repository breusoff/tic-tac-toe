import React, {FC, PropsWithChildren} from "react";
import {PageWrapper} from "./Page.styles";

const Page: FC<PropsWithChildren> = ({children}) => {
    return <PageWrapper>{children}</PageWrapper>;
};

export default Page;
