import React, { useState } from 'react';
import { CSVReader } from 'react-csv';// Import CSS file

const CSVDisplay = () => {
    const [csvData, setCsvData] = useState([]);

    const handleFile = (data) => {
        setCsvData(data);
    };

    return (
        <div className="csv-display">
            <h2>Upload and Display CSV</h2>
            <CSVReader
                onFileLoaded={handleFile}
                parserOptions={{ header: true }}
                inputId="csv-input"
                inputStyle={{ color: 'red' }}
            />
            {csvData.length > 0 && (
                <div>
                    <h3>CSV Data:</h3>
                    <table className="csv-table">
                        <thead>
                            <tr>
                                {Object.keys(csvData[0]).map((key, index) => (
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
            )}
        </div>
    );
};

export default CSVDisplay;
