"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCandidates = void 0;
const getCandidates = (req, res) => {
    const candidateData = [
        {
            coalition: 'Administration Slate',
            candidates: [
                { id: 1, name: 'Benhur Abalos', party: 'PFP', position: 'Interior Secretary' },
            ],
        },
        {
            coalition: 'DuterTen Coalition',
            candidates: [
                { id: 13, name: "Ronald 'Bato' dela Rosa", party: 'PDP-Laban', position: 'Incumbent Senator' },
            ],
        },
    ];
    res.json(candidateData);
};
exports.getCandidates = getCandidates;
