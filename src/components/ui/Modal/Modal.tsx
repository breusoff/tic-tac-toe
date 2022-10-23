import React, {FC, PropsWithChildren} from "react";
import RModal, {Styles} from "react-modal";
import {IModalProps} from "src/components/ui/Modal/IModalProps";

const styles: Styles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
        border: "none",
        padding: 0,
        borderRadius: 0,

        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",

        background: "none",
    },
};

RModal.setAppElement("#root");

const Modal: FC<PropsWithChildren<IModalProps>> = ({
    isOpen = false,
    onClose,
    children,
}) => {
    return (
        <RModal isOpen={isOpen} onRequestClose={onClose} style={styles}>
            {children}
        </RModal>
    );
};

export default Modal;
