import styled from "styled-components";
import {FormItem} from "src/components/ui/Form/Form.styles";

export const SelectRangeWrapper = styled(FormItem)`
    display: grid;
    align-items: center;
    grid-template-columns: 3.2rem 1fr 3.2rem;
    gap: 1.6rem;

    padding: 0.8rem 1.6rem;
`;
