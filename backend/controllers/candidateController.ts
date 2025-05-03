import { Request, Response } from 'express';

export const getCandidates = (req: Request, res: Response) => {
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