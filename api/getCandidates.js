export default function handler(req, res) {
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
  
    res.status(200).json(candidateData);
  }