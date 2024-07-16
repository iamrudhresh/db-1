import React, { useState } from 'react';
import { CSVReader } from 'react-csv';

const CSVDisplay = () => {
    const [csvData, setCsvData] = useState([]);

    const handleFile = (data) => {
        setCsvData(data);
    };

    return (
        <div>
            <h2>Upload and Display CSV</h2>
            <CSVReader
                onFileLoaded={handleFile}
                parserOptions={{ header: true }}
                inputId="csv-input"
                inputStyle={{ color: 'red' }}
            />
            <h3>CSV Data:</h3>
            <table className="table">
                <thead>
                    <tr>
                        {csvData.length > 0 && Object.keys(csvData[0]).map((key, index) => (
                            <th key={index}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {csvData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(row).map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CSVDisplay;
