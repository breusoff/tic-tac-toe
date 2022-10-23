import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import Modal from "src/components/ui/Modal";
import {IModalProps} from "src/components/ui/Modal/IModalProps";
import {
    SwitchItem,
    SwitchWrapper,
} from "src/components/ui/Switch/Switch.styles";
import routes from "src/routes";
import {GameWinner} from "src/types/GameWinner";
import {GameWinnerModalContent as Content} from "./GameWinnerModal.styles";
import Icon from "./GameWinnerModalIcon";

interface IGameWinnerModalProps extends IModalProps {
    winner: GameWinner;
}

const GameWinnerModal: FC<IGameWinnerModalProps> = ({
    isOpen = false,
    onClose,
    winner,
}) => {
    const {t} = useTranslation();

    return (
        <Modal isOpen={isOpen}>
            <Content>
                <Icon winner={winner} />
                <SwitchWrapper>
                    <SwitchItem active onClick={onClose}>
                        {t("modals.gameWinner.repeat")}
                    </SwitchItem>
                    <SwitchItem
                        as={Link}
                        to={routes.main.url()}
                        onClick={onClose}
                    >
                        {t("modals.gameWinner.quit")}
                    </SwitchItem>
                </SwitchWrapper>
            </Content>
        </Modal>
    );
};

export default GameWinnerModal;
