import { useState } from 'react';
import Select from 'react-select'
import "./SelectPort.scss";

const options = [
    { value: 'com3', label: 'COM 3' },
    { value: 'com5', label: 'COM 5' },
    { value: 'com6', label: 'COM 6' },
];

const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        border: 'none',
        backgroundColor: 'rgba(244,243,243,1)',
        outline: 'none',
        padding: 8,
        borderRadius: 7
    }),

    menu: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: 'rgba(244,243,243,1)',
        color: "#54535e",
        padding: 8,
        borderRadius: 7
    }),

    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: 'none',
        borderRadius: 7
    }),

    singleValue: (provided: any) => ({
        ...provided,
        color: '#54535e'
    })
}

function SelectPort () {
    const [selectedOption, setSelectedOption] = useState(null);
    const [connection, setConnection] = useState(false);

    return (
        <div className="select-port-container select-container">
            <div className="content-title-default">
                <span>COM Port Seçme</span>
            </div>
            <div className="select-port-content">
                <Select
                    placeholder={"Bir port seç..."}
                    styles={customStyles}
                    defaultValue={selectedOption}
                    onChange={(e: any) => setSelectedOption(e.value)}
                    options={options}
                />
                <div className="buttons">
                    <div
                        onClick={() => {
                            if (selectedOption) {
                                setConnection(true);
                            }
                        }}
                        className={`button ${selectedOption && !connection ? '' : 'disabled'}`}
                    >
                        <span>Bağlan</span>
                    </div>
                    <div
                        onClick={() => {
                            setConnection(false);
                        }}
                        className={`button ${!selectedOption || connection ? '' : 'disabled'}`}
                    >
                        <span>Bağlantıyı Kes</span>
                    </div>
                </div>
                <div className="details">
                    {
                        selectedOption &&
                        <div className="detail">
                            <span>Port</span>
                            <span>{selectedOption}</span>
                        </div>
                    }
                    <div className="detail">
                        <span>Bağlantı</span>
                        <span>{connection ? 'Bağlanıldı' : 'Bağlantı yok'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectPort
