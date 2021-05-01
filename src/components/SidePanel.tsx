import React from 'react';
import { Drawer } from '@material-ui/core';

interface SidePanelProps{
    isOpen: boolean;
    setIsOpen: (status: boolean) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, setIsOpen }) => {

    return (
        <div>
            <Drawer
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <div>
                    <ul>
                        <li>XD</li>
                        <li>XD</li>
                        <li>XD</li>
                        <li>XD</li>
                        <li>XD</li>
                        <li>XD</li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
}
export default SidePanel;
